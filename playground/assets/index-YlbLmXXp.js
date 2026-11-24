(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const ou="186",xa={ROTATE:0,DOLLY:1,PAN:2},va={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$0=0,xf=1,X0=2,ts=1,q0=2,Za=3,Lr=0,Bn=1,Vi=2,$i=0,ns=1,Sf=2,Ef=3,Mf=4,Y0=5,ma=100,j0=101,K0=102,Z0=103,J0=104,Q0=200,ev=201,tv=202,nv=203,Zd=204,Jd=205,iv=206,rv=207,av=208,sv=209,ov=210,lv=211,cv=212,uv=213,fv=214,fc=0,dc=1,hc=2,rs=3,pc=4,mc=5,_c=6,gc=7,Qd=0,dv=1,hv=2,Di=0,eh=1,th=2,nh=3,ih=4,rh=5,ah=6,sh=7,oh=300,Ir=301,Ma=302,dl=303,hl=304,Io=306,vc=1e3,Wi=1001,yc=1002,xn=1003,pv=1004,Is=1005,Tn=1006,pl=1007,Pr=1008,Xn=1009,lh=1010,ch=1011,as=1012,lu=1013,Li=1014,Ri=1015,Ii=1016,cu=1017,uu=1018,ss=1020,uh=35902,fh=35899,dh=1021,hh=1022,_i=1023,qi=1026,Dr=1027,ph=1028,fu=1029,Ur=1030,du=1031,hu=1033,mo=33776,_o=33777,go=33778,vo=33779,xc=35840,Sc=35841,Ec=35842,Mc=35843,bc=36196,wc=37492,Tc=37496,Ac=37488,Rc=37489,Eo=37490,Cc=37491,Pc=37808,Dc=37809,Lc=37810,Ic=37811,Uc=37812,Fc=37813,Nc=37814,Oc=37815,Bc=37816,kc=37817,zc=37818,Gc=37819,Hc=37820,Vc=37821,Wc=36492,$c=36494,Xc=36495,qc=36283,Yc=36284,Mo=36285,jc=36286,mv=3200,Kc=0,_v=1,ar="",ni="srgb",bo="srgb-linear",wo="linear",Yt="srgb",ml=7680,gv=519,vv=512,yv=513,xv=514,pu=515,Sv=516,Ev=517,mu=518,Mv=519,bv=35044,bf="300 es",Ci=2e3,os=2001;function wv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function To(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Tv(){const n=To("canvas");return n.style.display="block",n}const wf={};function Tf(...n){const e="THREE."+n.shift();console.log(e,...n)}function mh(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ut(...n){n=mh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Gt(...n){n=mh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Sa(...n){const e=n.join(" ");e in wf||(wf[e]=!0,ut(...n))}function Av(n,e,t){return new Promise(function(i,r){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}const Rv={[fc]:dc,[hc]:_c,[pc]:gc,[rs]:mc,[dc]:fc,[_c]:hc,[gc]:pc,[mc]:rs};class lr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,l=r.length;o<l;o++)r[o].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],is=Math.PI/180,Zc=180/Math.PI;function us(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]).toLowerCase()}function Ft(n,e,t){return Math.max(e,Math.min(t,n))}function Cv(n,e){return(n%e+e)%e}function _l(n,e,t){return(1-t)*n+t*e}function ka(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Nn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Pv={DEG2RAD:is},Vu=class Vu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ft(this.x,e.x,t.x),this.y=Ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ft(this.x,e,t),this.y=Ft(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,l=this.y-e.y;return this.x=o*i-l*r+e.x,this.y=o*r+l*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vu.prototype.isVector2=!0;let ht=Vu;class sr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,l,u){let f=i[r+0],h=i[r+1],_=i[r+2],g=i[r+3],p=o[l+0],y=o[l+1],T=o[l+2],I=o[l+3];if(g!==I||f!==p||h!==y||_!==T){let E=f*p+h*y+_*T+g*I;E<0&&(p=-p,y=-y,T=-T,I=-I,E=-E);let v=1-u;if(E<.9995){const U=Math.acos(E),O=Math.sin(U);v=Math.sin(v*U)/O,u=Math.sin(u*U)/O,f=f*v+p*u,h=h*v+y*u,_=_*v+T*u,g=g*v+I*u}else{f=f*v+p*u,h=h*v+y*u,_=_*v+T*u,g=g*v+I*u;const U=1/Math.sqrt(f*f+h*h+_*_+g*g);f*=U,h*=U,_*=U,g*=U}}e[t]=f,e[t+1]=h,e[t+2]=_,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,r,o,l){const u=i[r],f=i[r+1],h=i[r+2],_=i[r+3],g=o[l],p=o[l+1],y=o[l+2],T=o[l+3];return e[t]=u*T+_*g+f*y-h*p,e[t+1]=f*T+_*p+h*g-u*y,e[t+2]=h*T+_*y+u*p-f*g,e[t+3]=_*T-u*g-f*p-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,o=e._z,l=e._order,u=Math.cos,f=Math.sin,h=u(i/2),_=u(r/2),g=u(o/2),p=f(i/2),y=f(r/2),T=f(o/2);switch(l){case"XYZ":this._x=p*_*g+h*y*T,this._y=h*y*g-p*_*T,this._z=h*_*T+p*y*g,this._w=h*_*g-p*y*T;break;case"YXZ":this._x=p*_*g+h*y*T,this._y=h*y*g-p*_*T,this._z=h*_*T-p*y*g,this._w=h*_*g+p*y*T;break;case"ZXY":this._x=p*_*g-h*y*T,this._y=h*y*g+p*_*T,this._z=h*_*T+p*y*g,this._w=h*_*g-p*y*T;break;case"ZYX":this._x=p*_*g-h*y*T,this._y=h*y*g+p*_*T,this._z=h*_*T-p*y*g,this._w=h*_*g+p*y*T;break;case"YZX":this._x=p*_*g+h*y*T,this._y=h*y*g+p*_*T,this._z=h*_*T-p*y*g,this._w=h*_*g-p*y*T;break;case"XZY":this._x=p*_*g-h*y*T,this._y=h*y*g-p*_*T,this._z=h*_*T+p*y*g,this._w=h*_*g+p*y*T;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],o=t[8],l=t[1],u=t[5],f=t[9],h=t[2],_=t[6],g=t[10],p=i+u+g;if(p>0){const y=.5/Math.sqrt(p+1);this._w=.25/y,this._x=(_-f)*y,this._y=(o-h)*y,this._z=(l-r)*y}else if(i>u&&i>g){const y=2*Math.sqrt(1+i-u-g);this._w=(_-f)/y,this._x=.25*y,this._y=(r+l)/y,this._z=(o+h)/y}else if(u>g){const y=2*Math.sqrt(1+u-i-g);this._w=(o-h)/y,this._x=(r+l)/y,this._y=.25*y,this._z=(f+_)/y}else{const y=2*Math.sqrt(1+g-i-u);this._w=(l-r)/y,this._x=(o+h)/y,this._y=(f+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,o=e._z,l=e._w,u=t._x,f=t._y,h=t._z,_=t._w;return this._x=i*_+l*u+r*h-o*f,this._y=r*_+l*f+o*u-i*h,this._z=o*_+l*h+i*f-r*u,this._w=l*_-i*u-r*f-o*h,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,o=e._z,l=e._w,u=this.dot(e);u<0&&(i=-i,r=-r,o=-o,l=-l,u=-u);let f=1-t;if(u<.9995){const h=Math.acos(u),_=Math.sin(h);f=Math.sin(f*h)/_,t=Math.sin(t*h)/_,this._x=this._x*f+i*t,this._y=this._y*f+r*t,this._z=this._z*f+o*t,this._w=this._w*f+l*t,this._onChangeCallback()}else this._x=this._x*f+i*t,this._y=this._y*f+r*t,this._z=this._z*f+o*t,this._w=this._w*f+l*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Wu=class Wu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Af.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Af.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=e.elements,l=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*l,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*l,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*l,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,o=e.x,l=e.y,u=e.z,f=e.w,h=2*(l*r-u*i),_=2*(u*t-o*r),g=2*(o*i-l*t);return this.x=t+f*h+l*g-u*_,this.y=i+f*_+u*h-o*g,this.z=r+f*g+o*_-l*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ft(this.x,e.x,t.x),this.y=Ft(this.y,e.y,t.y),this.z=Ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ft(this.x,e,t),this.y=Ft(this.y,e,t),this.z=Ft(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,o=e.z,l=t.x,u=t.y,f=t.z;return this.x=r*f-o*u,this.y=o*l-i*f,this.z=i*u-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gl.copy(this).projectOnVector(e),this.sub(gl)}reflect(e){return this.sub(gl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wu.prototype.isVector3=!0;let ne=Wu;const gl=new ne,Af=new sr,$u=class $u{constructor(e,t,i,r,o,l,u,f,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,l,u,f,h)}set(e,t,i,r,o,l,u,f,h){const _=this.elements;return _[0]=e,_[1]=r,_[2]=u,_[3]=t,_[4]=o,_[5]=f,_[6]=i,_[7]=l,_[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,l=i[0],u=i[3],f=i[6],h=i[1],_=i[4],g=i[7],p=i[2],y=i[5],T=i[8],I=r[0],E=r[3],v=r[6],U=r[1],O=r[4],L=r[7],N=r[2],M=r[5],V=r[8];return o[0]=l*I+u*U+f*N,o[3]=l*E+u*O+f*M,o[6]=l*v+u*L+f*V,o[1]=h*I+_*U+g*N,o[4]=h*E+_*O+g*M,o[7]=h*v+_*L+g*V,o[2]=p*I+y*U+T*N,o[5]=p*E+y*O+T*M,o[8]=p*v+y*L+T*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],l=e[4],u=e[5],f=e[6],h=e[7],_=e[8];return t*l*_-t*u*h-i*o*_+i*u*f+r*o*h-r*l*f}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],l=e[4],u=e[5],f=e[6],h=e[7],_=e[8],g=_*l-u*h,p=u*f-_*o,y=h*o-l*f,T=t*g+i*p+r*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const I=1/T;return e[0]=g*I,e[1]=(r*h-_*i)*I,e[2]=(u*i-r*l)*I,e[3]=p*I,e[4]=(_*t-r*f)*I,e[5]=(r*o-u*t)*I,e[6]=y*I,e[7]=(i*f-h*t)*I,e[8]=(l*t-i*o)*I,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,l,u){const f=Math.cos(o),h=Math.sin(o);return this.set(i*f,i*h,-i*(f*l+h*u)+l+e,-r*h,r*f,-r*(-h*l+f*u)+u+t,0,0,1),this}scale(e,t){return Sa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vl.makeScale(e,t)),this}rotate(e){return Sa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vl.makeRotation(-e)),this}translate(e,t){return Sa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};$u.prototype.isMatrix3=!0;let gt=$u;const vl=new gt,Rf=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cf=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dv(){const n={enabled:!0,workingColorSpace:bo,spaces:{},convert:function(r,o,l){return this.enabled===!1||o===l||!o||!l||(this.spaces[o].transfer===Yt&&(r.r=Xi(r.r),r.g=Xi(r.g),r.b=Xi(r.b)),this.spaces[o].primaries!==this.spaces[l].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Yt&&(r.r=Ea(r.r),r.g=Ea(r.g),r.b=Ea(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ar?wo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,l){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return Sa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return Sa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[bo]:{primaries:e,whitePoint:i,transfer:wo,toXYZ:Rf,fromXYZ:Cf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:e,whitePoint:i,transfer:Yt,toXYZ:Rf,fromXYZ:Cf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),n}const Nt=Dv();function Xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ea(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ta;class Lv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ta===void 0&&(ta=To("canvas")),ta.width=e.width,ta.height=e.height;const r=ta.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ta}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=To("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let l=0;l<o.length;l++)o[l]=Xi(o[l]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xi(t[i]/255)*255):t[i]=Xi(t[i]);return{data:t,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Iv=0;class _u{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Iv++}),this.uuid=us(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let l=0,u=r.length;l<u;l++)r[l].isDataTexture?o.push(yl(r[l].image)):o.push(yl(r[l]))}else o=yl(r);i.url=o}return t||(e.images[this.uuid]=i),i}}function yl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Lv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let Uv=0;const xl=new ne;class In extends lr{constructor(e=In.DEFAULT_IMAGE,t=In.DEFAULT_MAPPING,i=Wi,r=Wi,o=Tn,l=Pr,u=_i,f=Xn,h=In.DEFAULT_ANISOTROPY,_=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uv++}),this.uuid=us(),this.name="",this.source=new _u(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=l,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=f,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xl).x}get height(){return this.source.getSize(xl).y}get depth(){return this.source.getSize(xl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ut(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ut(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vc:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case yc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vc:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case yc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=oh;In.DEFAULT_ANISOTROPY=1;const Xu=class Xu{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=this.w,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*r+l[12]*o,this.y=l[1]*t+l[5]*i+l[9]*r+l[13]*o,this.z=l[2]*t+l[6]*i+l[10]*r+l[14]*o,this.w=l[3]*t+l[7]*i+l[11]*r+l[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o;const f=e.elements,h=f[0],_=f[4],g=f[8],p=f[1],y=f[5],T=f[9],I=f[2],E=f[6],v=f[10];if(Math.abs(_-p)<.01&&Math.abs(g-I)<.01&&Math.abs(T-E)<.01){if(Math.abs(_+p)<.1&&Math.abs(g+I)<.1&&Math.abs(T+E)<.1&&Math.abs(h+y+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const O=(h+1)/2,L=(y+1)/2,N=(v+1)/2,M=(_+p)/4,V=(g+I)/4,R=(T+E)/4;return O>L&&O>N?O<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(O),r=M/i,o=V/i):L>N?L<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(L),i=M/r,o=R/r):N<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(N),i=V/o,r=R/o),this.set(i,r,o,t),this}let U=Math.sqrt((E-T)*(E-T)+(g-I)*(g-I)+(p-_)*(p-_));return Math.abs(U)<.001&&(U=1),this.x=(E-T)/U,this.y=(g-I)/U,this.z=(p-_)/U,this.w=Math.acos((h+y+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ft(this.x,e.x,t.x),this.y=Ft(this.y,e.y,t.y),this.z=Ft(this.z,e.z,t.z),this.w=Ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ft(this.x,e,t),this.y=Ft(this.y,e,t),this.z=Ft(this.z,e,t),this.w=Ft(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xu.prototype.isVector4=!0;let on=Xu;class Fv extends lr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new on(0,0,e,t),this.scissorTest=!1,this.viewport=new on(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},o=new In(r),l=i.count;for(let u=0;u<l;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new _u(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends Fv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class _h extends In{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nv extends In{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Lo=class Lo{constructor(e,t,i,r,o,l,u,f,h,_,g,p,y,T,I,E){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,l,u,f,h,_,g,p,y,T,I,E)}set(e,t,i,r,o,l,u,f,h,_,g,p,y,T,I,E){const v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=r,v[1]=o,v[5]=l,v[9]=u,v[13]=f,v[2]=h,v[6]=_,v[10]=g,v[14]=p,v[3]=y,v[7]=T,v[11]=I,v[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lo().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/na.setFromMatrixColumn(e,0).length(),o=1/na.setFromMatrixColumn(e,1).length(),l=1/na.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*l,t[9]=i[9]*l,t[10]=i[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,o=e.z,l=Math.cos(i),u=Math.sin(i),f=Math.cos(r),h=Math.sin(r),_=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const p=l*_,y=l*g,T=u*_,I=u*g;t[0]=f*_,t[4]=-f*g,t[8]=h,t[1]=y+T*h,t[5]=p-I*h,t[9]=-u*f,t[2]=I-p*h,t[6]=T+y*h,t[10]=l*f}else if(e.order==="YXZ"){const p=f*_,y=f*g,T=h*_,I=h*g;t[0]=p+I*u,t[4]=T*u-y,t[8]=l*h,t[1]=l*g,t[5]=l*_,t[9]=-u,t[2]=y*u-T,t[6]=I+p*u,t[10]=l*f}else if(e.order==="ZXY"){const p=f*_,y=f*g,T=h*_,I=h*g;t[0]=p-I*u,t[4]=-l*g,t[8]=T+y*u,t[1]=y+T*u,t[5]=l*_,t[9]=I-p*u,t[2]=-l*h,t[6]=u,t[10]=l*f}else if(e.order==="ZYX"){const p=l*_,y=l*g,T=u*_,I=u*g;t[0]=f*_,t[4]=T*h-y,t[8]=p*h+I,t[1]=f*g,t[5]=I*h+p,t[9]=y*h-T,t[2]=-h,t[6]=u*f,t[10]=l*f}else if(e.order==="YZX"){const p=l*f,y=l*h,T=u*f,I=u*h;t[0]=f*_,t[4]=I-p*g,t[8]=T*g+y,t[1]=g,t[5]=l*_,t[9]=-u*_,t[2]=-h*_,t[6]=y*g+T,t[10]=p-I*g}else if(e.order==="XZY"){const p=l*f,y=l*h,T=u*f,I=u*h;t[0]=f*_,t[4]=-g,t[8]=h*_,t[1]=p*g+I,t[5]=l*_,t[9]=y*g-T,t[2]=T*g-y,t[6]=u*_,t[10]=I*g+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ov,e,Bv)}lookAt(e,t,i){const r=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),Ji.crossVectors(i,Hn),Ji.lengthSq()===0&&(Math.abs(i.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),Ji.crossVectors(i,Hn)),Ji.normalize(),Us.crossVectors(Hn,Ji),r[0]=Ji.x,r[4]=Us.x,r[8]=Hn.x,r[1]=Ji.y,r[5]=Us.y,r[9]=Hn.y,r[2]=Ji.z,r[6]=Us.z,r[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,l=i[0],u=i[4],f=i[8],h=i[12],_=i[1],g=i[5],p=i[9],y=i[13],T=i[2],I=i[6],E=i[10],v=i[14],U=i[3],O=i[7],L=i[11],N=i[15],M=r[0],V=r[4],R=r[8],B=r[12],F=r[1],W=r[5],Y=r[9],ae=r[13],X=r[2],q=r[6],de=r[10],_e=r[14],Ee=r[3],pe=r[7],me=r[11],Se=r[15];return o[0]=l*M+u*F+f*X+h*Ee,o[4]=l*V+u*W+f*q+h*pe,o[8]=l*R+u*Y+f*de+h*me,o[12]=l*B+u*ae+f*_e+h*Se,o[1]=_*M+g*F+p*X+y*Ee,o[5]=_*V+g*W+p*q+y*pe,o[9]=_*R+g*Y+p*de+y*me,o[13]=_*B+g*ae+p*_e+y*Se,o[2]=T*M+I*F+E*X+v*Ee,o[6]=T*V+I*W+E*q+v*pe,o[10]=T*R+I*Y+E*de+v*me,o[14]=T*B+I*ae+E*_e+v*Se,o[3]=U*M+O*F+L*X+N*Ee,o[7]=U*V+O*W+L*q+N*pe,o[11]=U*R+O*Y+L*de+N*me,o[15]=U*B+O*ae+L*_e+N*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],l=e[1],u=e[5],f=e[9],h=e[13],_=e[2],g=e[6],p=e[10],y=e[14],T=e[3],I=e[7],E=e[11],v=e[15],U=f*y-h*p,O=u*y-h*g,L=u*p-f*g,N=l*y-h*_,M=l*p-f*_,V=l*g-u*_;return t*(I*U-E*O+v*L)-i*(T*U-E*N+v*M)+r*(T*O-I*N+v*V)-o*(T*L-I*M+E*V)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],o=e[1],l=e[5],u=e[9],f=e[2],h=e[6],_=e[10];return t*(l*_-u*h)-i*(o*_-u*f)+r*(o*h-l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],l=e[4],u=e[5],f=e[6],h=e[7],_=e[8],g=e[9],p=e[10],y=e[11],T=e[12],I=e[13],E=e[14],v=e[15],U=t*u-i*l,O=t*f-r*l,L=t*h-o*l,N=i*f-r*u,M=i*h-o*u,V=r*h-o*f,R=_*I-g*T,B=_*E-p*T,F=_*v-y*T,W=g*E-p*I,Y=g*v-y*I,ae=p*v-y*E,X=U*ae-O*Y+L*W+N*F-M*B+V*R;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/X;return e[0]=(u*ae-f*Y+h*W)*q,e[1]=(r*Y-i*ae-o*W)*q,e[2]=(I*V-E*M+v*N)*q,e[3]=(p*M-g*V-y*N)*q,e[4]=(f*F-l*ae-h*B)*q,e[5]=(t*ae-r*F+o*B)*q,e[6]=(E*L-T*V-v*O)*q,e[7]=(_*V-p*L+y*O)*q,e[8]=(l*Y-u*F+h*R)*q,e[9]=(i*F-t*Y-o*R)*q,e[10]=(T*M-I*L+v*U)*q,e[11]=(g*L-_*M-y*U)*q,e[12]=(u*B-l*W-f*R)*q,e[13]=(t*W-i*B+r*R)*q,e[14]=(I*O-T*N-E*U)*q,e[15]=(_*N-g*O+p*U)*q,this}scale(e){const t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),o=1-i,l=e.x,u=e.y,f=e.z,h=o*l,_=o*u;return this.set(h*l+i,h*u-r*f,h*f+r*u,0,h*u+r*f,_*u+i,_*f-r*l,0,h*f-r*u,_*f+r*l,o*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,l){return this.set(1,i,o,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,o=t._x,l=t._y,u=t._z,f=t._w,h=o+o,_=l+l,g=u+u,p=o*h,y=o*_,T=o*g,I=l*_,E=l*g,v=u*g,U=f*h,O=f*_,L=f*g,N=i.x,M=i.y,V=i.z;return r[0]=(1-(I+v))*N,r[1]=(y+L)*N,r[2]=(T-O)*N,r[3]=0,r[4]=(y-L)*M,r[5]=(1-(p+v))*M,r[6]=(E+U)*M,r[7]=0,r[8]=(T+O)*V,r[9]=(E-U)*V,r[10]=(1-(p+I))*V,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const o=this.determinantAffine();if(o===0)return i.set(1,1,1),t.identity(),this;let l=na.set(r[0],r[1],r[2]).length();const u=na.set(r[4],r[5],r[6]).length(),f=na.set(r[8],r[9],r[10]).length();o<0&&(l=-l),ci.copy(this);const h=1/l,_=1/u,g=1/f;return ci.elements[0]*=h,ci.elements[1]*=h,ci.elements[2]*=h,ci.elements[4]*=_,ci.elements[5]*=_,ci.elements[6]*=_,ci.elements[8]*=g,ci.elements[9]*=g,ci.elements[10]*=g,t.setFromRotationMatrix(ci),i.x=l,i.y=u,i.z=f,this}makePerspective(e,t,i,r,o,l,u=Ci,f=!1){const h=this.elements,_=2*o/(t-e),g=2*o/(i-r),p=(t+e)/(t-e),y=(i+r)/(i-r);let T,I;if(f)T=o/(l-o),I=l*o/(l-o);else if(u===Ci)T=-(l+o)/(l-o),I=-2*l*o/(l-o);else if(u===os)T=-l/(l-o),I=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=_,h[4]=0,h[8]=p,h[12]=0,h[1]=0,h[5]=g,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=T,h[14]=I,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,r,o,l,u=Ci,f=!1){const h=this.elements,_=2/(t-e),g=2/(i-r),p=-(t+e)/(t-e),y=-(i+r)/(i-r);let T,I;if(f)T=1/(l-o),I=l/(l-o);else if(u===Ci)T=-2/(l-o),I=-(l+o)/(l-o);else if(u===os)T=-1/(l-o),I=-o/(l-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=_,h[4]=0,h[8]=0,h[12]=p,h[1]=0,h[5]=g,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=T,h[14]=I,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Lo.prototype.isMatrix4=!0;let an=Lo;const na=new ne,ci=new an,Ov=new ne(0,0,0),Bv=new ne(1,1,1),Ji=new ne,Us=new ne,Hn=new ne,Pf=new an,Df=new sr;class or{constructor(e=0,t=0,i=0,r=or.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,o=r[0],l=r[4],u=r[8],f=r[1],h=r[5],_=r[9],g=r[2],p=r[6],y=r[10];switch(t){case"XYZ":this._y=Math.asin(Ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-Ft(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(p,y),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(Ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,h),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-_,y),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Pf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Df.setFromEuler(this),this.setFromQuaternion(Df,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}or.DEFAULT_ORDER="XYZ";class gu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kv=0;const Lf=new ne,ia=new sr,Bi=new an,Fs=new ne,za=new ne,zv=new ne,Gv=new sr,If=new ne(1,0,0),Uf=new ne(0,1,0),Ff=new ne(0,0,1),Nf={type:"added"},Hv={type:"removed"},ra={type:"childadded",child:null},Sl={type:"childremoved",child:null};class vn extends lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new ne,t=new or,i=new sr,r=new ne(1,1,1);function o(){i.setFromEuler(t,!1)}function l(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new an},normalMatrix:{value:new gt}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ia.setFromAxisAngle(e,t),this.quaternion.multiply(ia),this}rotateOnWorldAxis(e,t){return ia.setFromAxisAngle(e,t),this.quaternion.premultiply(ia),this}rotateX(e){return this.rotateOnAxis(If,e)}rotateY(e){return this.rotateOnAxis(Uf,e)}rotateZ(e){return this.rotateOnAxis(Ff,e)}translateOnAxis(e,t){return Lf.copy(e).applyQuaternion(this.quaternion),this.position.add(Lf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(If,e)}translateY(e){return this.translateOnAxis(Uf,e)}translateZ(e){return this.translateOnAxis(Ff,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fs.copy(e):Fs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),za.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(za,Fs,this.up):Bi.lookAt(Fs,za,this.up),this.quaternion.setFromRotationMatrix(Bi),r&&(Bi.extractRotation(r.matrixWorld),ia.setFromRotationMatrix(Bi),this.quaternion.premultiply(ia.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nf),ra.child=e,this.dispatchEvent(ra),ra.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hv),Sl.child=e,this.dispatchEvent(Sl),Sl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nf),ra.child=e,this.dispatchEvent(ra),ra.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const l=this.children[i].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,e,zv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,Gv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*i-o[8]*r,o[13]+=i-o[1]*t-o[5]*i-o[9]*r,o[14]+=r-o[2]*t-o[6]*i-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(u=>({...u})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let h=0,_=f.length;h<_;h++){const g=f[h];o(e.shapes,g)}else o(e.shapes,f)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,h=this.material.length;f<h;f++)u.push(o(e.materials,this.material[f]));r.material=u}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let u=0;u<this.children.length;u++)r.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];r.animations.push(o(e.animations,f))}}if(t){const u=l(e.geometries),f=l(e.materials),h=l(e.textures),_=l(e.images),g=l(e.shapes),p=l(e.skeletons),y=l(e.animations),T=l(e.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),h.length>0&&(i.textures=h),_.length>0&&(i.images=_),g.length>0&&(i.shapes=g),p.length>0&&(i.skeletons=p),y.length>0&&(i.animations=y),T.length>0&&(i.nodes=T)}return i.object=r,i;function l(u){const f=[];for(const h in u){const _=u[h];delete _.metadata,f.push(_)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}vn.DEFAULT_UP=new ne(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ns extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vv={type:"move"};class El{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,l=null;const u=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){l=!0;for(const I of e.hand.values()){const E=t.getJointPose(I,i),v=this._getHandJoint(h,I);E!==null&&(v.matrix.fromArray(E.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=E.radius),v.visible=E!==null}const _=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],p=_.position.distanceTo(g.position),y=.02,T=.005;h.inputState.pinching&&p>y+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&p<=y-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));u!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(Vv)))}return u!==null&&(u.visible=r!==null),f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ns;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Os={h:0,s:0,l:0};function Ml(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class It{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Nt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Nt.workingColorSpace){if(e=Cv(e,1),t=Ft(t,0,1),i=Ft(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,l=2*i-o;this.r=Ml(l,o,e+1/3),this.g=Ml(l,o,e),this.b=Ml(l,o,e-1/3)}return Nt.colorSpaceToWorking(this,r),this}setStyle(e,t=ni){function i(o){o!==void 0&&parseFloat(o)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const l=r[1],u=r[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:ut("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(o,16),t);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ni){const i=gh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=Ea(e.r),this.g=Ea(e.g),this.b=Ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return Nt.workingToColorSpace(wn.copy(this),e),Math.round(Ft(wn.r*255,0,255))*65536+Math.round(Ft(wn.g*255,0,255))*256+Math.round(Ft(wn.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.workingToColorSpace(wn.copy(this),t);const i=wn.r,r=wn.g,o=wn.b,l=Math.max(i,r,o),u=Math.min(i,r,o);let f,h;const _=(u+l)/2;if(u===l)f=0,h=0;else{const g=l-u;switch(h=_<=.5?g/(l+u):g/(2-l-u),l){case i:f=(r-o)/g+(r<o?6:0);break;case r:f=(o-i)/g+2;break;case o:f=(i-r)/g+4;break}f/=6}return e.h=f,e.s=h,e.l=_,e}getRGB(e,t=Nt.workingColorSpace){return Nt.workingToColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=ni){Nt.workingToColorSpace(wn.copy(this),e);const t=wn.r,i=wn.g,r=wn.b;return e!==ni?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(Os);const i=_l(Qi.h,Os.h,t),r=_l(Qi.s,Os.s,t),o=_l(Qi.l,Os.l,t);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*r,this.g=o[1]*t+o[4]*i+o[7]*r,this.b=o[2]*t+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new It;It.NAMES=gh;class vu{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new It(e),this.near=t,this.far=i}clone(){return new vu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Wv extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new or,this.environmentIntensity=1,this.environmentRotation=new or,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ui=new ne,ki=new ne,bl=new ne,zi=new ne,aa=new ne,sa=new ne,Of=new ne,wl=new ne,Tl=new ne,Al=new ne,Rl=new on,Cl=new on,Pl=new on;class ri{constructor(e=new ne,t=new ne,i=new ne){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ui.subVectors(e,t),r.cross(ui);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){ui.subVectors(r,t),ki.subVectors(i,t),bl.subVectors(e,t);const l=ui.dot(ui),u=ui.dot(ki),f=ui.dot(bl),h=ki.dot(ki),_=ki.dot(bl),g=l*h-u*u;if(g===0)return o.set(0,0,0),null;const p=1/g,y=(h*f-u*_)*p,T=(l*_-u*f)*p;return o.set(1-y-T,T,y)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,i,r,o,l,u,f){return this.getBarycoord(e,t,i,r,zi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(o,zi.x),f.addScaledVector(l,zi.y),f.addScaledVector(u,zi.z),f)}static getInterpolatedAttribute(e,t,i,r,o,l){return Rl.setScalar(0),Cl.setScalar(0),Pl.setScalar(0),Rl.fromBufferAttribute(e,t),Cl.fromBufferAttribute(e,i),Pl.fromBufferAttribute(e,r),l.setScalar(0),l.addScaledVector(Rl,o.x),l.addScaledVector(Cl,o.y),l.addScaledVector(Pl,o.z),l}static isFrontFacing(e,t,i,r){return ui.subVectors(i,t),ki.subVectors(e,t),ui.cross(ki).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),ui.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,o){return ri.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,o=this.c;let l,u;aa.subVectors(r,i),sa.subVectors(o,i),wl.subVectors(e,i);const f=aa.dot(wl),h=sa.dot(wl);if(f<=0&&h<=0)return t.copy(i);Tl.subVectors(e,r);const _=aa.dot(Tl),g=sa.dot(Tl);if(_>=0&&g<=_)return t.copy(r);const p=f*g-_*h;if(p<=0&&f>=0&&_<=0)return l=f/(f-_),t.copy(i).addScaledVector(aa,l);Al.subVectors(e,o);const y=aa.dot(Al),T=sa.dot(Al);if(T>=0&&y<=T)return t.copy(o);const I=y*h-f*T;if(I<=0&&h>=0&&T<=0)return u=h/(h-T),t.copy(i).addScaledVector(sa,u);const E=_*T-y*g;if(E<=0&&g-_>=0&&y-T>=0)return Of.subVectors(o,r),u=(g-_)/(g-_+(y-T)),t.copy(r).addScaledVector(Of,u);const v=1/(E+I+p);return l=I*v,u=p*v,t.copy(i).addScaledVector(aa,l).addScaledVector(sa,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class fs{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let l=0,u=o.count;l<u;l++)e.isMesh===!0?e.getVertexPosition(l,fi):fi.fromBufferAttribute(o,l),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Bs.copy(i.boundingBox)),Bs.applyMatrix4(e.matrixWorld),this.union(Bs)}const r=e.children;for(let o=0,l=r.length;o<l;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ga),ks.subVectors(this.max,Ga),oa.subVectors(e.a,Ga),la.subVectors(e.b,Ga),ca.subVectors(e.c,Ga),er.subVectors(la,oa),tr.subVectors(ca,la),xr.subVectors(oa,ca);let t=[0,-er.z,er.y,0,-tr.z,tr.y,0,-xr.z,xr.y,er.z,0,-er.x,tr.z,0,-tr.x,xr.z,0,-xr.x,-er.y,er.x,0,-tr.y,tr.x,0,-xr.y,xr.x,0];return!Dl(t,oa,la,ca,ks)||(t=[1,0,0,0,1,0,0,0,1],!Dl(t,oa,la,ca,ks))?!1:(zs.crossVectors(er,tr),t=[zs.x,zs.y,zs.z],Dl(t,oa,la,ca,ks))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Gi=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],fi=new ne,Bs=new fs,oa=new ne,la=new ne,ca=new ne,er=new ne,tr=new ne,xr=new ne,Ga=new ne,ks=new ne,zs=new ne,Sr=new ne;function Dl(n,e,t,i,r){for(let o=0,l=n.length-3;o<=l;o+=3){Sr.fromArray(n,o);const u=r.x*Math.abs(Sr.x)+r.y*Math.abs(Sr.y)+r.z*Math.abs(Sr.z),f=e.dot(Sr),h=t.dot(Sr),_=i.dot(Sr);if(Math.max(-Math.max(f,h,_),Math.min(f,h,_))>u)return!1}return!0}const cn=new ne,Gs=new ht;let $v=0;class vi extends lr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$v++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=bv,this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Gs.fromBufferAttribute(this,t),Gs.applyMatrix3(e),this.setXY(t,Gs.x,Gs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ka(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ka(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ka(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ka(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ka(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),i=Nn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),i=Nn(i,this.array),r=Nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),i=Nn(i,this.array),r=Nn(r,this.array),o=Nn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class vh extends vi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class yh extends vi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yn extends vi{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Xv=new fs,Ha=new ne,Ll=new ne;class Uo{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Xv.setFromPoints(e).getCenter(i);let r=0;for(let o=0,l=e.length;o<l;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ha.subVectors(e,this.center);const t=Ha.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ha,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ll.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ha.copy(e.center).add(Ll)),this.expandByPoint(Ha.copy(e.center).sub(Ll))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let qv=0;const ei=new an,Il=new vn,ua=new ne,Vn=new fs,Va=new fs,_n=new ne;class Un extends lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qv++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wv(e)?yh:vh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new gt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,i){return ei.makeTranslation(e,t,i),this.applyMatrix4(ei),this}scale(e,t,i){return ei.makeScale(e,t,i),this.applyMatrix4(ei),this}lookAt(e){return Il.lookAt(e),Il.updateMatrix(),this.applyMatrix4(Il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ua).negate(),this.translate(ua.x,ua.y,ua.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,o=e.length;r<o;r++){const l=e[r];i.push(l.x,l.y,l.z||0)}this.setAttribute("position",new yn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const o=t[i];Vn.setFromBufferAttribute(o),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const i=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let o=0,l=t.length;o<l;o++){const u=t[o];Va.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(Vn.min,Va.min),Vn.expandByPoint(_n),_n.addVectors(Vn.max,Va.max),Vn.expandByPoint(_n)):(Vn.expandByPoint(Va.min),Vn.expandByPoint(Va.max))}Vn.getCenter(i);let r=0;for(let o=0,l=e.count;o<l;o++)_n.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(_n));if(t)for(let o=0,l=t.length;o<l;o++){const u=t[o],f=this.morphTargetsRelative;for(let h=0,_=u.count;h<_;h++)_n.fromBufferAttribute(u,h),f&&(ua.fromBufferAttribute(e,h),_n.add(ua)),r=Math.max(r,i.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,o=t.uv;let l=this.getAttribute("tangent");(l===void 0||l.count!==i.count)&&(l=new vi(new Float32Array(4*i.count),4),this.setAttribute("tangent",l));const u=[],f=[];for(let R=0;R<i.count;R++)u[R]=new ne,f[R]=new ne;const h=new ne,_=new ne,g=new ne,p=new ht,y=new ht,T=new ht,I=new ne,E=new ne;function v(R,B,F){h.fromBufferAttribute(i,R),_.fromBufferAttribute(i,B),g.fromBufferAttribute(i,F),p.fromBufferAttribute(o,R),y.fromBufferAttribute(o,B),T.fromBufferAttribute(o,F),_.sub(h),g.sub(h),y.sub(p),T.sub(p);const W=1/(y.x*T.y-T.x*y.y);isFinite(W)&&(I.copy(_).multiplyScalar(T.y).addScaledVector(g,-y.y).multiplyScalar(W),E.copy(g).multiplyScalar(y.x).addScaledVector(_,-T.x).multiplyScalar(W),u[R].add(I),u[B].add(I),u[F].add(I),f[R].add(E),f[B].add(E),f[F].add(E))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let R=0,B=U.length;R<B;++R){const F=U[R],W=F.start,Y=F.count;for(let ae=W,X=W+Y;ae<X;ae+=3)v(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}const O=new ne,L=new ne,N=new ne,M=new ne;function V(R){N.fromBufferAttribute(r,R),M.copy(N);const B=u[R];O.copy(B),O.sub(N.multiplyScalar(N.dot(B))).normalize(),L.crossVectors(M,B);const W=L.dot(f[R])<0?-1:1;l.setXYZW(R,O.x,O.y,O.z,W)}for(let R=0,B=U.length;R<B;++R){const F=U[R],W=F.start,Y=F.count;for(let ae=W,X=W+Y;ae<X;ae+=3)V(e.getX(ae+0)),V(e.getX(ae+1)),V(e.getX(ae+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new vi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,y=i.count;p<y;p++)i.setXYZ(p,0,0,0);const r=new ne,o=new ne,l=new ne,u=new ne,f=new ne,h=new ne,_=new ne,g=new ne;if(e)for(let p=0,y=e.count;p<y;p+=3){const T=e.getX(p+0),I=e.getX(p+1),E=e.getX(p+2);r.fromBufferAttribute(t,T),o.fromBufferAttribute(t,I),l.fromBufferAttribute(t,E),_.subVectors(l,o),g.subVectors(r,o),_.cross(g),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,I),h.fromBufferAttribute(i,E),u.add(_),f.add(_),h.add(_),i.setXYZ(T,u.x,u.y,u.z),i.setXYZ(I,f.x,f.y,f.z),i.setXYZ(E,h.x,h.y,h.z)}else for(let p=0,y=t.count;p<y;p+=3)r.fromBufferAttribute(t,p+0),o.fromBufferAttribute(t,p+1),l.fromBufferAttribute(t,p+2),_.subVectors(l,o),g.subVectors(r,o),_.cross(g),i.setXYZ(p+0,_.x,_.y,_.z),i.setXYZ(p+1,_.x,_.y,_.z),i.setXYZ(p+2,_.x,_.y,_.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(u,f){const h=u.array,_=u.itemSize,g=u.normalized,p=new h.constructor(f.length*_);let y=0,T=0;for(let I=0,E=f.length;I<E;I++){u.isInterleavedBufferAttribute?y=f[I]*u.data.stride+u.offset:y=f[I]*_;for(let v=0;v<_;v++)p[T++]=h[y++]}return new vi(p,_,g)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Un,i=this.index.array,r=this.attributes;for(const u in r){const f=r[u],h=e(f,i);t.setAttribute(u,h)}const o=this.morphAttributes;for(const u in o){const f=[],h=o[u];for(let _=0,g=h.length;_<g;_++){const p=h[_],y=e(p,i);f.push(y)}t.morphAttributes[u]=f}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,f=l.length;u<f;u++){const h=l[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const h=i[f];e.data.attributes[f]=h.toJSON(e.data)}const r={};let o=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],_=[];for(let g=0,p=h.length;g<p;g++){const y=h[g];_.push(y.toJSON(e.data))}_.length>0&&(r[f]=_,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const h in r){const _=r[h];this.setAttribute(h,_.clone(t))}const o=e.morphAttributes;for(const h in o){const _=[],g=o[h];for(let p=0,y=g.length;p<y;p++)_.push(g[p].clone(t));this.morphAttributes[h]=_}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let h=0,_=l.length;h<_;h++){const g=l[h];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ul=new ne,Yv=new ne,jv=new gt;class Ti{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ul.subVectors(i,t).cross(Yv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(Ul),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return i===!0&&(l<0||l>1)?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||jv.getNormalMatrix(e),r=this.coplanarPoint(Ul).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Kv=0;class wa extends lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=us(),this.name="",this.type="Material",this.blending=ns,this.side=Lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zd,this.blendDst=Jd,this.blendEquation=ma,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ml,this.stencilZFail=ml,this.stencilZPass=ml,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ut(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ut(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const l=[];for(const u in o){const f=o[u];delete f.metadata,l.push(f)}return l}if(t){const o=r(e.textures),l=r(e.images);o.length>0&&(i.textures=o),l.length>0&&(i.images=l)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new It().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Ti().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ht().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ht().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Hi=new ne,Fl=new ne,Hs=new ne,Vs=new ne;class Fo{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Fl.copy(e).add(t).multiplyScalar(.5),Hs.copy(t).sub(e).normalize(),Vs.copy(this.origin).sub(Fl);const o=e.distanceTo(t)*.5,l=-this.direction.dot(Hs),u=Vs.dot(this.direction),f=-Vs.dot(Hs),h=Vs.lengthSq(),_=Math.abs(1-l*l);let g,p,y,T;if(_>0)if(g=l*f-u,p=l*u-f,T=o*_,g>=0)if(p>=-T)if(p<=T){const I=1/_;g*=I,p*=I,y=g*(g+l*p+2*u)+p*(l*g+p+2*f)+h}else p=o,g=Math.max(0,-(l*p+u)),y=-g*g+p*(p+2*f)+h;else p=-o,g=Math.max(0,-(l*p+u)),y=-g*g+p*(p+2*f)+h;else p<=-T?(g=Math.max(0,-(-l*o+u)),p=g>0?-o:Math.min(Math.max(-o,-f),o),y=-g*g+p*(p+2*f)+h):p<=T?(g=0,p=Math.min(Math.max(-o,-f),o),y=p*(p+2*f)+h):(g=Math.max(0,-(l*o+u)),p=g>0?o:Math.min(Math.max(-o,-f),o),y=-g*g+p*(p+2*f)+h);else p=l>0?-o:o,g=Math.max(0,-(l*p+u)),y=-g*g+p*(p+2*f)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(Fl).addScaledVector(Hs,p),y}intersectSphere(e,t){if(e.radius<0)return null;Hi.subVectors(e.center,this.origin);const i=Hi.dot(this.direction),r=Hi.dot(Hi)-i*i,o=e.radius*e.radius;if(r>o)return null;const l=Math.sqrt(o-r),u=i-l,f=i+l;return f<0?null:u<0?this.at(f,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,l,u,f;const h=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,p=this.origin;return h>=0?(i=(e.min.x-p.x)*h,r=(e.max.x-p.x)*h):(i=(e.max.x-p.x)*h,r=(e.min.x-p.x)*h),_>=0?(o=(e.min.y-p.y)*_,l=(e.max.y-p.y)*_):(o=(e.max.y-p.y)*_,l=(e.min.y-p.y)*_),i>l||o>r||((o>i||isNaN(i))&&(i=o),(l<r||isNaN(r))&&(r=l),g>=0?(u=(e.min.z-p.z)*g,f=(e.max.z-p.z)*g):(u=(e.max.z-p.z)*g,f=(e.min.z-p.z)*g),i>f||u>r)||((u>i||i!==i)&&(i=u),(f<r||r!==r)&&(r=f),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,i,r,o){const l=this.origin,u=this.direction,f=u.x,h=u.y,_=u.z,g=e.x-l.x,p=e.y-l.y,y=e.z-l.z,T=t.x-l.x,I=t.y-l.y,E=t.z-l.z,v=i.x-l.x,U=i.y-l.y,O=i.z-l.z,L=Math.abs(f),N=Math.abs(h),M=Math.abs(_);let V,R,B,F,W,Y,ae,X,q,de,_e,Ee;if(L>=N&&L>=M?(B=f,Y=g,q=T,Ee=v,f>=0?(V=h,R=_,F=p,W=y,ae=I,X=E,de=U,_e=O):(V=_,R=h,F=y,W=p,ae=E,X=I,de=O,_e=U)):N>=M?(B=h,Y=p,q=I,Ee=U,h>=0?(V=_,R=f,F=y,W=g,ae=E,X=T,de=O,_e=v):(V=f,R=_,F=g,W=y,ae=T,X=E,de=v,_e=O)):(B=_,Y=y,q=E,Ee=O,_>=0?(V=f,R=h,F=g,W=p,ae=T,X=I,de=v,_e=U):(V=h,R=f,F=p,W=g,ae=I,X=T,de=U,_e=v)),B===0)return null;const pe=V/B,me=R/B,Se=1/B,je=F-pe*Y,He=W-me*Y,ot=ae-pe*q,rt=X-me*q,tt=de-pe*Ee,ue=_e-me*Ee,te=tt*rt-ue*ot,ge=je*ue-He*tt,he=ot*He-rt*je;if(r){if(te<0||ge<0||he<0)return null}else if((te<0||ge<0||he<0)&&(te>0||ge>0||he>0))return null;const Ae=te+ge+he;if(Ae===0)return null;const Ge=Se*(te*Y+ge*q+he*Ee);return(Ae>0?Ge<0:Ge>0)?null:this.at(Ge/Ae,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xh extends wa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new or,this.combine=Qd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bf=new an,Er=new Fo,Ws=new Uo,kf=new ne,$s=new ne,Xs=new ne,qs=new ne,Nl=new ne,Ys=new ne,zf=new ne,js=new ne;class Ui extends vn{constructor(e=new Un,t=new xh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const u=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,l=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const u=this.morphTargetInfluences;if(o&&u){Ys.set(0,0,0);for(let f=0,h=o.length;f<h;f++){const _=u[f],g=o[f];_!==0&&(Nl.fromBufferAttribute(g,e),l?Ys.addScaledVector(Nl,_):Ys.addScaledVector(Nl.sub(t),_))}t.add(Ys)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere),Ws.applyMatrix4(o),Er.copy(e.ray).recast(e.near),!(Ws.containsPoint(Er.origin)===!1&&(Er.intersectSphere(Ws,kf)===null||Er.origin.distanceToSquared(kf)>(e.far-e.near)**2))&&(Bf.copy(o).invert(),Er.copy(e.ray).applyMatrix4(Bf),!(i.boundingBox!==null&&Er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Er)))}_computeIntersections(e,t,i){let r;const o=this.geometry,l=this.material,u=o.index,f=o.attributes.position,h=o.attributes.uv,_=o.attributes.uv1,g=o.attributes.normal,p=o.groups,y=o.drawRange;if(u!==null)if(Array.isArray(l))for(let T=0,I=p.length;T<I;T++){const E=p[T],v=l[E.materialIndex],U=Math.max(E.start,y.start),O=Math.min(u.count,Math.min(E.start+E.count,y.start+y.count));for(let L=U,N=O;L<N;L+=3){const M=u.getX(L),V=u.getX(L+1),R=u.getX(L+2);r=Ks(this,v,e,i,h,_,g,M,V,R),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=E.materialIndex,t.push(r))}}else{const T=Math.max(0,y.start),I=Math.min(u.count,y.start+y.count);for(let E=T,v=I;E<v;E+=3){const U=u.getX(E),O=u.getX(E+1),L=u.getX(E+2);r=Ks(this,l,e,i,h,_,g,U,O,L),r&&(r.faceIndex=Math.floor(E/3),t.push(r))}}else if(f!==void 0)if(Array.isArray(l))for(let T=0,I=p.length;T<I;T++){const E=p[T],v=l[E.materialIndex],U=Math.max(E.start,y.start),O=Math.min(f.count,Math.min(E.start+E.count,y.start+y.count));for(let L=U,N=O;L<N;L+=3){const M=L,V=L+1,R=L+2;r=Ks(this,v,e,i,h,_,g,M,V,R),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=E.materialIndex,t.push(r))}}else{const T=Math.max(0,y.start),I=Math.min(f.count,y.start+y.count);for(let E=T,v=I;E<v;E+=3){const U=E,O=E+1,L=E+2;r=Ks(this,l,e,i,h,_,g,U,O,L),r&&(r.faceIndex=Math.floor(E/3),t.push(r))}}}}function Zv(n,e,t,i,r,o,l,u){let f;if(e.side===Bn?f=i.intersectTriangle(l,o,r,!0,u):f=i.intersectTriangle(r,o,l,e.side===Lr,u),f===null)return null;js.copy(u),js.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(js);return h<t.near||h>t.far?null:{distance:h,point:js.clone(),object:n}}function Ks(n,e,t,i,r,o,l,u,f,h){n.getVertexPosition(u,$s),n.getVertexPosition(f,Xs),n.getVertexPosition(h,qs);const _=Zv(n,e,t,i,$s,Xs,qs,zf);if(_){const g=new ne;ri.getBarycoord(zf,$s,Xs,qs,g),r&&(_.uv=ri.getInterpolatedAttribute(r,u,f,h,g,new ht)),o&&(_.uv1=ri.getInterpolatedAttribute(o,u,f,h,g,new ht)),l&&(_.normal=ri.getInterpolatedAttribute(l,u,f,h,g,new ne),_.normal.dot(i.direction)>0&&_.normal.multiplyScalar(-1));const p={a:u,b:f,c:h,normal:new ne,materialIndex:0};ri.getNormal($s,Xs,qs,p.normal),_.face=p,_.barycoord=g}return _}class Jv extends In{constructor(e=null,t=1,i=1,r,o,l,u,f,h=xn,_=xn,g,p){super(null,l,u,f,h,_,r,o,g,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mr=new Uo,Qv=new ht(.5,.5),Zs=new ne;class yu{constructor(e=new Ti,t=new Ti,i=new Ti,r=new Ti,o=new Ti,l=new Ti){this.planes=[e,t,i,r,o,l]}set(e,t,i,r,o,l){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(r),u[4].copy(o),u[5].copy(l),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ci,i=!1){const r=this.planes,o=e.elements,l=o[0],u=o[1],f=o[2],h=o[3],_=o[4],g=o[5],p=o[6],y=o[7],T=o[8],I=o[9],E=o[10],v=o[11],U=o[12],O=o[13],L=o[14],N=o[15];if(r[0].setComponents(h-l,y-_,v-T,N-U).normalize(),r[1].setComponents(h+l,y+_,v+T,N+U).normalize(),r[2].setComponents(h+u,y+g,v+I,N+O).normalize(),r[3].setComponents(h-u,y-g,v-I,N-O).normalize(),i)r[4].setComponents(f,p,E,L).normalize(),r[5].setComponents(h-f,y-p,v-E,N-L).normalize();else if(r[4].setComponents(h-f,y-p,v-E,N-L).normalize(),t===Ci)r[5].setComponents(h+f,y+p,v+E,N+L).normalize();else if(t===os)r[5].setComponents(f,p,E,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){Mr.center.set(0,0,0);const t=Qv.distanceTo(e.center);return Mr.radius=.7071067811865476+t,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Zs.x=r.normal.x>0?e.max.x:e.min.x,Zs.y=r.normal.y>0?e.max.y:e.min.y,Zs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Zs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xu extends wa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ao=new ne,Ro=new ne,Gf=new an,Wa=new Fo,Js=new Uo,Ol=new ne,Hf=new ne;class Sh extends vn{constructor(e=new Un,t=new xu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,o=t.count;r<o;r++)Ao.fromBufferAttribute(t,r-1),Ro.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ao.distanceTo(Ro);e.setAttribute("lineDistance",new yn(i,1))}else ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Js.copy(i.boundingSphere),Js.applyMatrix4(r),Js.radius+=o,e.ray.intersectsSphere(Js)===!1)return;Gf.copy(r).invert(),Wa.copy(e.ray).applyMatrix4(Gf);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const y=Math.max(0,l.start),T=Math.min(_.count,l.start+l.count);for(let I=y,E=T-1;I<E;I+=h){const v=_.getX(I),U=_.getX(I+1),O=Qs(this,e,Wa,f,v,U,I);O&&t.push(O)}if(this.isLineLoop){const I=_.getX(T-1),E=_.getX(y),v=Qs(this,e,Wa,f,I,E,T-1);v&&t.push(v)}}else{const y=Math.max(0,l.start),T=Math.min(p.count,l.start+l.count);for(let I=y,E=T-1;I<E;I+=h){const v=Qs(this,e,Wa,f,I,I+1,I);v&&t.push(v)}if(this.isLineLoop){const I=Qs(this,e,Wa,f,T-1,y,T-1);I&&t.push(I)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const u=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function Qs(n,e,t,i,r,o,l){const u=n.geometry.attributes.position;if(Ao.fromBufferAttribute(u,r),Ro.fromBufferAttribute(u,o),t.distanceSqToSegment(Ao,Ro,Ol,Hf)>i)return;Ol.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(Ol);if(!(h<e.near||h>e.far))return{distance:h,point:Hf.clone().applyMatrix4(n.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:n}}const Vf=new ne,Wf=new ne;class ey extends Sh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,o=t.count;r<o;r+=2)Vf.fromBufferAttribute(t,r),Wf.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Vf.distanceTo(Wf);e.setAttribute("lineDistance",new yn(i,1))}else ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Eh extends In{constructor(e=[],t=Ir,i,r,o,l,u,f,h,_){super(e,t,i,r,o,l,u,f,h,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ls extends In{constructor(e,t,i=Li,r,o,l,u=xn,f=xn,h,_=qi,g=1){if(_!==qi&&_!==Dr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:g};super(p,r,o,l,u,f,_,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _u(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class ty extends ls{constructor(e,t=Li,i=Ir,r,o,l=xn,u=xn,f,h=qi){const _={width:e,height:e,depth:1},g=[_,_,_,_,_,_];super(e,e,t,i,r,o,l,u,f,h),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Mh extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ta extends Un{constructor(e=1,t=1,i=1,r=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:l};const u=this;r=Math.floor(r),o=Math.floor(o),l=Math.floor(l);const f=[],h=[],_=[],g=[];let p=0,y=0;T("z","y","x",-1,-1,i,t,e,l,o,0),T("z","y","x",1,-1,i,t,-e,l,o,1),T("x","z","y",1,1,e,i,t,r,l,2),T("x","z","y",1,-1,e,i,-t,r,l,3),T("x","y","z",1,-1,e,t,i,r,o,4),T("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(f),this.setAttribute("position",new yn(h,3)),this.setAttribute("normal",new yn(_,3)),this.setAttribute("uv",new yn(g,2));function T(I,E,v,U,O,L,N,M,V,R,B){const F=L/V,W=N/R,Y=L/2,ae=N/2,X=M/2,q=V+1,de=R+1;let _e=0,Ee=0;const pe=new ne;for(let me=0;me<de;me++){const Se=me*W-ae;for(let je=0;je<q;je++){const He=je*F-Y;pe[I]=He*U,pe[E]=Se*O,pe[v]=X,h.push(pe.x,pe.y,pe.z),pe[I]=0,pe[E]=0,pe[v]=M>0?1:-1,_.push(pe.x,pe.y,pe.z),g.push(je/V),g.push(1-me/R),_e+=1}}for(let me=0;me<R;me++)for(let Se=0;Se<V;Se++){const je=p+Se+q*me,He=p+Se+q*(me+1),ot=p+(Se+1)+q*(me+1),rt=p+(Se+1)+q*me;f.push(je,He,rt),f.push(He,ot,rt),Ee+=6}u.addGroup(y,Ee,B),y+=Ee,p+=_e}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Su extends Un{constructor(e=1,t=1,i=1,r=32,o=1,l=!1,u=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:f};const h=this;r=Math.floor(r),o=Math.floor(o);const _=[],g=[],p=[],y=[];let T=0;const I=[],E=i/2;let v=0;U(),l===!1&&(e>0&&O(!0),t>0&&O(!1)),this.setIndex(_),this.setAttribute("position",new yn(g,3)),this.setAttribute("normal",new yn(p,3)),this.setAttribute("uv",new yn(y,2));function U(){const L=new ne,N=new ne;let M=0;const V=(t-e)/i;for(let R=0;R<=o;R++){const B=[],F=R/o,W=F*(t-e)+e;for(let Y=0;Y<=r;Y++){const ae=Y/r,X=ae*f+u,q=Math.sin(X),de=Math.cos(X);N.x=W*q,N.y=-F*i+E,N.z=W*de,g.push(N.x,N.y,N.z),L.set(q,V,de).normalize(),p.push(L.x,L.y,L.z),y.push(ae,1-F),B.push(T++)}I.push(B)}for(let R=0;R<r;R++)for(let B=0;B<o;B++){const F=I[B][R],W=I[B+1][R],Y=I[B+1][R+1],ae=I[B][R+1];(e>0||B!==0)&&(_.push(F,W,ae),M+=3),(t>0||B!==o-1)&&(_.push(W,Y,ae),M+=3)}h.addGroup(v,M,0),v+=M}function O(L){const N=T,M=new ht,V=new ne;let R=0;const B=L===!0?e:t,F=L===!0?1:-1;for(let Y=1;Y<=r;Y++)g.push(0,E*F,0),p.push(0,F,0),y.push(.5,.5),T++;const W=T;for(let Y=0;Y<=r;Y++){const X=Y/r*f+u,q=Math.cos(X),de=Math.sin(X);V.x=B*de,V.y=E*F,V.z=B*q,g.push(V.x,V.y,V.z),p.push(0,F,0),M.x=q*.5+.5,M.y=de*.5*F+.5,y.push(M.x,M.y),T++}for(let Y=0;Y<r;Y++){const ae=N+Y,X=W+Y;L===!0?_.push(X,X+1,ae):_.push(X+1,X,ae),R+=3}h.addGroup(v,R,L===!0?1:2),v+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Su(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const eo=new ne,to=new ne,Bl=new ne,no=new ri;class ny extends Un{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),o=Math.cos(is*t),l=e.getIndex(),u=e.getAttribute("position"),f=l?l.count:u.count,h=[0,0,0],_=["a","b","c"],g=new Array(3),p={},y=[];for(let T=0;T<f;T+=3){l?(h[0]=l.getX(T),h[1]=l.getX(T+1),h[2]=l.getX(T+2)):(h[0]=T,h[1]=T+1,h[2]=T+2);const{a:I,b:E,c:v}=no;if(I.fromBufferAttribute(u,h[0]),E.fromBufferAttribute(u,h[1]),v.fromBufferAttribute(u,h[2]),no.getNormal(Bl),g[0]=`${Math.round(I.x*r)},${Math.round(I.y*r)},${Math.round(I.z*r)}`,g[1]=`${Math.round(E.x*r)},${Math.round(E.y*r)},${Math.round(E.z*r)}`,g[2]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let U=0;U<3;U++){const O=(U+1)%3,L=g[U],N=g[O],M=no[_[U]],V=no[_[O]],R=`${L}_${N}`,B=`${N}_${L}`;B in p&&p[B]?(Bl.dot(p[B].normal)<=o&&(y.push(M.x,M.y,M.z),y.push(V.x,V.y,V.z)),p[B]=null):R in p||(p[R]={index0:h[U],index1:h[O],normal:Bl.clone()})}}for(const T in p)if(p[T]){const{index0:I,index1:E}=p[T];eo.fromBufferAttribute(u,I),to.fromBufferAttribute(u,E),y.push(eo.x,eo.y,eo.z),y.push(to.x,to.y,to.z)}this.setAttribute("position",new yn(y,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ds extends Un{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const o=e/2,l=t/2,u=Math.floor(i),f=Math.floor(r),h=u+1,_=f+1,g=e/u,p=t/f,y=[],T=[],I=[],E=[];for(let v=0;v<_;v++){const U=v*p-l;for(let O=0;O<h;O++){const L=O*g-o;T.push(L,-U,0),I.push(0,0,1),E.push(O/u),E.push(1-v/f)}}for(let v=0;v<f;v++)for(let U=0;U<u;U++){const O=U+h*v,L=U+h*(v+1),N=U+1+h*(v+1),M=U+1+h*v;y.push(O,L,M),y.push(L,N,M)}this.setIndex(y),this.setAttribute("position",new yn(T,3)),this.setAttribute("normal",new yn(I,3)),this.setAttribute("uv",new yn(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.width,e.height,e.widthSegments,e.heightSegments)}}class Eu extends Un{constructor(e=1,t=32,i=16,r=0,o=Math.PI*2,l=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:o,thetaStart:l,thetaLength:u},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const f=Math.min(l+u,Math.PI);let h=0;const _=[],g=new ne,p=new ne,y=[],T=[],I=[],E=[];for(let v=0;v<=i;v++){const U=[],O=v/i,L=l+O*u,N=e*Math.cos(L),M=Math.sqrt(e*e-N*N);let V=0;v===0&&l===0?V=.5/t:v===i&&f===Math.PI&&(V=-.5/t);for(let R=0;R<=t;R++){const B=R/t,F=r+B*o;g.x=-M*Math.cos(F),g.y=N,g.z=M*Math.sin(F),T.push(g.x,g.y,g.z),p.copy(g).normalize(),I.push(p.x,p.y,p.z),E.push(B+V,1-O),U.push(h++)}_.push(U)}for(let v=0;v<i;v++)for(let U=0;U<t;U++){const O=_[v][U+1],L=_[v][U],N=_[v+1][U],M=_[v+1][U+1];(v!==0||l>0)&&y.push(O,L,M),(v!==i-1||f<Math.PI)&&y.push(L,N,M)}this.setIndex(y),this.setAttribute("position",new yn(T,3)),this.setAttribute("normal",new yn(I,3)),this.setAttribute("uv",new yn(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ba(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if($f(r))r.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if($f(r[0])){const o=[];for(let l=0,u=r.length;l<u;l++)o[l]=r[l].clone();e[t][i]=o}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Ln(n){const e={};for(let t=0;t<n.length;t++){const i=ba(n[t]);for(const r in i)e[r]=i[r]}return e}function $f(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function iy(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function bh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Nt.workingColorSpace}const ry={clone:ba,merge:Ln};var ay=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends wa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ay,this.fragmentShader=sy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ba(e.uniforms),this.uniformsGroups=iy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new It().setHex(r.value);break;case"v2":this.uniforms[i].value=new ht().fromArray(r.value);break;case"v3":this.uniforms[i].value=new ne().fromArray(r.value);break;case"v4":this.uniforms[i].value=new on().fromArray(r.value);break;case"m3":this.uniforms[i].value=new gt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new an().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class oy extends Fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ly extends wa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kc,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new or,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cy extends wa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uy extends wa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class wh extends vn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new It(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class fy extends wh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const kl=new an,Xf=new ne,qf=new ne;class dy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new an,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yu,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Xf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xf),qf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){kl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(kl,e.coordinateSystem,e.reversedDepth);const o=this._frameExtents,l=r?r.z/o.x:1,u=r?r.w/o.y:1,f=r?r.x/o.x:0,h=r?r.y/o.y:0;e.coordinateSystem===os||e.reversedDepth?t.set(.5*l,0,0,.5*l+f,0,.5*u,0,.5*u+h,0,0,1,0,0,0,0,1):t.set(.5*l,0,0,.5*l+f,0,.5*u,0,.5*u+h,0,0,.5,.5,0,0,0,1),t.multiply(kl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const io=new ne,ro=new sr,bi=new ne;class Th extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(io,ro,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(io,ro,bi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(io,ro,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(io,ro,bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const nr=new ne,Yf=new ht,jf=new ht;class ii extends Th{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(is*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zc*2*Math.atan(Math.tan(is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(nr.x,nr.y).multiplyScalar(-e/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(nr.x,nr.y).multiplyScalar(-e/nr.z)}getViewSize(e,t){return this.getViewBounds(e,Yf,jf),t.subVectors(jf,Yf)}setViewOffset(e,t,i,r,o,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(is*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const f=l.fullWidth,h=l.fullHeight;o+=l.offsetX*r/f,t-=l.offsetY*i/h,r*=l.width/f,i*=l.height/h}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Mu extends Th{constructor(e=-1,t=1,i=1,r=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,l=i+e,u=r+t,f=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,l=o+h*this.view.width,u-=_*this.view.offsetY,f=u-_*this.view.height}this.projectionMatrix.makeOrthographic(o,l,u,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class hy extends dy{constructor(){super(new Mu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class py extends wh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new hy}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const fa=-90,da=1;class my extends vn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ii(fa,da,e,t);r.layers=this.layers,this.add(r);const o=new ii(fa,da,e,t);o.layers=this.layers,this.add(o);const l=new ii(fa,da,e,t);l.layers=this.layers,this.add(l);const u=new ii(fa,da,e,t);u.layers=this.layers,this.add(u);const f=new ii(fa,da,e,t);f.layers=this.layers,this.add(f);const h=new ii(fa,da,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,o,l,u,f]=t;for(const h of t)this.remove(h);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===os)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,l,u,f,h,_]=this.children,g=e.getRenderTarget(),p=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const I=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let E=!1;e.isWebGLRenderer===!0?E=e.state.buffers.depth.getReversed():E=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),E&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,1,r),E&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,2,r),E&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(i,3,r),E&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(i,4,r),E&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),i.texture.generateMipmaps=I,e.setRenderTarget(i,5,r),E&&e.autoClear===!1&&e.clearDepth(),e.render(t,_),e.setRenderTarget(g,p,y),e.xr.enabled=T,i.texture.needsPMREMUpdate=!0}}class _y extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Kf=new an;class gy{constructor(e,t,i=0,r=1/0){this.ray=new Fo(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new gu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Gt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Kf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kf),this}intersectObject(e,t=!0,i=[]){return Jc(e,this,i,t),i.sort(Zf),i}intersectObjects(e,t=!0,i=[]){for(let r=0,o=e.length;r<o;r++)Jc(e[r],this,i,t);return i.sort(Zf),i}}function Zf(n,e){return n.distance-e.distance}function Jc(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const o=n.children;for(let l=0,u=o.length;l<u;l++)Jc(o[l],e,t,!0)}}class Jf{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ft(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const qu=class qu{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const o=this.elements;return o[0]=e,o[2]=t,o[1]=i,o[3]=r,this}};qu.prototype.isMatrix2=!0;let Qf=qu;class vy extends lr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function ed(n,e,t,i){const r=yy(i);switch(t){case dh:return n*e;case ph:return n*e/r.components*r.byteLength;case fu:return n*e/r.components*r.byteLength;case Ur:return n*e*2/r.components*r.byteLength;case du:return n*e*2/r.components*r.byteLength;case hh:return n*e*3/r.components*r.byteLength;case _i:return n*e*4/r.components*r.byteLength;case hu:return n*e*4/r.components*r.byteLength;case mo:case _o:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case go:case vo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sc:case Mc:return Math.max(n,16)*Math.max(e,8)/4;case xc:case Ec:return Math.max(n,8)*Math.max(e,8)/2;case bc:case wc:case Ac:case Rc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Tc:case Eo:case Cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Fc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Bc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case kc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case zc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Gc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Hc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Vc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Wc:case $c:case Xc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case qc:case Yc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Mo:case jc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yy(n){switch(n){case Xn:case lh:return{byteLength:1,components:1};case as:case ch:case Ii:return{byteLength:2,components:1};case cu:case uu:return{byteLength:2,components:4};case Li:case lu:case Ri:return{byteLength:4,components:1};case uh:case fh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ou}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ou);function Ah(){let n=null,e=!1,t=null,i=null;function r(o,l){i=n.requestAnimationFrame(r),t(o,l)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function xy(n){const e=new WeakMap;function t(u,f){const h=u.array,_=u.usage,g=h.byteLength,p=n.createBuffer();n.bindBuffer(f,p),n.bufferData(f,h,_),u.onUploadCallback();let y;if(h instanceof Float32Array)y=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=n.HALF_FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?y=n.HALF_FLOAT:y=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=n.SHORT;else if(h instanceof Uint32Array)y=n.UNSIGNED_INT;else if(h instanceof Int32Array)y=n.INT;else if(h instanceof Int8Array)y=n.BYTE;else if(h instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:g}}function i(u,f,h){const _=f.array,g=f.updateRanges;if(n.bindBuffer(h,u),g.length===0)n.bufferSubData(h,0,_);else{g.sort((y,T)=>y.start-T.start);let p=0;for(let y=1;y<g.length;y++){const T=g[p],I=g[y];I.start<=T.start+T.count+1?T.count=Math.max(T.count,I.start+I.count-T.start):(++p,g[p]=I)}g.length=p+1;for(let y=0,T=g.length;y<T;y++){const I=g[y];n.bufferSubData(h,I.start*_.BYTES_PER_ELEMENT,_,I.start,I.count)}f.clearUpdateRanges()}f.onUploadCallback()}function r(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);f&&(n.deleteBuffer(f.buffer),e.delete(u))}function l(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const _=e.get(u);(!_||_.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,f));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,u,f),h.version=u.version}}return{get:r,remove:o,update:l}}var Sy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ey=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,My=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,by=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ty=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ay=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ry=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Py=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ly=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Iy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Uy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ny=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,By=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ky=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Gy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Hy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Wy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$y=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,qy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ky=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ex=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,tx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ix=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ax=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ox=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ux=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,hx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,px=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_x=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ex=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,bx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ax=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Px=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ix=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ux=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ox=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$x=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Zx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,rS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,aS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_S=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ES=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,RS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,CS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,PS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,DS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,US=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,NS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,HS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,VS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$S=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,XS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,KS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wt={alphahash_fragment:Sy,alphahash_pars_fragment:Ey,alphamap_fragment:My,alphamap_pars_fragment:by,alphatest_fragment:wy,alphatest_pars_fragment:Ty,aomap_fragment:Ay,aomap_pars_fragment:Ry,batching_pars_vertex:Cy,batching_vertex:Py,begin_vertex:Dy,beginnormal_vertex:Ly,bsdfs:Iy,iridescence_fragment:Uy,bumpmap_pars_fragment:Fy,clipping_planes_fragment:Ny,clipping_planes_pars_fragment:Oy,clipping_planes_pars_vertex:By,clipping_planes_vertex:ky,color_fragment:zy,color_pars_fragment:Gy,color_pars_vertex:Hy,color_vertex:Vy,common:Wy,cube_uv_reflection_fragment:$y,defaultnormal_vertex:Xy,displacementmap_pars_vertex:qy,displacementmap_vertex:Yy,emissivemap_fragment:jy,emissivemap_pars_fragment:Ky,colorspace_fragment:Zy,colorspace_pars_fragment:Jy,envmap_fragment:Qy,envmap_common_pars_fragment:ex,envmap_pars_fragment:tx,envmap_pars_vertex:nx,envmap_physical_pars_fragment:hx,envmap_vertex:ix,fog_vertex:rx,fog_pars_vertex:ax,fog_fragment:sx,fog_pars_fragment:ox,gradientmap_pars_fragment:lx,lightmap_pars_fragment:cx,lights_lambert_fragment:ux,lights_lambert_pars_fragment:fx,lights_pars_begin:dx,lights_toon_fragment:px,lights_toon_pars_fragment:mx,lights_phong_fragment:_x,lights_phong_pars_fragment:gx,lights_physical_fragment:vx,lights_physical_pars_fragment:yx,lights_fragment_begin:xx,lights_fragment_maps:Sx,lights_fragment_end:Ex,lightprobes_pars_fragment:Mx,logdepthbuf_fragment:bx,logdepthbuf_pars_fragment:wx,logdepthbuf_pars_vertex:Tx,logdepthbuf_vertex:Ax,map_fragment:Rx,map_pars_fragment:Cx,map_particle_fragment:Px,map_particle_pars_fragment:Dx,metalnessmap_fragment:Lx,metalnessmap_pars_fragment:Ix,morphinstance_vertex:Ux,morphcolor_vertex:Fx,morphnormal_vertex:Nx,morphtarget_pars_vertex:Ox,morphtarget_vertex:Bx,normal_fragment_begin:kx,normal_fragment_maps:zx,normal_pars_fragment:Gx,normal_pars_vertex:Hx,normal_vertex:Vx,normalmap_pars_fragment:Wx,clearcoat_normal_fragment_begin:$x,clearcoat_normal_fragment_maps:Xx,clearcoat_pars_fragment:qx,iridescence_pars_fragment:Yx,opaque_fragment:jx,packing:Kx,premultiplied_alpha_fragment:Zx,project_vertex:Jx,dithering_fragment:Qx,dithering_pars_fragment:eS,roughnessmap_fragment:tS,roughnessmap_pars_fragment:nS,shadowmap_pars_fragment:iS,shadowmap_pars_vertex:rS,shadowmap_vertex:aS,shadowmask_pars_fragment:sS,skinbase_vertex:oS,skinning_pars_vertex:lS,skinning_vertex:cS,skinnormal_vertex:uS,specularmap_fragment:fS,specularmap_pars_fragment:dS,tonemapping_fragment:hS,tonemapping_pars_fragment:pS,transmission_fragment:mS,transmission_pars_fragment:_S,uv_pars_fragment:gS,uv_pars_vertex:vS,uv_vertex:yS,worldpos_vertex:xS,background_vert:SS,background_frag:ES,backgroundCube_vert:MS,backgroundCube_frag:bS,cube_vert:wS,cube_frag:TS,depth_vert:AS,depth_frag:RS,distance_vert:CS,distance_frag:PS,equirect_vert:DS,equirect_frag:LS,linedashed_vert:IS,linedashed_frag:US,meshbasic_vert:FS,meshbasic_frag:NS,meshlambert_vert:OS,meshlambert_frag:BS,meshmatcap_vert:kS,meshmatcap_frag:zS,meshnormal_vert:GS,meshnormal_frag:HS,meshphong_vert:VS,meshphong_frag:WS,meshphysical_vert:$S,meshphysical_frag:XS,meshtoon_vert:qS,meshtoon_frag:YS,points_vert:jS,points_frag:KS,shadow_vert:ZS,shadow_frag:JS,sprite_vert:QS,sprite_frag:eE},Ve={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ne},probesMax:{value:new ne},probesResolution:{value:new ne}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Ai={basic:{uniforms:Ln([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:Ln([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new It(0)},envMapIntensity:{value:1}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:Ln([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:Ln([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:Ln([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new It(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:Ln([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:Ln([Ve.points,Ve.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:Ln([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:Ln([Ve.common,Ve.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:Ln([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:Ln([Ve.sprite,Ve.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distance:{uniforms:Ln([Ve.common,Ve.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distance_vert,fragmentShader:wt.distance_frag},shadow:{uniforms:Ln([Ve.lights,Ve.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};Ai.physical={uniforms:Ln([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const ao={r:0,b:0,g:0},tE=new an,Rh=new gt;Rh.set(-1,0,0,0,1,0,0,0,1);function nE(n,e,t,i,r,o){const l=new It(0);let u=r===!0?0:1,f,h,_=null,g=0,p=null;function y(U){let O=U.isScene===!0?U.background:null;if(O&&O.isTexture){const L=U.backgroundBlurriness>0;O=e.get(O,L)}return O}function T(U){let O=!1;const L=y(U);L===null?E(l,u):L&&L.isColor&&(E(L,1),O=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?t.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(n.autoClear||O)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function I(U,O){const L=y(O);L&&(L.isCubeTexture||L.mapping===Io)?(h===void 0&&(h=new Ui(new Ta(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:ba(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,M,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=L,h.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(tE.makeRotationFromEuler(O.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Rh),h.material.toneMapped=Nt.getTransfer(L.colorSpace)!==Yt,(_!==L||g!==L.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,_=L,g=L.version,p=n.toneMapping),h.layers.enableAll(),U.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(f===void 0&&(f=new Ui(new ds(2,2),new Fi({name:"BackgroundMaterial",uniforms:ba(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=L,f.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,f.material.toneMapped=Nt.getTransfer(L.colorSpace)!==Yt,L.matrixAutoUpdate===!0&&L.updateMatrix(),f.material.uniforms.uvTransform.value.copy(L.matrix),(_!==L||g!==L.version||p!==n.toneMapping)&&(f.material.needsUpdate=!0,_=L,g=L.version,p=n.toneMapping),f.layers.enableAll(),U.unshift(f,f.geometry,f.material,0,0,null))}function E(U,O){U.getRGB(ao,bh(n)),t.buffers.color.setClear(ao.r,ao.g,ao.b,O,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return l},setClearColor:function(U,O=1){l.set(U),u=O,E(l,u)},getClearAlpha:function(){return u},setClearAlpha:function(U){u=U,E(l,u)},render:T,addToRenderList:I,dispose:v}}function iE(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null);let o=r,l=!1;function u(W,Y,ae,X,q){let de=!1;const _e=g(W,X,ae,Y);o!==_e&&(o=_e,h(o.object)),de=y(W,X,ae,q),de&&T(W,X,ae,q),q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(de||l)&&(l=!1,L(W,Y,ae,X),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function f(){return n.createVertexArray()}function h(W){return n.bindVertexArray(W)}function _(W){return n.deleteVertexArray(W)}function g(W,Y,ae,X){const q=X.wireframe===!0;let de=i[Y.id];de===void 0&&(de={},i[Y.id]=de);const _e=W.isInstancedMesh===!0?W.id:0;let Ee=de[_e];Ee===void 0&&(Ee={},de[_e]=Ee);let pe=Ee[ae.id];pe===void 0&&(pe={},Ee[ae.id]=pe);let me=pe[q];return me===void 0&&(me=p(f()),pe[q]=me),me}function p(W){const Y=[],ae=[],X=[];for(let q=0;q<t;q++)Y[q]=0,ae[q]=0,X[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:ae,attributeDivisors:X,object:W,attributes:{},index:null}}function y(W,Y,ae,X){const q=o.attributes,de=Y.attributes;let _e=0;const Ee=ae.getAttributes();for(const pe in Ee)if(Ee[pe].location>=0){const Se=q[pe];let je=de[pe];if(je===void 0&&(pe==="instanceMatrix"&&W.instanceMatrix&&(je=W.instanceMatrix),pe==="instanceColor"&&W.instanceColor&&(je=W.instanceColor)),Se===void 0||Se.attribute!==je||je&&Se.data!==je.data)return!0;_e++}return o.attributesNum!==_e||o.index!==X}function T(W,Y,ae,X){const q={},de=Y.attributes;let _e=0;const Ee=ae.getAttributes();for(const pe in Ee)if(Ee[pe].location>=0){let Se=de[pe];Se===void 0&&(pe==="instanceMatrix"&&W.instanceMatrix&&(Se=W.instanceMatrix),pe==="instanceColor"&&W.instanceColor&&(Se=W.instanceColor));const je={};je.attribute=Se,Se&&Se.data&&(je.data=Se.data),q[pe]=je,_e++}o.attributes=q,o.attributesNum=_e,o.index=X}function I(){const W=o.newAttributes;for(let Y=0,ae=W.length;Y<ae;Y++)W[Y]=0}function E(W){v(W,0)}function v(W,Y){const ae=o.newAttributes,X=o.enabledAttributes,q=o.attributeDivisors;ae[W]=1,X[W]===0&&(n.enableVertexAttribArray(W),X[W]=1),q[W]!==Y&&(n.vertexAttribDivisor(W,Y),q[W]=Y)}function U(){const W=o.newAttributes,Y=o.enabledAttributes;for(let ae=0,X=Y.length;ae<X;ae++)Y[ae]!==W[ae]&&(n.disableVertexAttribArray(ae),Y[ae]=0)}function O(W,Y,ae,X,q,de,_e){_e===!0?n.vertexAttribIPointer(W,Y,ae,q,de):n.vertexAttribPointer(W,Y,ae,X,q,de)}function L(W,Y,ae,X){I();const q=X.attributes,de=ae.getAttributes(),_e=Y.defaultAttributeValues;for(const Ee in de){const pe=de[Ee];if(pe.location>=0){let me=q[Ee];if(me===void 0&&(Ee==="instanceMatrix"&&W.instanceMatrix&&(me=W.instanceMatrix),Ee==="instanceColor"&&W.instanceColor&&(me=W.instanceColor)),me!==void 0){const Se=me.normalized,je=me.itemSize,He=e.get(me);if(He===void 0)continue;const ot=He.buffer,rt=He.type,tt=He.bytesPerElement,ue=rt===n.INT||rt===n.UNSIGNED_INT||me.gpuType===lu;if(me.isInterleavedBufferAttribute){const te=me.data,ge=te.stride,he=me.offset;if(te.isInstancedInterleavedBuffer){for(let Ae=0;Ae<pe.locationSize;Ae++)v(pe.location+Ae,te.meshPerAttribute);W.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ae=0;Ae<pe.locationSize;Ae++)E(pe.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,ot);for(let Ae=0;Ae<pe.locationSize;Ae++)O(pe.location+Ae,je/pe.locationSize,rt,Se,ge*tt,(he+je/pe.locationSize*Ae)*tt,ue)}else{if(me.isInstancedBufferAttribute){for(let te=0;te<pe.locationSize;te++)v(pe.location+te,me.meshPerAttribute);W.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let te=0;te<pe.locationSize;te++)E(pe.location+te);n.bindBuffer(n.ARRAY_BUFFER,ot);for(let te=0;te<pe.locationSize;te++)O(pe.location+te,je/pe.locationSize,rt,Se,je*tt,je/pe.locationSize*te*tt,ue)}}else if(_e!==void 0){const Se=_e[Ee];if(Se!==void 0)switch(Se.length){case 2:n.vertexAttrib2fv(pe.location,Se);break;case 3:n.vertexAttrib3fv(pe.location,Se);break;case 4:n.vertexAttrib4fv(pe.location,Se);break;default:n.vertexAttrib1fv(pe.location,Se)}}}}U()}function N(){B();for(const W in i){const Y=i[W];for(const ae in Y){const X=Y[ae];for(const q in X){const de=X[q];for(const _e in de)_(de[_e].object),delete de[_e];delete X[q]}}delete i[W]}}function M(W){if(i[W.id]===void 0)return;const Y=i[W.id];for(const ae in Y){const X=Y[ae];for(const q in X){const de=X[q];for(const _e in de)_(de[_e].object),delete de[_e];delete X[q]}}delete i[W.id]}function V(W){for(const Y in i){const ae=i[Y];for(const X in ae){const q=ae[X];if(q[W.id]===void 0)continue;const de=q[W.id];for(const _e in de)_(de[_e].object),delete de[_e];delete q[W.id]}}}function R(W){for(const Y in i){const ae=i[Y],X=W.isInstancedMesh===!0?W.id:0,q=ae[X];if(q!==void 0){for(const de in q){const _e=q[de];for(const Ee in _e)_(_e[Ee].object),delete _e[Ee];delete q[de]}delete ae[X],Object.keys(ae).length===0&&delete i[Y]}}}function B(){F(),l=!0,o!==r&&(o=r,h(o.object))}function F(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:u,reset:B,resetDefaultState:F,dispose:N,releaseStatesOfGeometry:M,releaseStatesOfObject:R,releaseStatesOfProgram:V,initAttributes:I,enableAttribute:E,disableUnusedAttributes:U}}function rE(n,e,t){let i;function r(f){i=f}function o(f,h){n.drawArrays(i,f,h),t.update(h,i,1)}function l(f,h,_){_!==0&&(n.drawArraysInstanced(i,f,h,_),t.update(h,i,_))}function u(f,h,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,h,0,_);let p=0;for(let y=0;y<_;y++)p+=h[y];t.update(p,i,1)}this.setMode=r,this.render=o,this.renderInstances=l,this.renderMultiDraw=u}function aE(n,e,t,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(V){return!(V!==_i&&i.convert(V)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(V){const R=V===Ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(V!==Xn&&V!==Ri&&!R&&i.convert(V)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function f(V){if(V==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const _=f(h);_!==h&&(ut("WebGLRenderer:",h,"not supported, using",_,"instead."),h=_);const g=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&p===!1&&ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=n.getParameter(n.MAX_TEXTURE_SIZE),E=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),U=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),O=n.getParameter(n.MAX_VARYING_VECTORS),L=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:f,textureFormatReadable:l,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:p,maxTextures:y,maxVertexTextures:T,maxTextureSize:I,maxCubemapSize:E,maxAttributes:v,maxVertexUniforms:U,maxVaryings:O,maxFragmentUniforms:L,maxSamples:N,samples:M}}function sE(n){const e=this;let t=null,i=0,r=!1,o=!1;const l=new Ti,u=new gt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,p){const y=g.length!==0||p||i!==0||r;return r=p,i=g.length,y},this.beginShadows=function(){o=!0,_(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,p){t=_(g,p,0)},this.setState=function(g,p,y){const T=g.clippingPlanes,I=g.clipIntersection,E=g.clipShadows,v=n.get(g);if(!r||T===null||T.length===0||o&&!E)o?_(null):h();else{const U=o?0:i,O=U*4;let L=v.clippingState||null;f.value=L,L=_(T,p,O,y);for(let N=0;N!==O;++N)L[N]=t[N];v.clippingState=L,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=U}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function _(g,p,y,T){const I=g!==null?g.length:0;let E=null;if(I!==0){if(E=f.value,T!==!0||E===null){const v=y+I*4,U=p.matrixWorldInverse;u.getNormalMatrix(U),(E===null||E.length<v)&&(E=new Float32Array(v));for(let O=0,L=y;O!==I;++O,L+=4)l.copy(g[O]).applyMatrix4(U,u),l.normal.toArray(E,L),E[L+3]=l.constant}f.value=E,f.needsUpdate=!0}return e.numPlanes=I,e.numIntersection=0,E}}const ya=4,oE=6,lE=20,cE=256,$a=new Mu,td=new It;let zl=null,Gl=0,Hl=0,Vl=!1;const uE=new ne,br=new ne;class nd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,o={}){const{size:l=256,position:u=uE}=o;zl=this._renderer.getRenderTarget(),Gl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,i,r,f,u),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ad(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(zl,Gl,Hl),this._renderer.xr.enabled=Vl,e.scissorTest=!1,ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ir||e.mapping===Ma?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zl=this._renderer.getRenderTarget(),Gl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Ii,format:_i,colorSpace:bo,depthBuffer:!1},r=id(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=id(e,t,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=fE(o)),this._blurMaterial=hE(o,e,t),this._ggxMaterial=dE(o,e,t)}return r}_compileMaterial(e){const t=new Ui(new Un,e);this._renderer.compile(t,$a)}_sceneToCubeUV(e,t,i,r,o){const f=new ii(90,1,t,i),h=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,p=g.autoClear,y=g.toneMapping;g.getClearColor(td),g.toneMapping=Di,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(r),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ui(new Ta,new xh({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1})));const I=this._backgroundBox,E=I.material;let v=!1;const U=e.background;U?U.isColor&&(E.color.copy(U),e.background=null,v=!0):(E.color.copy(td),v=!0);for(let O=0;O<6;O++){const L=O%3;L===0?(f.up.set(0,h[O],0),f.position.set(o.x,o.y,o.z),f.lookAt(o.x+_[O],o.y,o.z)):L===1?(f.up.set(0,0,h[O]),f.position.set(o.x,o.y,o.z),f.lookAt(o.x,o.y+_[O],o.z)):(f.up.set(0,h[O],0),f.position.set(o.x,o.y,o.z),f.lookAt(o.x,o.y,o.z+_[O]));const N=this._cubeSize;ha(r,L*N,O>2?N:0,N,N),g.setRenderTarget(r),v&&g.render(I,f),g.render(e,f)}g.toneMapping=y,g.autoClear=p,e.background=U}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ir||e.mapping===Ma;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ad()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rd());const o=r?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=o;const u=o.uniforms;u.envMap.value=e;const f=this._cubeSize;ha(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(l,$a)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,o=this._pingPongRenderTarget,l=this._ggxMaterial,u=this._lodMeshes[i];u.material=l;const f=l.uniforms,h=i/(this._lodMeshes.length-1),_=t/(this._lodMeshes.length-1),g=Math.sqrt(h*h-_*_),p=h*1.25,y=g*p,{_lodMax:T}=this,I=this._sizeLods[i],E=3*I*(i>T-ya?i-T+ya:0),v=4*(this._cubeSize-I);f.envMap.value=e.texture,f.roughness.value=y,f.mipInt.value=T-t,ha(o,E,v,3*I,2*I),r.setRenderTarget(o),r.render(u,$a),f.envMap.value=o.texture,f.roughness.value=0,f.mipInt.value=T-i,ha(e,E,v,3*I,2*I),r.setRenderTarget(e),r.render(u,$a)}_blur(e,t,i,r){const o=this._pingPongRenderTarget,l=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,o,t,i,l),this._blurPass(o,e,i,i,l)}_blurPass(e,t,i,r,o){const l=this._renderer,u=this._blurMaterial,f=this._lodMeshes[r];f.material=u;const h=u.uniforms;h.envMap.value=e.texture,h.sigma.value=o,h.mipInt.value=this._lodMax-i;const _=this._sizeLods[r],g=3*_*(r>this._lodMax-ya?r-this._lodMax+ya:0),p=4*(this._cubeSize-_);ha(t,g,p,3*_,2*_),l.setRenderTarget(t),l.render(f,$a)}}function fE(n){const e=[],t=[];let i=n;const r=n-ya+1+oE;for(let o=0;o<r;o++){const l=Math.pow(2,i);e.push(l);const u=1/(l-2),f=-u,h=1+u,_=[f,f,h,f,h,h,f,f,h,h,f,h],g=6,p=6,y=3,T=new Float32Array(y*p*g),I=new Float32Array(y*p*g);for(let v=0;v<g;v++){const U=v%3*2/3-1,O=v>2?0:-1,L=[U,O,0,U+2/3,O,0,U+2/3,O+1,0,U,O,0,U+2/3,O+1,0,U,O+1,0];T.set(L,y*p*v);for(let N=0;N<p;N++){const M=_[N*2]*2-1,V=_[N*2+1]*2-1;v===0?br.set(1,V,M):v===1?br.set(-M,1,-V):v===2?br.set(-M,V,1):v===3?br.set(-1,V,-M):v===4?br.set(-M,-1,V):br.set(M,V,-1),br.toArray(I,(v*p+N)*y)}}const E=new Un;E.setAttribute("position",new vi(T,y)),E.setAttribute("outputDirection",new vi(I,y)),t.push(new Ui(E,null)),i>ya&&i--}return{lodMeshes:t,sizeLods:e}}function id(n,e,t){const i=new gi(n,e,t);return i.texture.mapping=Io,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ha(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function dE(n,e,t){return new Fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:No(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function hE(n,e,t){return new Fi({name:"SphericalGaussianBlur",defines:{SAMPLES:lE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:No(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function rd(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function ad(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function No(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ch extends gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Eh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ta(5,5,5),o=new Fi({name:"CubemapFromEquirect",uniforms:ba(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bn,blending:$i});o.uniforms.tEquirect.value=t;const l=new Ui(r,o),u=t.minFilter;return t.minFilter===Pr&&(t.minFilter=Tn),new my(1,10,this).update(e,l),t.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,i,r);e.setRenderTarget(o)}}function pE(n){let e=new WeakMap,t=new WeakMap,i=null;function r(p,y=!1){return p==null?null:y?l(p):o(p)}function o(p){if(p&&p.isTexture){const y=p.mapping;if(y===dl||y===hl)if(e.has(p)){const T=e.get(p).texture;return u(T,p.mapping)}else{const T=p.image;if(T&&T.height>0){const I=new Ch(T.height);return I.fromEquirectangularTexture(n,p),e.set(p,I),p.addEventListener("dispose",h),u(I.texture,p.mapping)}else return null}}return p}function l(p){if(p&&p.isTexture){const y=p.mapping,T=y===dl||y===hl,I=y===Ir||y===Ma;if(T||I){let E=t.get(p);const v=E!==void 0?E.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==v)return i===null&&(i=new nd(n)),E=T?i.fromEquirectangular(p,E):i.fromCubemap(p,E),E.texture.pmremVersion=p.pmremVersion,t.set(p,E),E.texture;if(E!==void 0)return E.texture;{const U=p.image;return T&&U&&U.height>0||I&&U&&f(U)?(i===null&&(i=new nd(n)),E=T?i.fromEquirectangular(p):i.fromCubemap(p),E.texture.pmremVersion=p.pmremVersion,t.set(p,E),p.addEventListener("dispose",_),E.texture):null}}}return p}function u(p,y){return y===dl?p.mapping=Ir:y===hl&&(p.mapping=Ma),p}function f(p){let y=0;const T=6;for(let I=0;I<T;I++)p[I]!==void 0&&y++;return y===T}function h(p){const y=p.target;y.removeEventListener("dispose",h);const T=e.get(y);T!==void 0&&(e.delete(y),T.dispose())}function _(p){const y=p.target;y.removeEventListener("dispose",_);const T=t.get(y);T!==void 0&&(t.delete(y),T.dispose())}function g(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:g}}function mE(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Sa("WebGLRenderer: "+i+" extension not supported."),r}}}function _E(n,e,t,i){const r={},o=new WeakMap;function l(g){const p=g.target;p.index!==null&&e.remove(p.index);for(const T in p.attributes)e.remove(p.attributes[T]);p.removeEventListener("dispose",l),delete r[p.id];const y=o.get(p);y&&(e.remove(y),o.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function u(g,p){return r[p.id]===!0||(p.addEventListener("dispose",l),r[p.id]=!0,t.memory.geometries++),p}function f(g){const p=g.attributes;for(const y in p)e.update(p[y],n.ARRAY_BUFFER)}function h(g){const p=[],y=g.index,T=g.attributes.position;let I=0;if(T===void 0)return;if(y!==null){const U=y.array;I=y.version;for(let O=0,L=U.length;O<L;O+=3){const N=U[O+0],M=U[O+1],V=U[O+2];p.push(N,M,M,V,V,N)}}else{const U=T.array;I=T.version;for(let O=0,L=U.length/3-1;O<L;O+=3){const N=O+0,M=O+1,V=O+2;p.push(N,M,M,V,V,N)}}const E=new(T.count>=65535?yh:vh)(p,1);E.version=I;const v=o.get(g);v&&e.remove(v),o.set(g,E)}function _(g){const p=o.get(g);if(p){const y=g.index;y!==null&&p.version<y.version&&h(g)}else h(g);return o.get(g)}return{get:u,update:f,getWireframeAttribute:_}}function gE(n,e,t){let i;function r(g){i=g}let o,l;function u(g){o=g.type,l=g.bytesPerElement}function f(g,p){n.drawElements(i,p,o,g*l),t.update(p,i,1)}function h(g,p,y){y!==0&&(n.drawElementsInstanced(i,p,o,g*l,y),t.update(p,i,y))}function _(g,p,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,o,g,0,y);let I=0;for(let E=0;E<y;E++)I+=p[E];t.update(I,i,1)}this.setMode=r,this.setIndex=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=_}function vE(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,l,u){switch(t.calls++,l){case n.TRIANGLES:t.triangles+=u*(o/3);break;case n.LINES:t.lines+=u*(o/2);break;case n.LINE_STRIP:t.lines+=u*(o-1);break;case n.LINE_LOOP:t.lines+=u*o;break;case n.POINTS:t.points+=u*o;break;default:Gt("WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function yE(n,e,t){const i=new WeakMap,r=new on;function o(l,u,f){const h=l.morphTargetInfluences,_=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let p=i.get(u);if(p===void 0||p.count!==g){let B=function(){V.dispose(),i.delete(u),u.removeEventListener("dispose",B)};p!==void 0&&p.texture.dispose();const y=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,I=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],U=u.morphAttributes.color||[];let O=0;y===!0&&(O=1),T===!0&&(O=2),I===!0&&(O=3);let L=u.attributes.position.count*O,N=1;L>e.maxTextureSize&&(N=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const M=new Float32Array(L*N*4*g),V=new _h(M,L,N,g);V.type=Ri,V.needsUpdate=!0;const R=O*4;for(let F=0;F<g;F++){const W=E[F],Y=v[F],ae=U[F],X=L*N*4*F;for(let q=0;q<W.count;q++){const de=q*R;y===!0&&(r.fromBufferAttribute(W,q),M[X+de+0]=r.x,M[X+de+1]=r.y,M[X+de+2]=r.z,M[X+de+3]=0),T===!0&&(r.fromBufferAttribute(Y,q),M[X+de+4]=r.x,M[X+de+5]=r.y,M[X+de+6]=r.z,M[X+de+7]=0),I===!0&&(r.fromBufferAttribute(ae,q),M[X+de+8]=r.x,M[X+de+9]=r.y,M[X+de+10]=r.z,M[X+de+11]=ae.itemSize===4?r.w:1)}}p={count:g,texture:V,size:new ht(L,N)},i.set(u,p),u.addEventListener("dispose",B)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",l.morphTexture,t);else{let y=0;for(let I=0;I<h.length;I++)y+=h[I];const T=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(n,"morphTargetBaseInfluence",T),f.getUniforms().setValue(n,"morphTargetInfluences",h)}f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:o}}function xE(n,e,t,i,r){let o=new WeakMap;function l(h){const _=r.render.frame,g=h.geometry,p=e.get(h,g);if(o.get(p)!==_&&(e.update(p),o.set(p,_)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==_&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),o.set(h,_))),h.isSkinnedMesh){const y=h.skeleton;o.get(y)!==_&&(y.update(),o.set(y,_))}return p}function u(){o=new WeakMap}function f(h){const _=h.target;_.removeEventListener("dispose",f),i.releaseStatesOfObject(_),t.remove(_.instanceMatrix),_.instanceColor!==null&&t.remove(_.instanceColor)}return{update:l,dispose:u}}const SE={[eh]:"LINEAR_TONE_MAPPING",[th]:"REINHARD_TONE_MAPPING",[nh]:"CINEON_TONE_MAPPING",[ih]:"ACES_FILMIC_TONE_MAPPING",[ah]:"AGX_TONE_MAPPING",[sh]:"NEUTRAL_TONE_MAPPING",[rh]:"CUSTOM_TONE_MAPPING"};function EE(n,e,t,i,r,o){const l=new gi(e,t,{type:n,depthBuffer:r,stencilBuffer:o,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let u=null,f=null;const h=new Un;h.setAttribute("position",new yn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new yn([0,2,0,0,2,0],2));const _=new oy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),g=new Ui(h,_),p=new Mu(-1,1,1,-1,0,1);let y=null,T=null,I=!1,E,v=null,U=[],O=!1;this.setSize=function(L,N){l.setSize(L,N),u!==null&&u.setSize(L,N),f!==null&&f.setSize(L,N);for(let M=0;M<U.length;M++){const V=U[M];V.setSize&&V.setSize(L,N)}},this.setEffects=function(L){U=L,O=U.length>0&&U[0].isRenderPass===!0;const N=l.width,M=l.height;U.length>0&&u===null&&(u=new gi(N,M,{type:Ii,depthBuffer:!1,stencilBuffer:!1}),f=new gi(N,M,{type:Ii,depthBuffer:!1,stencilBuffer:!1}));for(let V=0;V<U.length;V++){const R=U[V];R.setSize&&R.setSize(N,M)}},this.begin=function(L,N){if(I||L.toneMapping===Di&&U.length===0)return!1;if(v=N,N!==null){const M=N.width,V=N.height;(l.width!==M||l.height!==V)&&this.setSize(M,V)}return O===!1&&L.setRenderTarget(l),E=L.toneMapping,L.toneMapping=Di,!0},this.hasRenderPass=function(){return O},this.end=function(L,N){L.toneMapping=E,I=!0;let M=l,V=u;for(let R=0;R<U.length;R++){const B=U[R];B.enabled!==!1&&(B.render(L,V,M,N),B.needsSwap!==!1&&(M=V,V=V===u?f:u))}if(y!==L.outputColorSpace||T!==L.toneMapping){y=L.outputColorSpace,T=L.toneMapping,_.defines={},Nt.getTransfer(y)===Yt&&(_.defines.SRGB_TRANSFER="");const R=SE[T];R&&(_.defines[R]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=M.texture,L.setRenderTarget(v),L.render(g,p),v=null,I=!1},this.isCompositing=function(){return I},this.dispose=function(){l.dispose(),u!==null&&u.dispose(),f!==null&&f.dispose(),h.dispose(),_.dispose()}}const Ph=new In,Qc=new ls(1,1),Dh=new _h,Lh=new Nv,Ih=new Eh,sd=[],od=[],ld=new Float32Array(16),cd=new Float32Array(9),ud=new Float32Array(4);function Aa(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let o=sd[r];if(o===void 0&&(o=new Float32Array(r),sd[r]=o),e!==0){i.toArray(o,0);for(let l=1,u=0;l!==e;++l)u+=t,n[l].toArray(o,u)}return o}function pn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function mn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Oo(n,e){let t=od[e];t===void 0&&(t=new Int32Array(e),od[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ME(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function bE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2fv(this.addr,e),mn(t,e)}}function wE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;n.uniform3fv(this.addr,e),mn(t,e)}}function TE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4fv(this.addr,e),mn(t,e)}}function AE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,i))return;ud.set(i),n.uniformMatrix2fv(this.addr,!1,ud),mn(t,i)}}function RE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,i))return;cd.set(i),n.uniformMatrix3fv(this.addr,!1,cd),mn(t,i)}}function CE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,i))return;ld.set(i),n.uniformMatrix4fv(this.addr,!1,ld),mn(t,i)}}function PE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function DE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2iv(this.addr,e),mn(t,e)}}function LE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;n.uniform3iv(this.addr,e),mn(t,e)}}function IE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4iv(this.addr,e),mn(t,e)}}function UE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function FE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2uiv(this.addr,e),mn(t,e)}}function NE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;n.uniform3uiv(this.addr,e),mn(t,e)}}function OE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4uiv(this.addr,e),mn(t,e)}}function BE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let o;this.type===n.SAMPLER_2D_SHADOW?(Qc.compareFunction=t.isReversedDepthBuffer()?mu:pu,o=Qc):o=Ph,t.setTexture2D(e||o,r)}function kE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Lh,r)}function zE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ih,r)}function GE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Dh,r)}function HE(n){switch(n){case 5126:return ME;case 35664:return bE;case 35665:return wE;case 35666:return TE;case 35674:return AE;case 35675:return RE;case 35676:return CE;case 5124:case 35670:return PE;case 35667:case 35671:return DE;case 35668:case 35672:return LE;case 35669:case 35673:return IE;case 5125:return UE;case 36294:return FE;case 36295:return NE;case 36296:return OE;case 35678:case 36198:case 36298:case 36306:case 35682:return BE;case 35679:case 36299:case 36307:return kE;case 35680:case 36300:case 36308:case 36293:return zE;case 36289:case 36303:case 36311:case 36292:return GE}}function VE(n,e){n.uniform1fv(this.addr,e)}function WE(n,e){const t=Aa(e,this.size,2);n.uniform2fv(this.addr,t)}function $E(n,e){const t=Aa(e,this.size,3);n.uniform3fv(this.addr,t)}function XE(n,e){const t=Aa(e,this.size,4);n.uniform4fv(this.addr,t)}function qE(n,e){const t=Aa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function YE(n,e){const t=Aa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function jE(n,e){const t=Aa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function KE(n,e){n.uniform1iv(this.addr,e)}function ZE(n,e){n.uniform2iv(this.addr,e)}function JE(n,e){n.uniform3iv(this.addr,e)}function QE(n,e){n.uniform4iv(this.addr,e)}function eM(n,e){n.uniform1uiv(this.addr,e)}function tM(n,e){n.uniform2uiv(this.addr,e)}function nM(n,e){n.uniform3uiv(this.addr,e)}function iM(n,e){n.uniform4uiv(this.addr,e)}function rM(n,e,t){const i=this.cache,r=e.length,o=Oo(t,r);pn(i,o)||(n.uniform1iv(this.addr,o),mn(i,o));let l;this.type===n.SAMPLER_2D_SHADOW?l=Qc:l=Ph;for(let u=0;u!==r;++u)t.setTexture2D(e[u]||l,o[u])}function aM(n,e,t){const i=this.cache,r=e.length,o=Oo(t,r);pn(i,o)||(n.uniform1iv(this.addr,o),mn(i,o));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||Lh,o[l])}function sM(n,e,t){const i=this.cache,r=e.length,o=Oo(t,r);pn(i,o)||(n.uniform1iv(this.addr,o),mn(i,o));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||Ih,o[l])}function oM(n,e,t){const i=this.cache,r=e.length,o=Oo(t,r);pn(i,o)||(n.uniform1iv(this.addr,o),mn(i,o));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||Dh,o[l])}function lM(n){switch(n){case 5126:return VE;case 35664:return WE;case 35665:return $E;case 35666:return XE;case 35674:return qE;case 35675:return YE;case 35676:return jE;case 5124:case 35670:return KE;case 35667:case 35671:return ZE;case 35668:case 35672:return JE;case 35669:case 35673:return QE;case 5125:return eM;case 36294:return tM;case 36295:return nM;case 36296:return iM;case 35678:case 36198:case 36298:case 36306:case 35682:return rM;case 35679:case 36299:case 36307:return aM;case 35680:case 36300:case 36308:case 36293:return sM;case 36289:case 36303:case 36311:case 36292:return oM}}class cM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=HE(t.type)}}class uM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lM(t.type)}}class fM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let o=0,l=r.length;o!==l;++o){const u=r[o];u.setValue(e,t[u.id],i)}}}const Wl=/(\w+)(\])?(\[|\.)?/g;function fd(n,e){n.seq.push(e),n.map[e.id]=e}function dM(n,e,t){const i=n.name,r=i.length;for(Wl.lastIndex=0;;){const o=Wl.exec(i),l=Wl.lastIndex;let u=o[1];const f=o[2]==="]",h=o[3];if(f&&(u=u|0),h===void 0||h==="["&&l+2===r){fd(t,h===void 0?new cM(u,n,e):new uM(u,n,e));break}else{let g=t.map[u];g===void 0&&(g=new fM(u),fd(t,g)),t=g}}}class yo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let l=0;l<i;++l){const u=e.getActiveUniform(t,l),f=e.getUniformLocation(t,u.name);dM(u,f,this)}const r=[],o=[];for(const l of this.seq)l.type===e.SAMPLER_2D_SHADOW||l.type===e.SAMPLER_CUBE_SHADOW||l.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(l):o.push(l);r.length>0&&(this.seq=r.concat(o))}setValue(e,t,i,r){const o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,l=t.length;o!==l;++o){const u=t[o],f=i[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,o=e.length;r!==o;++r){const l=e[r];l.id in t&&i.push(l)}return i}}function dd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const hM=37297;let pM=0;function mM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let l=r;l<o;l++){const u=l+1;i.push(`${u===e?">":" "} ${u}: ${t[l]}`)}return i.join(`
`)}const hd=new gt;function _M(n){Nt._getMatrix(hd,Nt.workingColorSpace,n);const e=`mat3( ${hd.elements.map(t=>t.toFixed(4))} )`;switch(Nt.getTransfer(n)){case wo:return[e,"LinearTransferOETF"];case Yt:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function pd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),o=(n.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+mM(n.getShaderSource(e),u)}else return o}function gM(n,e){const t=_M(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const vM={[eh]:"Linear",[th]:"Reinhard",[nh]:"Cineon",[ih]:"ACESFilmic",[ah]:"AgX",[sh]:"Neutral",[rh]:"Custom"};function yM(n,e){const t=vM[e];return t===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const so=new ne;function xM(){Nt.getLuminanceCoefficients(so);const n=so.x.toFixed(4),e=so.y.toFixed(4),t=so.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function SM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ja).join(`
`)}function EM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function MM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=n.getActiveAttrib(e,r),l=o.name;let u=1;o.type===n.FLOAT_MAT2&&(u=2),o.type===n.FLOAT_MAT3&&(u=3),o.type===n.FLOAT_MAT4&&(u=4),t[l]={type:o.type,location:n.getAttribLocation(e,l),locationSize:u}}return t}function Ja(n){return n!==""}function md(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _d(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bM=/^[ \t]*#include +<([\w\d./]+)>/gm;function eu(n){return n.replace(bM,TM)}const wM=new Map;function TM(n,e){let t=wt[e];if(t===void 0){const i=wM.get(e);if(i!==void 0)t=wt[i],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return eu(t)}const AM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gd(n){return n.replace(AM,RM)}function RM(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function vd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const CM={[ts]:"SHADOWMAP_TYPE_PCF",[Za]:"SHADOWMAP_TYPE_VSM"};function PM(n){return CM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const DM={[Ir]:"ENVMAP_TYPE_CUBE",[Ma]:"ENVMAP_TYPE_CUBE",[Io]:"ENVMAP_TYPE_CUBE_UV"};function LM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":DM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const IM={[Ma]:"ENVMAP_MODE_REFRACTION"};function UM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":IM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const FM={[Qd]:"ENVMAP_BLENDING_MULTIPLY",[dv]:"ENVMAP_BLENDING_MIX",[hv]:"ENVMAP_BLENDING_ADD"};function NM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":FM[n.combine]||"ENVMAP_BLENDING_NONE"}function OM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function BM(n,e,t,i){const r=n.getContext(),o=t.defines;let l=t.vertexShader,u=t.fragmentShader;const f=PM(t),h=LM(t),_=UM(t),g=NM(t),p=OM(t),y=SM(t),T=EM(o),I=r.createProgram();let E,v,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(E=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Ja).join(`
`),E.length>0&&(E+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Ja).join(`
`),v.length>0&&(v+=`
`)):(E=[vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ja).join(`
`),v=[vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+_:"",t.envMap?"#define "+g:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?wt.tonemapping_pars_fragment:"",t.toneMapping!==Di?yM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,gM("linearToOutputTexel",t.outputColorSpace),xM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ja).join(`
`)),l=eu(l),l=md(l,t),l=_d(l,t),u=eu(u),u=md(u,t),u=_d(u,t),l=gd(l),u=gd(u),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,E=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,v=["#define varying in",t.glslVersion===bf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const O=U+E+l,L=U+v+u,N=dd(r,r.VERTEX_SHADER,O),M=dd(r,r.FRAGMENT_SHADER,L);r.attachShader(I,N),r.attachShader(I,M),t.index0AttributeName!==void 0?r.bindAttribLocation(I,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(I,0,"position"),r.linkProgram(I);function V(W){if(n.debug.checkShaderErrors){const Y=r.getProgramInfoLog(I)||"",ae=r.getShaderInfoLog(N)||"",X=r.getShaderInfoLog(M)||"",q=Y.trim(),de=ae.trim(),_e=X.trim();let Ee=!0,pe=!0;if(r.getProgramParameter(I,r.LINK_STATUS)===!1)if(Ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,I,N,M);else{const me=pd(r,N,"vertex"),Se=pd(r,M,"fragment");Gt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(I,r.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+q+`
`+me+`
`+Se)}else q!==""?ut("WebGLProgram: Program Info Log:",q):(de===""||_e==="")&&(pe=!1);pe&&(W.diagnostics={runnable:Ee,programLog:q,vertexShader:{log:de,prefix:E},fragmentShader:{log:_e,prefix:v}})}r.deleteShader(N),r.deleteShader(M),R=new yo(r,I),B=MM(r,I)}let R;this.getUniforms=function(){return R===void 0&&V(this),R};let B;this.getAttributes=function(){return B===void 0&&V(this),B};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=r.getProgramParameter(I,hM)),F},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(I),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pM++,this.cacheKey=e,this.usedTimes=1,this.program=I,this.vertexShader=N,this.fragmentShader=M,this}let kM=0;class zM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new GM(e),t.set(e,i)),i}}class GM{constructor(e){this.id=kM++,this.code=e,this.usedTimes=0}}function HM(n){return n===Ur||n===Eo||n===Mo}function VM(n,e,t,i,r,o){const l=new gu,u=new zM,f=new Set,h=[],_=new Map,g=i.logarithmicDepthBuffer;let p=i.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(R){return f.add(R),R===0?"uv":`uv${R}`}function I(R,B,F,W,Y,ae){const X=W.fog,q=Y.geometry,de=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?W.environment:null,_e=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap,Ee=e.get(R.envMap||de,_e),pe=Ee&&Ee.mapping===Io?Ee.image.height:null,me=y[R.type];R.precision!==null&&(p=i.getMaxPrecision(R.precision),p!==R.precision&&ut("WebGLProgram.getParameters:",R.precision,"not supported, using",p,"instead."));const Se=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,je=Se!==void 0?Se.length:0;let He=0;q.morphAttributes.position!==void 0&&(He=1),q.morphAttributes.normal!==void 0&&(He=2),q.morphAttributes.color!==void 0&&(He=3);let ot,rt,tt,ue;if(me){const Tt=Ai[me];ot=Tt.vertexShader,rt=Tt.fragmentShader}else{ot=R.vertexShader,rt=R.fragmentShader;const Tt=u.getVertexShaderStage(R),Pt=u.getFragmentShaderStage(R);u.update(R,Tt,Pt),tt=Tt.id,ue=Pt.id}const te=n.getRenderTarget(),ge=n.state.buffers.depth.getReversed(),he=Y.isInstancedMesh===!0,Ae=Y.isBatchedMesh===!0,Ge=!!R.map,Ct=!!R.matcap,at=!!Ee,vt=!!R.aoMap,Wt=!!R.lightMap,pt=!!R.bumpMap&&R.wireframe===!1,$t=!!R.normalMap,Xt=!!R.displacementMap,sn=!!R.emissiveMap,Bt=!!R.metalnessMap,Ut=!!R.roughnessMap,Z=R.anisotropy>0,et=R.clearcoat>0,lt=R.dispersion>0,k=R.retroreflectivity>0,b=R.iridescence>0,re=R.sheen>0,ce=R.transmission>0,ve=Z&&!!R.anisotropyMap,De=et&&!!R.clearcoatMap,Ue=et&&!!R.clearcoatNormalMap,ye=et&&!!R.clearcoatRoughnessMap,be=b&&!!R.iridescenceMap,Fe=b&&!!R.iridescenceThicknessMap,Je=re&&!!R.sheenColorMap,Be=re&&!!R.sheenRoughnessMap,Ne=!!R.specularMap,Qe=!!R.specularColorMap,it=!!R.specularIntensityMap,ct=ce&&!!R.transmissionMap,j=ce&&!!R.thicknessMap,ie=!!R.gradientMap,$=!!R.alphaMap,Le=R.alphaTest>0,ze=!!R.alphaHash,Te=!!R.extensions;let qe=Di;R.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(qe=n.toneMapping);const Ke={shaderID:me,shaderType:R.type,shaderName:R.name,vertexShader:ot,fragmentShader:rt,defines:R.defines,customVertexShaderID:tt,customFragmentShaderID:ue,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:p,batching:Ae,batchingColor:Ae&&Y._colorsTexture!==null,instancing:he,instancingColor:he&&Y.instanceColor!==null,instancingMorph:he&&Y.morphTexture!==null,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Nt.workingColorSpace,alphaToCoverage:!!R.alphaToCoverage,map:Ge,matcap:Ct,envMap:at,envMapMode:at&&Ee.mapping,envMapCubeUVHeight:pe,aoMap:vt,lightMap:Wt,bumpMap:pt,normalMap:$t,displacementMap:Xt,emissiveMap:sn,normalMapObjectSpace:$t&&R.normalMapType===_v,normalMapTangentSpace:$t&&R.normalMapType===Kc,packedNormalMap:$t&&R.normalMapType===Kc&&HM(R.normalMap.format),metalnessMap:Bt,roughnessMap:Ut,anisotropy:Z,anisotropyMap:ve,clearcoat:et,clearcoatMap:De,clearcoatNormalMap:Ue,clearcoatRoughnessMap:ye,dispersion:lt,retroreflection:k,iridescence:b,iridescenceMap:be,iridescenceThicknessMap:Fe,sheen:re,sheenColorMap:Je,sheenRoughnessMap:Be,specularMap:Ne,specularColorMap:Qe,specularIntensityMap:it,transmission:ce,transmissionMap:ct,thicknessMap:j,gradientMap:ie,opaque:R.transparent===!1&&R.blending===ns&&R.alphaToCoverage===!1,alphaMap:$,alphaTest:Le,alphaHash:ze,combine:R.combine,mapUv:Ge&&T(R.map.channel),aoMapUv:vt&&T(R.aoMap.channel),lightMapUv:Wt&&T(R.lightMap.channel),bumpMapUv:pt&&T(R.bumpMap.channel),normalMapUv:$t&&T(R.normalMap.channel),displacementMapUv:Xt&&T(R.displacementMap.channel),emissiveMapUv:sn&&T(R.emissiveMap.channel),metalnessMapUv:Bt&&T(R.metalnessMap.channel),roughnessMapUv:Ut&&T(R.roughnessMap.channel),anisotropyMapUv:ve&&T(R.anisotropyMap.channel),clearcoatMapUv:De&&T(R.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&T(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&T(R.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&T(R.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&T(R.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&T(R.sheenColorMap.channel),sheenRoughnessMapUv:Be&&T(R.sheenRoughnessMap.channel),specularMapUv:Ne&&T(R.specularMap.channel),specularColorMapUv:Qe&&T(R.specularColorMap.channel),specularIntensityMapUv:it&&T(R.specularIntensityMap.channel),transmissionMapUv:ct&&T(R.transmissionMap.channel),thicknessMapUv:j&&T(R.thicknessMap.channel),alphaMapUv:$&&T(R.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&($t||Z),vertexNormals:!!q.attributes.normal,vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!q.attributes.uv&&(Ge||$),fog:!!X,useFog:R.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:R.wireframe===!1&&(R.flatShading===!0||q.attributes.normal===void 0&&$t===!1&&(R.isMeshLambertMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isMeshPhysicalMaterial)),sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:ge,skinning:Y.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:je,morphTextureStride:He,numSunLights:B.sun.length,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numSunLightShadows:B.sunShadowMap.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numLightProbeGrids:ae.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:R.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:qe,decodeVideoTexture:Ge&&R.map.isVideoTexture===!0&&Nt.getTransfer(R.map.colorSpace)===Yt,decodeVideoTextureEmissive:sn&&R.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(R.emissiveMap.colorSpace)===Yt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Vi,flipSided:R.side===Bn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Te&&R.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&R.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Ke.vertexUv1s=f.has(1),Ke.vertexUv2s=f.has(2),Ke.vertexUv3s=f.has(3),f.clear(),Ke}function E(R){const B=[];if(R.shaderID?B.push(R.shaderID):(B.push(R.customVertexShaderID),B.push(R.customFragmentShaderID)),R.defines!==void 0)for(const F in R.defines)B.push(F),B.push(R.defines[F]);return R.isRawShaderMaterial===!1&&(v(B,R),U(B,R),B.push(n.outputColorSpace)),B.push(R.customProgramCacheKey),B.join()}function v(R,B){R.push(B.precision),R.push(B.outputColorSpace),R.push(B.envMapMode),R.push(B.envMapCubeUVHeight),R.push(B.mapUv),R.push(B.alphaMapUv),R.push(B.lightMapUv),R.push(B.aoMapUv),R.push(B.bumpMapUv),R.push(B.normalMapUv),R.push(B.displacementMapUv),R.push(B.emissiveMapUv),R.push(B.metalnessMapUv),R.push(B.roughnessMapUv),R.push(B.anisotropyMapUv),R.push(B.clearcoatMapUv),R.push(B.clearcoatNormalMapUv),R.push(B.clearcoatRoughnessMapUv),R.push(B.iridescenceMapUv),R.push(B.iridescenceThicknessMapUv),R.push(B.sheenColorMapUv),R.push(B.sheenRoughnessMapUv),R.push(B.specularMapUv),R.push(B.specularColorMapUv),R.push(B.specularIntensityMapUv),R.push(B.transmissionMapUv),R.push(B.thicknessMapUv),R.push(B.combine),R.push(B.fogExp2),R.push(B.sizeAttenuation),R.push(B.morphTargetsCount),R.push(B.morphAttributeCount),R.push(B.numSunLights),R.push(B.numDirLights),R.push(B.numPointLights),R.push(B.numSpotLights),R.push(B.numSpotLightMaps),R.push(B.numHemiLights),R.push(B.numRectAreaLights),R.push(B.numSunLightShadows),R.push(B.numDirLightShadows),R.push(B.numPointLightShadows),R.push(B.numSpotLightShadows),R.push(B.numSpotLightShadowsWithMaps),R.push(B.numLightProbes),R.push(B.shadowMapType),R.push(B.toneMapping),R.push(B.numClippingPlanes),R.push(B.numClipIntersection),R.push(B.depthPacking)}function U(R,B){l.disableAll(),B.instancing&&l.enable(0),B.instancingColor&&l.enable(1),B.instancingMorph&&l.enable(2),B.matcap&&l.enable(3),B.envMap&&l.enable(4),B.normalMapObjectSpace&&l.enable(5),B.normalMapTangentSpace&&l.enable(6),B.clearcoat&&l.enable(7),B.iridescence&&l.enable(8),B.alphaTest&&l.enable(9),B.vertexColors&&l.enable(10),B.vertexAlphas&&l.enable(11),B.vertexUv1s&&l.enable(12),B.vertexUv2s&&l.enable(13),B.vertexUv3s&&l.enable(14),B.vertexTangents&&l.enable(15),B.anisotropy&&l.enable(16),B.alphaHash&&l.enable(17),B.batching&&l.enable(18),B.dispersion&&l.enable(19),B.retroreflection&&l.enable(24),B.batchingColor&&l.enable(20),B.gradientMap&&l.enable(21),B.packedNormalMap&&l.enable(22),B.vertexNormals&&l.enable(23),R.push(l.mask),l.disableAll(),B.fog&&l.enable(0),B.useFog&&l.enable(1),B.flatShading&&l.enable(2),B.logarithmicDepthBuffer&&l.enable(3),B.reversedDepthBuffer&&l.enable(4),B.skinning&&l.enable(5),B.morphTargets&&l.enable(6),B.morphNormals&&l.enable(7),B.morphColors&&l.enable(8),B.premultipliedAlpha&&l.enable(9),B.shadowMapEnabled&&l.enable(10),B.doubleSided&&l.enable(11),B.flipSided&&l.enable(12),B.useDepthPacking&&l.enable(13),B.dithering&&l.enable(14),B.transmission&&l.enable(15),B.sheen&&l.enable(16),B.opaque&&l.enable(17),B.pointsUvs&&l.enable(18),B.decodeVideoTexture&&l.enable(19),B.decodeVideoTextureEmissive&&l.enable(20),B.alphaToCoverage&&l.enable(21),B.numLightProbeGrids>0&&l.enable(22),B.hasPositionAttribute&&l.enable(23),R.push(l.mask)}function O(R){const B=y[R.type];let F;if(B){const W=Ai[B];F=ry.clone(W.uniforms)}else F=R.uniforms;return F}function L(R,B){let F=_.get(B);return F!==void 0?++F.usedTimes:(F=new BM(n,B,R,r),h.push(F),_.set(B,F)),F}function N(R){if(--R.usedTimes===0){const B=h.indexOf(R);h[B]=h[h.length-1],h.pop(),_.delete(R.cacheKey),R.destroy()}}function M(R){u.remove(R)}function V(){u.dispose()}return{getParameters:I,getProgramCacheKey:E,getUniforms:O,acquireProgram:L,releaseProgram:N,releaseShaderCache:M,programs:h,dispose:V}}function WM(){let n=new WeakMap;function e(l){return n.has(l)}function t(l){let u=n.get(l);return u===void 0&&(u={},n.set(l,u)),u}function i(l){n.delete(l)}function r(l,u,f){n.get(l)[u]=f}function o(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:o}}function $M(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function yd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function xd(){const n=[];let e=0;const t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function l(p){let y=0;return p.isInstancedMesh&&(y+=2),p.isSkinnedMesh&&(y+=1),y}function u(p,y,T,I,E,v){let U=n[e];return U===void 0?(U={id:p.id,object:p,geometry:y,material:T,materialVariant:l(p),groupOrder:I,renderOrder:p.renderOrder,z:E,group:v},n[e]=U):(U.id=p.id,U.object=p,U.geometry=y,U.material=T,U.materialVariant=l(p),U.groupOrder=I,U.renderOrder=p.renderOrder,U.z=E,U.group=v),e++,U}function f(p,y,T,I,E,v,U){U.reversedDepth===!0&&(E=-E);const O=u(p,y,T,I,E,v);T.transmission>0?i.push(O):T.transparent===!0?r.push(O):t.push(O)}function h(p,y,T,I,E,v){const U=u(p,y,T,I,E,v);T.transmission>0?i.unshift(U):T.transparent===!0?r.unshift(U):t.unshift(U)}function _(p,y){t.length>1&&t.sort(p||$M),i.length>1&&i.sort(y||yd),r.length>1&&r.sort(y||yd)}function g(){for(let p=e,y=n.length;p<y;p++){const T=n[p];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:f,unshift:h,finish:g,sort:_}}function XM(){let n=new WeakMap;function e(i,r){const o=n.get(i);let l;return o===void 0?(l=new xd,n.set(i,[l])):r>=o.length?(l=new xd,o.push(l)):l=o[r],l}function t(){n=new WeakMap}return{get:e,dispose:t}}function qM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ne,color:new It};break;case"SpotLight":t={position:new ne,direction:new ne,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new It,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new It,groundColor:new It};break;case"RectAreaLight":t={color:new It,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return n[e.id]=t,t}}}function YM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let jM=0;function KM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ZM(n){const e=new qM,t=YM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new ne);const r=new ne,o=new an,l=new an;function u(h){let _=0,g=0,p=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let y=0,T=0,I=0,E=0,v=0,U=0,O=0,L=0,N=0,M=0,V=0,R=0,B=0,F=0;h.sort(KM);for(let Y=0,ae=h.length;Y<ae;Y++){const X=h[Y],q=X.color,de=X.intensity,_e=X.distance;let Ee=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===Ur?Ee=X.shadow.map.texture:Ee=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)_+=q.r*de,g+=q.g*de,p+=q.b*de;else if(X.isLightProbe){for(let pe=0;pe<9;pe++)i.probe[pe].addScaledVector(X.sh.coefficients[pe],de);F++}else if(X.isSunLight){const pe=e.get(X);if(pe.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const me=X.shadow,Se=t.get(X);Se.shadowIntensity=me.intensity,Se.shadowBias=me.bias,Se.shadowNormalBias=me.normalBias,Se.shadowRadius=me.radius,Se.shadowMapSize.copy(me.mapSize).multiply(me.getFrameExtents()),i.sunShadow[T]=Se,i.sunShadowMap[T]=Ee;const je=me.getViewportCount();for(let He=0;He<je;He++)i.sunShadowMatrix[I+He]=me.getMatrix(He),i.sunShadowCascade[I+He]=me._cascadeData[He];I+=je,T++}i.sun[y]=pe,y++}else if(X.isDirectionalLight){const pe=e.get(X);if(pe.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const me=X.shadow,Se=t.get(X);Se.shadowIntensity=me.intensity,Se.shadowBias=me.bias,Se.shadowNormalBias=me.normalBias,Se.shadowRadius=me.radius,Se.shadowMapSize=me.mapSize,i.directionalShadow[E]=Se,i.directionalShadowMap[E]=Ee,i.directionalShadowMatrix[E]=X.shadow.matrix,N++}i.directional[E]=pe,E++}else if(X.isSpotLight){const pe=e.get(X);pe.position.setFromMatrixPosition(X.matrixWorld),pe.color.copy(q).multiplyScalar(de),pe.distance=_e,pe.coneCos=Math.cos(X.angle),pe.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),pe.decay=X.decay,i.spot[U]=pe;const me=X.shadow;if(X.map&&(i.spotLightMap[R]=X.map,R++,me.updateMatrices(X),X.castShadow&&B++),i.spotLightMatrix[U]=me.matrix,X.castShadow){const Se=t.get(X);Se.shadowIntensity=me.intensity,Se.shadowBias=me.bias,Se.shadowNormalBias=me.normalBias,Se.shadowRadius=me.radius,Se.shadowMapSize=me.mapSize,i.spotShadow[U]=Se,i.spotShadowMap[U]=Ee,V++}U++}else if(X.isRectAreaLight){const pe=e.get(X);pe.color.copy(q).multiplyScalar(de),pe.halfWidth.set(X.width*.5,0,0),pe.halfHeight.set(0,X.height*.5,0),i.rectArea[O]=pe,O++}else if(X.isPointLight){const pe=e.get(X);if(pe.color.copy(X.color).multiplyScalar(X.intensity),pe.distance=X.distance,pe.decay=X.decay,X.castShadow){const me=X.shadow,Se=t.get(X);Se.shadowIntensity=me.intensity,Se.shadowBias=me.bias,Se.shadowNormalBias=me.normalBias,Se.shadowRadius=me.radius,Se.shadowMapSize=me.mapSize,Se.shadowCameraNear=me.camera.near,Se.shadowCameraFar=me.camera.far,i.pointShadow[v]=Se,i.pointShadowMap[v]=Ee,i.pointShadowMatrix[v]=X.shadow.matrix,M++}i.point[v]=pe,v++}else if(X.isHemisphereLight){const pe=e.get(X);pe.skyColor.copy(X.color).multiplyScalar(de),pe.groundColor.copy(X.groundColor).multiplyScalar(de),i.hemi[L]=pe,L++}}O>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ve.LTC_FLOAT_1,i.rectAreaLTC2=Ve.LTC_FLOAT_2):(i.rectAreaLTC1=Ve.LTC_HALF_1,i.rectAreaLTC2=Ve.LTC_HALF_2)),i.ambient[0]=_,i.ambient[1]=g,i.ambient[2]=p;const W=i.hash;(W.sunLength!==y||W.directionalLength!==E||W.pointLength!==v||W.spotLength!==U||W.rectAreaLength!==O||W.hemiLength!==L||W.numSunShadows!==T||W.numDirectionalShadows!==N||W.numPointShadows!==M||W.numSpotShadows!==V||W.numSpotMaps!==R||W.numLightProbes!==F)&&(i.sun.length=y,i.directional.length=E,i.spot.length=U,i.rectArea.length=O,i.point.length=v,i.hemi.length=L,i.sunShadow.length=T,i.sunShadowMap.length=T,i.sunShadowMatrix.length=I,i.sunShadowCascade.length=I,i.directionalShadow.length=N,i.directionalShadowMap.length=N,i.directionalShadowMatrix.length=N,i.pointShadow.length=M,i.pointShadowMap.length=M,i.pointShadowMatrix.length=M,i.spotShadow.length=V,i.spotShadowMap.length=V,i.spotLightMatrix.length=V+R-B,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=F,W.sunLength=y,W.directionalLength=E,W.pointLength=v,W.spotLength=U,W.rectAreaLength=O,W.hemiLength=L,W.numSunShadows=T,W.numDirectionalShadows=N,W.numPointShadows=M,W.numSpotShadows=V,W.numSpotMaps=R,W.numLightProbes=F,i.version=jM++)}function f(h,_){let g=0,p=0,y=0,T=0,I=0,E=0;const v=_.matrixWorldInverse;for(let U=0,O=h.length;U<O;U++){const L=h[U];if(L.isSunLight){const N=i.sun[g];N.direction.setFromMatrixPosition(L.matrixWorld),N.direction.transformDirection(v),g++}else if(L.isDirectionalLight){const N=i.directional[p];N.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(v),p++}else if(L.isSpotLight){const N=i.spot[T];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(v),N.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(v),T++}else if(L.isRectAreaLight){const N=i.rectArea[I];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(v),l.identity(),o.copy(L.matrixWorld),o.premultiply(v),l.extractRotation(o),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),N.halfWidth.applyMatrix4(l),N.halfHeight.applyMatrix4(l),I++}else if(L.isPointLight){const N=i.point[y];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(v),y++}else if(L.isHemisphereLight){const N=i.hemi[E];N.direction.setFromMatrixPosition(L.matrixWorld),N.direction.transformDirection(v),E++}}}return{setup:u,setupView:f,state:i}}function Sd(n){const e=new ZM(n),t=[],i=[],r=[];function o(p){g.camera=p,t.length=0,i.length=0,r.length=0}function l(p){t.push(p)}function u(p){i.push(p)}function f(p){r.push(p)}function h(){e.setup(t)}function _(p){e.setupView(t,p)}const g={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:g,setupLights:h,setupLightsView:_,pushLight:l,pushShadow:u,pushLightProbeGrid:f}}function JM(n){let e=new WeakMap;function t(r,o=0){const l=e.get(r);let u;return l===void 0?(u=new Sd(n),e.set(r,[u])):o>=l.length?(u=new Sd(n),l.push(u)):u=l[o],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const QM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,tb=[new ne(1,0,0),new ne(-1,0,0),new ne(0,1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1)],nb=[new ne(0,-1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1),new ne(0,-1,0),new ne(0,-1,0)],Ed=new an,Xa=new ne,$l=new ne;function ib(n,e,t){let i=new yu;const r=new ht,o=new ht,l=new on,u=new cy,f=new uy,h={},_=t.maxTextureSize,g={[Lr]:Bn,[Bn]:Lr,[Vi]:Vi},p=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:QM,fragmentShader:eb}),y=p.clone();y.defines.HORIZONTAL_PASS=1;const T=new Un;T.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const I=new Ui(T,p),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ts;let v=this.type;this.render=function(M,V,R){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||M.length===0)return;this.type===q0&&(ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ts);const B=n.getRenderTarget(),F=n.getActiveCubeFace(),W=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending($i),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const ae=v!==this.type;ae&&V.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(q=>q.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,q=M.length;X<q;X++){const de=M[X],_e=de.shadow;if(_e===void 0){ut("WebGLShadowMap:",de,"has no shadow.");continue}if(_e.autoUpdate===!1&&_e.needsUpdate===!1)continue;r.copy(_e.mapSize);const Ee=_e.getFrameExtents();r.multiply(Ee),o.copy(_e.mapSize),(r.x>_||r.y>_)&&(r.x>_&&(o.x=Math.floor(_/Ee.x),r.x=o.x*Ee.x,_e.mapSize.x=o.x),r.y>_&&(o.y=Math.floor(_/Ee.y),r.y=o.y*Ee.y,_e.mapSize.y=o.y));const pe=n.state.buffers.depth.getReversed();if(_e.camera._reversedDepth=pe,_e.map===null||ae===!0){if(_e.map!==null&&(_e.map.depthTexture!==null&&(_e.map.depthTexture.dispose(),_e.map.depthTexture=null),_e.map.dispose()),this.type===Za){if(de.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}_e.map=new gi(r.x,r.y,{format:Ur,type:Ii,minFilter:Tn,magFilter:Tn,generateMipmaps:!1}),_e.map.texture.name=de.name+".shadowMap",_e.map.depthTexture=new ls(r.x,r.y,Ri),_e.map.depthTexture.name=de.name+".shadowMapDepth",_e.map.depthTexture.format=qi,_e.map.depthTexture.compareFunction=null,_e.map.depthTexture.minFilter=xn,_e.map.depthTexture.magFilter=xn}else de.isPointLight?(_e.map=new Ch(r.x),_e.map.depthTexture=new ty(r.x,Li)):(_e.map=new gi(r.x,r.y),_e.map.depthTexture=new ls(r.x,r.y,Li)),_e.map.depthTexture.name=de.name+".shadowMap",_e.map.depthTexture.format=qi,this.type===ts?(_e.map.depthTexture.compareFunction=pe?mu:pu,_e.map.depthTexture.minFilter=Tn,_e.map.depthTexture.magFilter=Tn):(_e.map.depthTexture.compareFunction=null,_e.map.depthTexture.minFilter=xn,_e.map.depthTexture.magFilter=xn);_e.camera.updateProjectionMatrix()}_e.map.isWebGLCubeRenderTarget!==!0&&(_e.map.width!==r.x||_e.map.height!==r.y)&&_e.map.setSize(r.x,r.y);const me=_e.map.isWebGLCubeRenderTarget?6:_e.getViewportCount();de.isPointLight!==!0&&_e.updateMatrices(de,R);for(let Se=0;Se<me;Se++){const je=_e.getCamera(Se);if(de.isPointLight){const He=_e.camera,ot=_e.matrix,rt=de.distance||He.far;rt!==He.far&&(He.far=rt,He.updateProjectionMatrix()),Xa.setFromMatrixPosition(de.matrixWorld),He.position.copy(Xa),$l.copy(He.position),$l.add(tb[Se]),He.up.copy(nb[Se]),He.lookAt($l),He.updateMatrixWorld(),ot.makeTranslation(-Xa.x,-Xa.y,-Xa.z),Ed.multiplyMatrices(He.projectionMatrix,He.matrixWorldInverse),_e._frustum.setFromProjectionMatrix(Ed,He.coordinateSystem,He.reversedDepth)}if(_e.map.isWebGLCubeRenderTarget)n.setRenderTarget(_e.map,Se),n.clear();else{Se===0&&(n.setRenderTarget(_e.map),n.clear());const He=_e.getViewport(Se);l.set(o.x*He.x,o.y*He.y,o.x*He.z,o.y*He.w),Y.viewport(l)}i=_e.getFrustum(Se),L(V,R,je,de,this.type)}_e.isPointLightShadow!==!0&&this.type===Za&&U(_e,R),_e.needsUpdate=!1}v=this.type,E.needsUpdate=!1,n.setRenderTarget(B,F,W)};function U(M,V){const R=e.update(I);p.defines.VSM_SAMPLES!==M.blurSamples&&(p.defines.VSM_SAMPLES=M.blurSamples,y.defines.VSM_SAMPLES=M.blurSamples,p.needsUpdate=!0,y.needsUpdate=!0),M.mapPass===null?M.mapPass=new gi(r.x,r.y,{format:Ur,type:Ii}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),p.uniforms.shadow_pass.value=M.map.depthTexture,p.uniforms.resolution.value.set(M.map.width,M.map.height),p.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(V,null,R,p,I,null),y.uniforms.shadow_pass.value=M.mapPass.texture,y.uniforms.resolution.value.set(M.map.width,M.map.height),y.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(V,null,R,y,I,null)}function O(M,V,R,B){let F=null;const W=R.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(W!==void 0)F=W;else if(F=R.isPointLight===!0?f:u,n.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0||V.alphaToCoverage===!0){const Y=F.uuid,ae=V.uuid;let X=h[Y];X===void 0&&(X={},h[Y]=X);let q=X[ae];q===void 0&&(q=F.clone(),X[ae]=q,V.addEventListener("dispose",N)),F=q}if(F.visible=V.visible,F.wireframe=V.wireframe,B===Za?F.side=V.shadowSide!==null?V.shadowSide:V.side:F.side=V.shadowSide!==null?V.shadowSide:g[V.side],F.alphaMap=V.alphaMap,F.alphaTest=V.alphaToCoverage===!0?.5:V.alphaTest,F.map=V.map,F.clipShadows=V.clipShadows,F.clippingPlanes=V.clippingPlanes,F.clipIntersection=V.clipIntersection,F.displacementMap=V.displacementMap,F.displacementScale=V.displacementScale,F.displacementBias=V.displacementBias,F.wireframeLinewidth=V.wireframeLinewidth,F.linewidth=V.linewidth,R.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const Y=n.properties.get(F);Y.light=R}return F}function L(M,V,R,B,F){if(M.visible===!1)return;if(M.layers.test(V.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&F===Za)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,M.matrixWorld);const ae=e.update(M),X=M.material;if(Array.isArray(X)){const q=ae.groups;for(let de=0,_e=q.length;de<_e;de++){const Ee=q[de],pe=X[Ee.materialIndex];if(pe&&pe.visible){const me=O(M,pe,B,F);M.onBeforeShadow(n,M,V,R,ae,me,Ee),n.renderBufferDirect(R,null,ae,me,M,Ee),M.onAfterShadow(n,M,V,R,ae,me,Ee)}}}else if(X.visible){const q=O(M,X,B,F);M.onBeforeShadow(n,M,V,R,ae,q,null),n.renderBufferDirect(R,null,ae,q,M,null),M.onAfterShadow(n,M,V,R,ae,q,null)}}const Y=M.children;for(let ae=0,X=Y.length;ae<X;ae++)L(Y[ae],V,R,B,F)}function N(M){M.target.removeEventListener("dispose",N);for(const R in h){const B=h[R],F=M.target.uuid;F in B&&(B[F].dispose(),delete B[F])}}}function rb(n,e){function t(){let j=!1;const ie=new on;let $=null;const Le=new on(0,0,0,0);return{setMask:function(ze){$!==ze&&!j&&(n.colorMask(ze,ze,ze,ze),$=ze)},setLocked:function(ze){j=ze},setClear:function(ze,Te,qe,Ke,Tt){Tt===!0&&(ze*=Ke,Te*=Ke,qe*=Ke),ie.set(ze,Te,qe,Ke),Le.equals(ie)===!1&&(n.clearColor(ze,Te,qe,Ke),Le.copy(ie))},reset:function(){j=!1,$=null,Le.set(-1,0,0,0)}}}function i(){let j=!1,ie=!1,$=null,Le=null,ze=null;return{setReversed:function(Te){if(ie!==Te){const qe=e.get("EXT_clip_control");Te?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),ie=Te;const Ke=ze;ze=null,this.setClear(Ke)}},getReversed:function(){return ie},setTest:function(Te){Te?te(n.DEPTH_TEST):ge(n.DEPTH_TEST)},setMask:function(Te){$!==Te&&!j&&(n.depthMask(Te),$=Te)},setFunc:function(Te){if(ie&&(Te=Rv[Te]),Le!==Te){switch(Te){case fc:n.depthFunc(n.NEVER);break;case dc:n.depthFunc(n.ALWAYS);break;case hc:n.depthFunc(n.LESS);break;case rs:n.depthFunc(n.LEQUAL);break;case pc:n.depthFunc(n.EQUAL);break;case mc:n.depthFunc(n.GEQUAL);break;case _c:n.depthFunc(n.GREATER);break;case gc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Le=Te}},setLocked:function(Te){j=Te},setClear:function(Te){ze!==Te&&(ze=Te,ie&&(Te=1-Te),n.clearDepth(Te))},reset:function(){j=!1,$=null,Le=null,ze=null,ie=!1}}}function r(){let j=!1,ie=null,$=null,Le=null,ze=null,Te=null,qe=null,Ke=null,Tt=null;return{setTest:function(Pt){j||(Pt?te(n.STENCIL_TEST):ge(n.STENCIL_TEST))},setMask:function(Pt){ie!==Pt&&!j&&(n.stencilMask(Pt),ie=Pt)},setFunc:function(Pt,Sn,An){($!==Pt||Le!==Sn||ze!==An)&&(n.stencilFunc(Pt,Sn,An),$=Pt,Le=Sn,ze=An)},setOp:function(Pt,Sn,An){(Te!==Pt||qe!==Sn||Ke!==An)&&(n.stencilOp(Pt,Sn,An),Te=Pt,qe=Sn,Ke=An)},setLocked:function(Pt){j=Pt},setClear:function(Pt){Tt!==Pt&&(n.clearStencil(Pt),Tt=Pt)},reset:function(){j=!1,ie=null,$=null,Le=null,ze=null,Te=null,qe=null,Ke=null,Tt=null}}}const o=new t,l=new i,u=new r,f=new WeakMap,h=new WeakMap;let _={},g={},p={},y=new WeakMap,T=[],I=null,E=!1,v=null,U=null,O=null,L=null,N=null,M=null,V=null,R=new It(0,0,0),B=0,F=!1,W=null,Y=null,ae=null,X=null,q=null;const de=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let _e=!1,Ee=0;const pe=n.getParameter(n.VERSION);pe.indexOf("WebGL")!==-1?(Ee=parseFloat(/^WebGL (\d)/.exec(pe)[1]),_e=Ee>=1):pe.indexOf("OpenGL ES")!==-1&&(Ee=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),_e=Ee>=2);let me=null,Se={};const je=n.getParameter(n.SCISSOR_BOX),He=n.getParameter(n.VIEWPORT),ot=new on().fromArray(je),rt=new on().fromArray(He);function tt(j,ie,$,Le){const ze=new Uint8Array(4),Te=n.createTexture();n.bindTexture(j,Te),n.texParameteri(j,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(j,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<$;qe++)j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?n.texImage3D(ie,0,n.RGBA,1,1,Le,0,n.RGBA,n.UNSIGNED_BYTE,ze):n.texImage2D(ie+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ze);return Te}const ue={};ue[n.TEXTURE_2D]=tt(n.TEXTURE_2D,n.TEXTURE_2D,1),ue[n.TEXTURE_CUBE_MAP]=tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[n.TEXTURE_2D_ARRAY]=tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ue[n.TEXTURE_3D]=tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),te(n.DEPTH_TEST),l.setFunc(rs),pt(!1),$t(xf),te(n.CULL_FACE),vt($i);function te(j){_[j]!==!0&&(n.enable(j),_[j]=!0)}function ge(j){_[j]!==!1&&(n.disable(j),_[j]=!1)}function he(j,ie){return p[j]!==ie?(n.bindFramebuffer(j,ie),p[j]=ie,j===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ie),j===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ae(j,ie){let $=T,Le=!1;if(j){$=y.get(ie),$===void 0&&($=[],y.set(ie,$));const ze=j.textures;if($.length!==ze.length||$[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,qe=ze.length;Te<qe;Te++)$[Te]=n.COLOR_ATTACHMENT0+Te;$.length=ze.length,Le=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,Le=!0);Le&&n.drawBuffers($)}function Ge(j){return I!==j?(n.useProgram(j),I=j,!0):!1}const Ct={[ma]:n.FUNC_ADD,[j0]:n.FUNC_SUBTRACT,[K0]:n.FUNC_REVERSE_SUBTRACT};Ct[Z0]=n.MIN,Ct[J0]=n.MAX;const at={[Q0]:n.ZERO,[ev]:n.ONE,[tv]:n.SRC_COLOR,[Zd]:n.SRC_ALPHA,[ov]:n.SRC_ALPHA_SATURATE,[av]:n.DST_COLOR,[iv]:n.DST_ALPHA,[nv]:n.ONE_MINUS_SRC_COLOR,[Jd]:n.ONE_MINUS_SRC_ALPHA,[sv]:n.ONE_MINUS_DST_COLOR,[rv]:n.ONE_MINUS_DST_ALPHA,[lv]:n.CONSTANT_COLOR,[cv]:n.ONE_MINUS_CONSTANT_COLOR,[uv]:n.CONSTANT_ALPHA,[fv]:n.ONE_MINUS_CONSTANT_ALPHA};function vt(j,ie,$,Le,ze,Te,qe,Ke,Tt,Pt){if(j===$i){E===!0&&(ge(n.BLEND),E=!1);return}if(E===!1&&(te(n.BLEND),E=!0),j!==Y0){if(j!==v||Pt!==F){if((U!==ma||N!==ma)&&(n.blendEquation(n.FUNC_ADD),U=ma,N=ma),Pt)switch(j){case ns:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sf:n.blendFunc(n.ONE,n.ONE);break;case Ef:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Gt("WebGLState: Invalid blending: ",j);break}else switch(j){case ns:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sf:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ef:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mf:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",j);break}O=null,L=null,M=null,V=null,R.set(0,0,0),B=0,v=j,F=Pt}return}ze=ze||ie,Te=Te||$,qe=qe||Le,(ie!==U||ze!==N)&&(n.blendEquationSeparate(Ct[ie],Ct[ze]),U=ie,N=ze),($!==O||Le!==L||Te!==M||qe!==V)&&(n.blendFuncSeparate(at[$],at[Le],at[Te],at[qe]),O=$,L=Le,M=Te,V=qe),(Ke.equals(R)===!1||Tt!==B)&&(n.blendColor(Ke.r,Ke.g,Ke.b,Tt),R.copy(Ke),B=Tt),v=j,F=!1}function Wt(j,ie){j.side===Vi?ge(n.CULL_FACE):te(n.CULL_FACE);let $=j.side===Bn;ie&&($=!$),pt($),j.blending===ns&&j.transparent===!1?vt($i):vt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),l.setFunc(j.depthFunc),l.setTest(j.depthTest),l.setMask(j.depthWrite),o.setMask(j.colorWrite);const Le=j.stencilWrite;u.setTest(Le),Le&&(u.setMask(j.stencilWriteMask),u.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),u.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),sn(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function pt(j){W!==j&&(j?n.frontFace(n.CW):n.frontFace(n.CCW),W=j)}function $t(j){j!==$0?(te(n.CULL_FACE),j!==Y&&(j===xf?n.cullFace(n.BACK):j===X0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ge(n.CULL_FACE),Y=j}function Xt(j){j!==ae&&(_e&&n.lineWidth(j),ae=j)}function sn(j,ie,$){j?(te(n.POLYGON_OFFSET_FILL),(X!==ie||q!==$)&&(X=ie,q=$,l.getReversed()&&(ie=-ie),n.polygonOffset(ie,$))):ge(n.POLYGON_OFFSET_FILL)}function Bt(j){j?te(n.SCISSOR_TEST):ge(n.SCISSOR_TEST)}function Ut(j){j===void 0&&(j=n.TEXTURE0+de-1),me!==j&&(n.activeTexture(j),me=j)}function Z(j,ie,$){$===void 0&&(me===null?$=n.TEXTURE0+de-1:$=me);let Le=Se[$];Le===void 0&&(Le={type:void 0,texture:void 0},Se[$]=Le),(Le.type!==j||Le.texture!==ie)&&(me!==$&&(n.activeTexture($),me=$),n.bindTexture(j,ie||ue[j]),Le.type=j,Le.texture=ie)}function et(){const j=Se[me];j!==void 0&&j.type!==void 0&&(n.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function lt(){try{n.compressedTexImage2D(...arguments)}catch(j){Gt("WebGLState:",j)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(j){Gt("WebGLState:",j)}}function b(){try{n.texSubImage2D(...arguments)}catch(j){Gt("WebGLState:",j)}}function re(){try{n.texSubImage3D(...arguments)}catch(j){Gt("WebGLState:",j)}}function ce(){try{n.compressedTexSubImage2D(...arguments)}catch(j){Gt("WebGLState:",j)}}function ve(){try{n.compressedTexSubImage3D(...arguments)}catch(j){Gt("WebGLState:",j)}}function De(){try{n.texStorage2D(...arguments)}catch(j){Gt("WebGLState:",j)}}function Ue(){try{n.texStorage3D(...arguments)}catch(j){Gt("WebGLState:",j)}}function ye(){try{n.texImage2D(...arguments)}catch(j){Gt("WebGLState:",j)}}function be(){try{n.texImage3D(...arguments)}catch(j){Gt("WebGLState:",j)}}function Fe(j){return g[j]!==void 0?g[j]:n.getParameter(j)}function Je(j,ie){g[j]!==ie&&(n.pixelStorei(j,ie),g[j]=ie)}function Be(j){ot.equals(j)===!1&&(n.scissor(j.x,j.y,j.z,j.w),ot.copy(j))}function Ne(j){rt.equals(j)===!1&&(n.viewport(j.x,j.y,j.z,j.w),rt.copy(j))}function Qe(j,ie){let $=h.get(ie);$===void 0&&($=new WeakMap,h.set(ie,$));let Le=$.get(j);Le===void 0&&(Le=n.getUniformBlockIndex(ie,j.name),$.set(j,Le))}function it(j,ie){const Le=h.get(ie).get(j);f.get(ie)!==Le&&(n.uniformBlockBinding(ie,Le,j.__bindingPointIndex),f.set(ie,Le))}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),l.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),_={},g={},me=null,Se={},p={},y=new WeakMap,T=[],I=null,E=!1,v=null,U=null,O=null,L=null,N=null,M=null,V=null,R=new It(0,0,0),B=0,F=!1,W=null,Y=null,ae=null,X=null,q=null,ot.set(0,0,n.canvas.width,n.canvas.height),rt.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:te,disable:ge,bindFramebuffer:he,drawBuffers:Ae,useProgram:Ge,setBlending:vt,setMaterial:Wt,setFlipSided:pt,setCullFace:$t,setLineWidth:Xt,setPolygonOffset:sn,setScissorTest:Bt,activeTexture:Ut,bindTexture:Z,unbindTexture:et,compressedTexImage2D:lt,compressedTexImage3D:k,texImage2D:ye,texImage3D:be,pixelStorei:Je,getParameter:Fe,updateUBOMapping:Qe,uniformBlockBinding:it,texStorage2D:De,texStorage3D:Ue,texSubImage2D:b,texSubImage3D:re,compressedTexSubImage2D:ce,compressedTexSubImage3D:ve,scissor:Be,viewport:Ne,reset:ct}}function ab(n,e,t,i,r,o,l){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ht,_=new WeakMap,g=new Set;let p;const y=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function I(k,b){return T?new OffscreenCanvas(k,b):To("canvas")}function E(k,b,re){let ce=1;const ve=lt(k);if((ve.width>re||ve.height>re)&&(ce=re/Math.max(ve.width,ve.height)),ce<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const De=Math.floor(ce*ve.width),Ue=Math.floor(ce*ve.height);p===void 0&&(p=I(De,Ue));const ye=b?I(De,Ue):p;return ye.width=De,ye.height=Ue,ye.getContext("2d").drawImage(k,0,0,De,Ue),ut("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+De+"x"+Ue+")."),ye}else return"data"in k&&ut("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),k;return k}function v(k){return k.generateMipmaps}function U(k){n.generateMipmap(k)}function O(k){return k.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?n.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function L(k,b,re,ce,ve,De=!1){if(k!==null){if(n[k]!==void 0)return n[k];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let Ue;ce&&(Ue=e.get("EXT_texture_norm16"),Ue||ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ye=b;if(b===n.RED&&(re===n.FLOAT&&(ye=n.R32F),re===n.HALF_FLOAT&&(ye=n.R16F),re===n.UNSIGNED_BYTE&&(ye=n.R8),re===n.UNSIGNED_SHORT&&Ue&&(ye=Ue.R16_EXT),re===n.SHORT&&Ue&&(ye=Ue.R16_SNORM_EXT)),b===n.RED_INTEGER&&(re===n.UNSIGNED_BYTE&&(ye=n.R8UI),re===n.UNSIGNED_SHORT&&(ye=n.R16UI),re===n.UNSIGNED_INT&&(ye=n.R32UI),re===n.BYTE&&(ye=n.R8I),re===n.SHORT&&(ye=n.R16I),re===n.INT&&(ye=n.R32I)),b===n.RG&&(re===n.FLOAT&&(ye=n.RG32F),re===n.HALF_FLOAT&&(ye=n.RG16F),re===n.UNSIGNED_BYTE&&(ye=n.RG8),re===n.UNSIGNED_SHORT&&Ue&&(ye=Ue.RG16_EXT),re===n.SHORT&&Ue&&(ye=Ue.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(re===n.UNSIGNED_BYTE&&(ye=n.RG8UI),re===n.UNSIGNED_SHORT&&(ye=n.RG16UI),re===n.UNSIGNED_INT&&(ye=n.RG32UI),re===n.BYTE&&(ye=n.RG8I),re===n.SHORT&&(ye=n.RG16I),re===n.INT&&(ye=n.RG32I)),b===n.RGB_INTEGER&&(re===n.UNSIGNED_BYTE&&(ye=n.RGB8UI),re===n.UNSIGNED_SHORT&&(ye=n.RGB16UI),re===n.UNSIGNED_INT&&(ye=n.RGB32UI),re===n.BYTE&&(ye=n.RGB8I),re===n.SHORT&&(ye=n.RGB16I),re===n.INT&&(ye=n.RGB32I)),b===n.RGBA_INTEGER&&(re===n.UNSIGNED_BYTE&&(ye=n.RGBA8UI),re===n.UNSIGNED_SHORT&&(ye=n.RGBA16UI),re===n.UNSIGNED_INT&&(ye=n.RGBA32UI),re===n.BYTE&&(ye=n.RGBA8I),re===n.SHORT&&(ye=n.RGBA16I),re===n.INT&&(ye=n.RGBA32I)),b===n.RGB&&(re===n.UNSIGNED_SHORT&&Ue&&(ye=Ue.RGB16_EXT),re===n.SHORT&&Ue&&(ye=Ue.RGB16_SNORM_EXT),re===n.UNSIGNED_INT_5_9_9_9_REV&&(ye=n.RGB9_E5),re===n.UNSIGNED_INT_10F_11F_11F_REV&&(ye=n.R11F_G11F_B10F)),b===n.RGBA){const be=De?wo:Nt.getTransfer(ve);re===n.FLOAT&&(ye=n.RGBA32F),re===n.HALF_FLOAT&&(ye=n.RGBA16F),re===n.UNSIGNED_BYTE&&(ye=be===Yt?n.SRGB8_ALPHA8:n.RGBA8),re===n.UNSIGNED_SHORT&&Ue&&(ye=Ue.RGBA16_EXT),re===n.SHORT&&Ue&&(ye=Ue.RGBA16_SNORM_EXT),re===n.UNSIGNED_SHORT_4_4_4_4&&(ye=n.RGBA4),re===n.UNSIGNED_SHORT_5_5_5_1&&(ye=n.RGB5_A1)}return(ye===n.R16F||ye===n.R32F||ye===n.RG16F||ye===n.RG32F||ye===n.RGBA16F||ye===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function N(k,b){let re;return k?b===null||b===Li||b===ss?re=n.DEPTH24_STENCIL8:b===Ri?re=n.DEPTH32F_STENCIL8:b===as&&(re=n.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Li||b===ss?re=n.DEPTH_COMPONENT24:b===Ri?re=n.DEPTH_COMPONENT32F:b===as&&(re=n.DEPTH_COMPONENT16),re}function M(k,b){return v(k)===!0||k.isFramebufferTexture&&k.minFilter!==xn&&k.minFilter!==Tn?Math.log2(Math.max(b.width,b.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?b.mipmaps.length:1}function V(k){const b=k.target;b.removeEventListener("dispose",V),B(b),b.isVideoTexture&&_.delete(b),b.isHTMLTexture&&g.delete(b)}function R(k){const b=k.target;b.removeEventListener("dispose",R),W(b)}function B(k){const b=i.get(k);if(b.__webglInit===void 0)return;const re=k.source,ce=y.get(re);if(ce){const ve=ce[b.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&F(k),Object.keys(ce).length===0&&y.delete(re)}i.remove(k)}function F(k){const b=i.get(k);n.deleteTexture(b.__webglTexture);const re=k.source,ce=y.get(re);delete ce[b.__cacheKey],l.memory.textures--}function W(k){const b=i.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),i.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(b.__webglFramebuffer[ce]))for(let ve=0;ve<b.__webglFramebuffer[ce].length;ve++)n.deleteFramebuffer(b.__webglFramebuffer[ce][ve]);else n.deleteFramebuffer(b.__webglFramebuffer[ce]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[ce])}else{if(Array.isArray(b.__webglFramebuffer))for(let ce=0;ce<b.__webglFramebuffer.length;ce++)n.deleteFramebuffer(b.__webglFramebuffer[ce]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ce=0;ce<b.__webglColorRenderbuffer.length;ce++)b.__webglColorRenderbuffer[ce]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[ce]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const re=k.textures;for(let ce=0,ve=re.length;ce<ve;ce++){const De=i.get(re[ce]);De.__webglTexture&&(n.deleteTexture(De.__webglTexture),l.memory.textures--),i.remove(re[ce])}i.remove(k)}let Y=0;function ae(){Y=0}function X(){return Y}function q(k){Y=k}function de(){const k=Y;return k>=r.maxTextures&&ut("WebGLTextures: Trying to use "+(k+1)+" texture units while this GPU supports only "+r.maxTextures),Y+=1,k}function _e(k){const b=[];return b.push(k.wrapS),b.push(k.wrapT),b.push(k.wrapR||0),b.push(k.magFilter),b.push(k.minFilter),b.push(k.anisotropy),b.push(k.internalFormat),b.push(k.format),b.push(k.type),b.push(k.generateMipmaps),b.push(k.premultiplyAlpha),b.push(k.flipY),b.push(k.unpackAlignment),b.push(k.colorSpace),b.join()}function Ee(k,b){const re=i.get(k);if(k.isVideoTexture&&Z(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&re.__version!==k.version){const ce=k.image;if(ce===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(re,k,b);return}}else k.isExternalTexture&&(re.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,re.__webglTexture,n.TEXTURE0+b)}function pe(k,b){const re=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&re.__version!==k.version){ge(re,k,b);return}else k.isExternalTexture&&(re.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,re.__webglTexture,n.TEXTURE0+b)}function me(k,b){const re=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&re.__version!==k.version){ge(re,k,b);return}t.bindTexture(n.TEXTURE_3D,re.__webglTexture,n.TEXTURE0+b)}function Se(k,b){const re=i.get(k);if(k.isCubeDepthTexture!==!0&&k.version>0&&re.__version!==k.version){he(re,k,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture,n.TEXTURE0+b)}const je={[vc]:n.REPEAT,[Wi]:n.CLAMP_TO_EDGE,[yc]:n.MIRRORED_REPEAT},He={[xn]:n.NEAREST,[pv]:n.NEAREST_MIPMAP_NEAREST,[Is]:n.NEAREST_MIPMAP_LINEAR,[Tn]:n.LINEAR,[pl]:n.LINEAR_MIPMAP_NEAREST,[Pr]:n.LINEAR_MIPMAP_LINEAR},ot={[vv]:n.NEVER,[Mv]:n.ALWAYS,[yv]:n.LESS,[pu]:n.LEQUAL,[xv]:n.EQUAL,[mu]:n.GEQUAL,[Sv]:n.GREATER,[Ev]:n.NOTEQUAL};function rt(k,b){if(b.type===Ri&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Tn||b.magFilter===pl||b.magFilter===Is||b.magFilter===Pr||b.minFilter===Tn||b.minFilter===pl||b.minFilter===Is||b.minFilter===Pr)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(k,n.TEXTURE_WRAP_S,je[b.wrapS]),n.texParameteri(k,n.TEXTURE_WRAP_T,je[b.wrapT]),(k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY)&&n.texParameteri(k,n.TEXTURE_WRAP_R,je[b.wrapR]),n.texParameteri(k,n.TEXTURE_MAG_FILTER,He[b.magFilter]),n.texParameteri(k,n.TEXTURE_MIN_FILTER,He[b.minFilter]),b.compareFunction&&(n.texParameteri(k,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(k,n.TEXTURE_COMPARE_FUNC,ot[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===xn||b.minFilter!==Is&&b.minFilter!==Pr||b.type===Ri&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");n.texParameterf(k,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function tt(k,b){let re=!1;k.__webglInit===void 0&&(k.__webglInit=!0,b.addEventListener("dispose",V));const ce=b.source;let ve=y.get(ce);ve===void 0&&(ve={},y.set(ce,ve));const De=_e(b);if(De!==k.__cacheKey){ve[De]===void 0&&(ve[De]={texture:n.createTexture(),usedTimes:0},l.memory.textures++,re=!0),ve[De].usedTimes++;const Ue=ve[k.__cacheKey];Ue!==void 0&&(ve[k.__cacheKey].usedTimes--,Ue.usedTimes===0&&F(b)),k.__cacheKey=De,k.__webglTexture=ve[De].texture}return re}function ue(k,b,re){return Math.floor(Math.floor(k/re)/b)}function te(k,b,re,ce){const De=k.updateRanges;if(De.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,re,ce,b.data);else{De.sort((Je,Be)=>Je.start-Be.start);let Ue=0;for(let Je=1;Je<De.length;Je++){const Be=De[Ue],Ne=De[Je],Qe=Be.start+Be.count,it=ue(Ne.start,b.width,4),ct=ue(Be.start,b.width,4);Ne.start<=Qe+1&&it===ct&&ue(Ne.start+Ne.count-1,b.width,4)===it?Be.count=Math.max(Be.count,Ne.start+Ne.count-Be.start):(++Ue,De[Ue]=Ne)}De.length=Ue+1;const ye=t.getParameter(n.UNPACK_ROW_LENGTH),be=t.getParameter(n.UNPACK_SKIP_PIXELS),Fe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let Je=0,Be=De.length;Je<Be;Je++){const Ne=De[Je],Qe=Math.floor(Ne.start/4),it=Math.ceil(Ne.count/4),ct=Qe%b.width,j=Math.floor(Qe/b.width),ie=it,$=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ct),t.pixelStorei(n.UNPACK_SKIP_ROWS,j),t.texSubImage2D(n.TEXTURE_2D,0,ct,j,ie,$,re,ce,b.data)}k.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ye),t.pixelStorei(n.UNPACK_SKIP_PIXELS,be),t.pixelStorei(n.UNPACK_SKIP_ROWS,Fe)}}function ge(k,b,re){let ce=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ce=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ce=n.TEXTURE_3D);const ve=tt(k,b),De=b.source;t.bindTexture(ce,k.__webglTexture,n.TEXTURE0+re);const Ue=i.get(De);if(De.version!==Ue.__version||ve===!0){if(t.activeTexture(n.TEXTURE0+re),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const $=Nt.getPrimaries(Nt.workingColorSpace),Le=b.colorSpace===ar?null:Nt.getPrimaries(b.colorSpace),ze=b.colorSpace===ar||$===Le?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let be=E(b.image,!1,r.maxTextureSize);be=et(b,be);const Fe=o.convert(b.format,b.colorSpace),Je=o.convert(b.type);let Be=L(b.internalFormat,Fe,Je,b.normalized,b.colorSpace,b.isVideoTexture);rt(ce,b);let Ne;const Qe=b.mipmaps,it=b.isVideoTexture!==!0,ct=Ue.__version===void 0||ve===!0,j=De.dataReady,ie=M(b,be);if(b.isDepthTexture)Be=N(b.format===Dr,b.type),ct&&(it?t.texStorage2D(n.TEXTURE_2D,1,Be,be.width,be.height):t.texImage2D(n.TEXTURE_2D,0,Be,be.width,be.height,0,Fe,Je,null));else if(b.isDataTexture)if(Qe.length>0){it&&ct&&t.texStorage2D(n.TEXTURE_2D,ie,Be,Qe[0].width,Qe[0].height);for(let $=0,Le=Qe.length;$<Le;$++)Ne=Qe[$],it?j&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,Ne.width,Ne.height,Fe,Je,Ne.data):t.texImage2D(n.TEXTURE_2D,$,Be,Ne.width,Ne.height,0,Fe,Je,Ne.data);b.generateMipmaps=!1}else it?(ct&&t.texStorage2D(n.TEXTURE_2D,ie,Be,be.width,be.height),j&&te(b,be,Fe,Je)):t.texImage2D(n.TEXTURE_2D,0,Be,be.width,be.height,0,Fe,Je,be.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){it&&ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ie,Be,Qe[0].width,Qe[0].height,be.depth);for(let $=0,Le=Qe.length;$<Le;$++)if(Ne=Qe[$],b.format!==_i)if(Fe!==null)if(it){if(j)if(b.layerUpdates.size>0){const ze=ed(Ne.width,Ne.height,b.format,b.type);for(const Te of b.layerUpdates){const qe=Ne.data.subarray(Te*ze/Ne.data.BYTES_PER_ELEMENT,(Te+1)*ze/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,Te,Ne.width,Ne.height,1,Fe,qe)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Ne.width,Ne.height,be.depth,Fe,Ne.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Be,Ne.width,Ne.height,be.depth,0,Ne.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?j&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Ne.width,Ne.height,be.depth,Fe,Je,Ne.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,Be,Ne.width,Ne.height,be.depth,0,Fe,Je,Ne.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{it&&ct&&t.texStorage2D(n.TEXTURE_2D,ie,Be,Qe[0].width,Qe[0].height);for(let $=0,Le=Qe.length;$<Le;$++)Ne=Qe[$],b.format!==_i?Fe!==null?it?j&&t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,Ne.width,Ne.height,Fe,Ne.data):t.compressedTexImage2D(n.TEXTURE_2D,$,Be,Ne.width,Ne.height,0,Ne.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?j&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,Ne.width,Ne.height,Fe,Je,Ne.data):t.texImage2D(n.TEXTURE_2D,$,Be,Ne.width,Ne.height,0,Fe,Je,Ne.data)}else if(b.isDataArrayTexture)if(it){if(ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ie,Be,be.width,be.height,be.depth),j)if(b.layerUpdates.size>0){const $=ed(be.width,be.height,b.format,b.type);for(const Le of b.layerUpdates){const ze=be.data.subarray(Le*$/be.data.BYTES_PER_ELEMENT,(Le+1)*$/be.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Le,be.width,be.height,1,Fe,Je,ze)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Fe,Je,be.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,be.width,be.height,be.depth,0,Fe,Je,be.data);else if(b.isData3DTexture)it?(ct&&t.texStorage3D(n.TEXTURE_3D,ie,Be,be.width,be.height,be.depth),j&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Fe,Je,be.data)):t.texImage3D(n.TEXTURE_3D,0,Be,be.width,be.height,be.depth,0,Fe,Je,be.data);else if(b.isFramebufferTexture){if(ct)if(it)t.texStorage2D(n.TEXTURE_2D,ie,Be,be.width,be.height);else{let $=be.width,Le=be.height;for(let ze=0;ze<ie;ze++)t.texImage2D(n.TEXTURE_2D,ze,Be,$,Le,0,Fe,Je,null),$>>=1,Le>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){const $=n.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),be.parentNode!==$){$.appendChild(be),g.add(b),$.onpaint=Le=>{const ze=Le.changedElements;for(const Te of g)ze.includes(Te.image)&&(Te.needsUpdate=!0)},$.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,be);else{const ze=n.RGBA,Te=n.RGBA,qe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ze,Te,qe,be)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Qe.length>0){if(it&&ct){const $=lt(Qe[0]);t.texStorage2D(n.TEXTURE_2D,ie,Be,$.width,$.height)}for(let $=0,Le=Qe.length;$<Le;$++)Ne=Qe[$],it?j&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,Fe,Je,Ne):t.texImage2D(n.TEXTURE_2D,$,Be,Fe,Je,Ne);b.generateMipmaps=!1}else if(it){if(ct){const $=lt(be);t.texStorage2D(n.TEXTURE_2D,ie,Be,$.width,$.height)}j&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Fe,Je,be)}else t.texImage2D(n.TEXTURE_2D,0,Be,Fe,Je,be);v(b)&&U(ce),Ue.__version=De.version,b.onUpdate&&b.onUpdate(b)}k.__version=b.version}function he(k,b,re){if(b.image.length!==6)return;const ce=tt(k,b),ve=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+re);const De=i.get(ve);if(ve.version!==De.__version||ce===!0){t.activeTexture(n.TEXTURE0+re);const Ue=Nt.getPrimaries(Nt.workingColorSpace),ye=b.colorSpace===ar?null:Nt.getPrimaries(b.colorSpace),be=b.colorSpace===ar||Ue===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Fe=b.isCompressedTexture||b.image[0].isCompressedTexture,Je=b.image[0]&&b.image[0].isDataTexture,Be=[];for(let Te=0;Te<6;Te++)!Fe&&!Je?Be[Te]=E(b.image[Te],!0,r.maxCubemapSize):Be[Te]=Je?b.image[Te].image:b.image[Te],Be[Te]=et(b,Be[Te]);const Ne=Be[0],Qe=o.convert(b.format,b.colorSpace),it=o.convert(b.type),ct=L(b.internalFormat,Qe,it,b.normalized,b.colorSpace),j=b.isVideoTexture!==!0,ie=De.__version===void 0||ce===!0,$=ve.dataReady;let Le=M(b,Ne);rt(n.TEXTURE_CUBE_MAP,b);let ze;if(Fe){j&&ie&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,ct,Ne.width,Ne.height);for(let Te=0;Te<6;Te++){ze=Be[Te].mipmaps;for(let qe=0;qe<ze.length;qe++){const Ke=ze[qe];b.format!==_i?Qe!==null?j?$&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,qe,0,0,Ke.width,Ke.height,Qe,Ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,qe,ct,Ke.width,Ke.height,0,Ke.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,qe,0,0,Ke.width,Ke.height,Qe,it,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,qe,ct,Ke.width,Ke.height,0,Qe,it,Ke.data)}}}else{if(ze=b.mipmaps,j&&ie){ze.length>0&&Le++;const Te=lt(Be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,ct,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(Je){j?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Be[Te].width,Be[Te].height,Qe,it,Be[Te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ct,Be[Te].width,Be[Te].height,0,Qe,it,Be[Te].data);for(let qe=0;qe<ze.length;qe++){const Tt=ze[qe].image[Te].image;j?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,qe+1,0,0,Tt.width,Tt.height,Qe,it,Tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,qe+1,ct,Tt.width,Tt.height,0,Qe,it,Tt.data)}}else{j?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Qe,it,Be[Te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ct,Qe,it,Be[Te]);for(let qe=0;qe<ze.length;qe++){const Ke=ze[qe];j?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,qe+1,0,0,Qe,it,Ke.image[Te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,qe+1,ct,Qe,it,Ke.image[Te])}}}v(b)&&U(n.TEXTURE_CUBE_MAP),De.__version=ve.version,b.onUpdate&&b.onUpdate(b)}k.__version=b.version}function Ae(k,b,re,ce,ve,De){const Ue=o.convert(re.format,re.colorSpace),ye=o.convert(re.type),be=L(re.internalFormat,Ue,ye,re.normalized,re.colorSpace),Fe=i.get(b),Je=i.get(re);if(Je.__renderTarget=b,!Fe.__hasExternalTextures){const Be=Math.max(1,b.width>>De),Ne=Math.max(1,b.height>>De);ve===n.TEXTURE_3D||ve===n.TEXTURE_2D_ARRAY?t.texImage3D(ve,De,be,Be,Ne,b.depth,0,Ue,ye,null):t.texImage2D(ve,De,be,Be,Ne,0,Ue,ye,null)}t.bindFramebuffer(n.FRAMEBUFFER,k),Ut(b)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,ve,Je.__webglTexture,0,Bt(b)):(ve===n.TEXTURE_2D||ve>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ce,ve,Je.__webglTexture,De),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(k,b,re){if(n.bindRenderbuffer(n.RENDERBUFFER,k),b.depthBuffer){const ce=b.depthTexture,ve=ce&&ce.isDepthTexture?ce.type:null,De=N(b.stencilBuffer,ve),Ue=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ut(b)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Bt(b),De,b.width,b.height):re?n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt(b),De,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,De,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ue,n.RENDERBUFFER,k)}else{const ce=b.textures;for(let ve=0;ve<ce.length;ve++){const De=ce[ve],Ue=o.convert(De.format,De.colorSpace),ye=o.convert(De.type),be=L(De.internalFormat,Ue,ye,De.normalized,De.colorSpace);Ut(b)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Bt(b),be,b.width,b.height):re?n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt(b),be,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,be,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ct(k,b,re){const ce=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,k),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ve=i.get(b.depthTexture);if(ve.__renderTarget=b,(!ve.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ce){if(ve.__webglInit===void 0&&(ve.__webglInit=!0,b.depthTexture.addEventListener("dispose",V)),ve.__webglTexture===void 0){ve.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ve.__webglTexture),rt(n.TEXTURE_CUBE_MAP,b.depthTexture);const Fe=o.convert(b.depthTexture.format),Je=o.convert(b.depthTexture.type);let Be;b.depthTexture.format===qi?Be=n.DEPTH_COMPONENT24:b.depthTexture.format===Dr&&(Be=n.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Be,b.width,b.height,0,Fe,Je,null)}}else Ee(b.depthTexture,0);const De=ve.__webglTexture,Ue=Bt(b),ye=ce?n.TEXTURE_CUBE_MAP_POSITIVE_X+re:n.TEXTURE_2D,be=b.depthTexture.format===Dr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===qi)Ut(b)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,be,ye,De,0,Ue):n.framebufferTexture2D(n.FRAMEBUFFER,be,ye,De,0);else if(b.depthTexture.format===Dr)Ut(b)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,be,ye,De,0,Ue):n.framebufferTexture2D(n.FRAMEBUFFER,be,ye,De,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function at(k){const b=i.get(k),re=k.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==k.depthTexture){const ce=k.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ce){const ve=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ce.removeEventListener("dispose",ve)};ce.addEventListener("dispose",ve),b.__depthDisposeCallback=ve}b.__boundDepthTexture=ce}if(k.depthTexture&&!b.__autoAllocateDepthBuffer)if(re)for(let ce=0;ce<6;ce++)Ct(b.__webglFramebuffer[ce],k,ce);else{const ce=k.texture.mipmaps;ce&&ce.length>0?Ct(b.__webglFramebuffer[0],k,0):Ct(b.__webglFramebuffer,k,0)}else if(re){b.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[ce]),b.__webglDepthbuffer[ce]===void 0)b.__webglDepthbuffer[ce]=n.createRenderbuffer(),Ge(b.__webglDepthbuffer[ce],k,!1);else{const ve=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=b.__webglDepthbuffer[ce];n.bindRenderbuffer(n.RENDERBUFFER,De),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,De)}}else{const ce=k.texture.mipmaps;if(ce&&ce.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Ge(b.__webglDepthbuffer,k,!1);else{const ve=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,De),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,De)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(k,b,re){const ce=i.get(k);b!==void 0&&Ae(ce.__webglFramebuffer,k,k.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),re!==void 0&&at(k)}function Wt(k){const b=k.texture,re=i.get(k),ce=i.get(b);k.addEventListener("dispose",R);const ve=k.textures,De=k.isWebGLCubeRenderTarget===!0,Ue=ve.length>1;if(Ue||(ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture()),ce.__version=b.version,l.memory.textures++),De){re.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(b.mipmaps&&b.mipmaps.length>0){re.__webglFramebuffer[ye]=[];for(let be=0;be<b.mipmaps.length;be++)re.__webglFramebuffer[ye][be]=n.createFramebuffer()}else re.__webglFramebuffer[ye]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){re.__webglFramebuffer=[];for(let ye=0;ye<b.mipmaps.length;ye++)re.__webglFramebuffer[ye]=n.createFramebuffer()}else re.__webglFramebuffer=n.createFramebuffer();if(Ue)for(let ye=0,be=ve.length;ye<be;ye++){const Fe=i.get(ve[ye]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),l.memory.textures++)}if(k.samples>0&&Ut(k)===!1){re.__webglMultisampledFramebuffer=n.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let ye=0;ye<ve.length;ye++){const be=ve[ye];re.__webglColorRenderbuffer[ye]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,re.__webglColorRenderbuffer[ye]);const Fe=o.convert(be.format,be.colorSpace),Je=o.convert(be.type),Be=L(be.internalFormat,Fe,Je,be.normalized,be.colorSpace,k.isXRRenderTarget===!0),Ne=Bt(k);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,Be,k.width,k.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,re.__webglColorRenderbuffer[ye])}n.bindRenderbuffer(n.RENDERBUFFER,null),k.depthBuffer&&(re.__webglDepthRenderbuffer=n.createRenderbuffer(),Ge(re.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(De){t.bindTexture(n.TEXTURE_CUBE_MAP,ce.__webglTexture),rt(n.TEXTURE_CUBE_MAP,b);for(let ye=0;ye<6;ye++)if(b.mipmaps&&b.mipmaps.length>0)for(let be=0;be<b.mipmaps.length;be++)Ae(re.__webglFramebuffer[ye][be],k,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,be);else Ae(re.__webglFramebuffer[ye],k,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);v(b)&&U(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let ye=0,be=ve.length;ye<be;ye++){const Fe=ve[ye],Je=i.get(Fe);let Be=n.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(Be=k.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Be,Je.__webglTexture),rt(Be,Fe),Ae(re.__webglFramebuffer,k,Fe,n.COLOR_ATTACHMENT0+ye,Be,0),v(Fe)&&U(Be)}t.unbindTexture()}else{let ye=n.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(ye=k.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ye,ce.__webglTexture),rt(ye,b),b.mipmaps&&b.mipmaps.length>0)for(let be=0;be<b.mipmaps.length;be++)Ae(re.__webglFramebuffer[be],k,b,n.COLOR_ATTACHMENT0,ye,be);else Ae(re.__webglFramebuffer,k,b,n.COLOR_ATTACHMENT0,ye,0);v(b)&&U(ye),t.unbindTexture()}k.depthBuffer&&at(k)}function pt(k){const b=k.textures;for(let re=0,ce=b.length;re<ce;re++){const ve=b[re];if(v(ve)){const De=O(k),Ue=i.get(ve).__webglTexture;t.bindTexture(De,Ue),U(De),t.unbindTexture()}}}const $t=[],Xt=[];function sn(k){if(k.samples>0){if(Ut(k)===!1){const b=k.textures,re=k.width,ce=k.height;let ve=n.COLOR_BUFFER_BIT;const De=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ue=i.get(k),ye=b.length>1;if(ye)for(let Fe=0;Fe<b.length;Fe++)t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const be=k.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Fe=0;Fe<b.length;Fe++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(ve|=n.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(ve|=n.STENCIL_BUFFER_BIT)),ye){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ue.__webglColorRenderbuffer[Fe]);const Je=i.get(b[Fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Je,0)}n.blitFramebuffer(0,0,re,ce,0,0,re,ce,ve,n.NEAREST),f===!0&&($t.length=0,Xt.length=0,$t.push(n.COLOR_ATTACHMENT0+Fe),k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&($t.push(De),Xt.push(De),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Xt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$t))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ye)for(let Fe=0;Fe<b.length;Fe++){t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,Ue.__webglColorRenderbuffer[Fe]);const Je=i.get(b[Fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,Je,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&f){const b=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Bt(k){return Math.min(r.maxSamples,k.samples)}function Ut(k){const b=i.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Z(k){const b=l.render.frame;_.get(k)!==b&&(_.set(k,b),k.update())}function et(k,b){const re=k.colorSpace,ce=k.format,ve=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||re!==bo&&re!==ar&&(Nt.getTransfer(re)===Yt?(ce!==_i||ve!==Xn)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",re)),b}function lt(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(h.width=k.naturalWidth||k.width,h.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(h.width=k.displayWidth,h.height=k.displayHeight):(h.width=k.width,h.height=k.height),h}this.allocateTextureUnit=de,this.resetTextureUnits=ae,this.getTextureUnits=X,this.setTextureUnits=q,this.setTexture2D=Ee,this.setTexture2DArray=pe,this.setTexture3D=me,this.setTextureCube=Se,this.rebindTextures=vt,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Ut,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function sb(n,e){function t(i,r=ar){let o;const l=Nt.getTransfer(r);if(i===Xn)return n.UNSIGNED_BYTE;if(i===cu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===uu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===uh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===fh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===lh)return n.BYTE;if(i===ch)return n.SHORT;if(i===as)return n.UNSIGNED_SHORT;if(i===lu)return n.INT;if(i===Li)return n.UNSIGNED_INT;if(i===Ri)return n.FLOAT;if(i===Ii)return n.HALF_FLOAT;if(i===dh)return n.ALPHA;if(i===hh)return n.RGB;if(i===_i)return n.RGBA;if(i===qi)return n.DEPTH_COMPONENT;if(i===Dr)return n.DEPTH_STENCIL;if(i===ph)return n.RED;if(i===fu)return n.RED_INTEGER;if(i===Ur)return n.RG;if(i===du)return n.RG_INTEGER;if(i===hu)return n.RGBA_INTEGER;if(i===mo||i===_o||i===go||i===vo)if(l===Yt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===mo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_o)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===go)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===mo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_o)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===go)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xc||i===Sc||i===Ec||i===Mc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===xc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ec)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Mc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bc||i===wc||i===Tc||i===Ac||i===Rc||i===Eo||i===Cc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===bc||i===wc)return l===Yt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Tc)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ac)return o.COMPRESSED_R11_EAC;if(i===Rc)return o.COMPRESSED_SIGNED_R11_EAC;if(i===Eo)return o.COMPRESSED_RG11_EAC;if(i===Cc)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Pc||i===Dc||i===Lc||i===Ic||i===Uc||i===Fc||i===Nc||i===Oc||i===Bc||i===kc||i===zc||i===Gc||i===Hc||i===Vc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Pc)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Dc)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Lc)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ic)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Uc)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fc)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nc)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Oc)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bc)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kc)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zc)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gc)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hc)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vc)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wc||i===$c||i===Xc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Wc)return l===Yt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$c)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qc||i===Yc||i===Mo||i===jc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===qc)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Yc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ss?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const ob=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class cb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Mh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Fi({vertexShader:ob,fragmentShader:lb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ui(new ds(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ub extends lr{constructor(e,t){super();const i=this;let r=null,o=1,l=null,u="local-floor",f=1,h=null,_=null,g=null,p=null,y=null,T=null;const I=typeof XRWebGLBinding<"u",E=new cb,v={},U=t.getContextAttributes();let O=null,L=null;const N=[],M=[],V=new ht;let R=null,B=null;const F=new ii;F.viewport=new on;const W=new ii;W.viewport=new on;const Y=[F,W],ae=new _y;let X=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ue){let te=N[ue];return te===void 0&&(te=new El,N[ue]=te),te.getTargetRaySpace()},this.getControllerGrip=function(ue){let te=N[ue];return te===void 0&&(te=new El,N[ue]=te),te.getGripSpace()},this.getHand=function(ue){let te=N[ue];return te===void 0&&(te=new El,N[ue]=te),te.getHandSpace()};function de(ue){const te=M.indexOf(ue.inputSource);if(te===-1)return;const ge=N[te];ge!==void 0&&(ge.update(ue.inputSource,ue.frame,h||l),ge.dispatchEvent({type:ue.type,data:ue.inputSource}))}function _e(){r.removeEventListener("select",de),r.removeEventListener("selectstart",de),r.removeEventListener("selectend",de),r.removeEventListener("squeeze",de),r.removeEventListener("squeezestart",de),r.removeEventListener("squeezeend",de),r.removeEventListener("end",_e),r.removeEventListener("inputsourceschange",Ee);for(let ue=0;ue<N.length;ue++){const te=M[ue];te!==null&&(M[ue]=null,N[ue].disconnect(te))}X=null,q=null,E.reset();for(const ue in v)delete v[ue];if(e.setRenderTarget(O),y=null,p=null,g=null,r=null,L=null,tt.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(V.width,V.height,!1),B!==null){const ue=B.camera;ue.fov=B.fov,ue.zoom=B.zoom,ue.updateProjectionMatrix(),B=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ue){o=ue,i.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ue){u=ue,i.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(ue){h=ue},this.getBaseLayer=function(){return p!==null?p:y},this.getBinding=function(){return g===null&&I&&(g=new XRWebGLBinding(r,t)),g},this.getFrame=function(){return T},this.getSession=function(){return r},this.setSession=async function(ue){if(r=ue,r!==null){if(O=e.getRenderTarget(),r.addEventListener("select",de),r.addEventListener("selectstart",de),r.addEventListener("selectend",de),r.addEventListener("squeeze",de),r.addEventListener("squeezestart",de),r.addEventListener("squeezeend",de),r.addEventListener("end",_e),r.addEventListener("inputsourceschange",Ee),U.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(V),I&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,he=null,Ae=null;U.depth&&(Ae=U.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=U.stencil?Dr:qi,he=U.stencil?ss:Li);const Ge={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:o};g=this.getBinding(),p=g.createProjectionLayer(Ge),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),L=new gi(p.textureWidth,p.textureHeight,{format:_i,type:Xn,depthTexture:new ls(p.textureWidth,p.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{const ge={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(r,t,ge),r.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new gi(y.framebufferWidth,y.framebufferHeight,{format:_i,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(f),h=null,l=await r.requestReferenceSpace(u),tt.setContext(r),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function Ee(ue){for(let te=0;te<ue.removed.length;te++){const ge=ue.removed[te],he=M.indexOf(ge);he>=0&&(M[he]=null,N[he].disconnect(ge))}for(let te=0;te<ue.added.length;te++){const ge=ue.added[te];let he=M.indexOf(ge);if(he===-1){for(let Ge=0;Ge<N.length;Ge++)if(Ge>=M.length){M.push(ge),he=Ge;break}else if(M[Ge]===null){M[Ge]=ge,he=Ge;break}if(he===-1)break}const Ae=N[he];Ae&&Ae.connect(ge)}}const pe=new ne,me=new ne;function Se(ue,te,ge){pe.setFromMatrixPosition(te.matrixWorld),me.setFromMatrixPosition(ge.matrixWorld);const he=pe.distanceTo(me),Ae=te.projectionMatrix.elements,Ge=ge.projectionMatrix.elements,Ct=Ae[14]/(Ae[10]-1),at=Ae[14]/(Ae[10]+1),vt=(Ae[9]+1)/Ae[5],Wt=(Ae[9]-1)/Ae[5],pt=(Ae[8]-1)/Ae[0],$t=(Ge[8]+1)/Ge[0],Xt=Ct*pt,sn=Ct*$t,Bt=he/(-pt+$t),Ut=Bt*-pt;if(te.matrixWorld.decompose(ue.position,ue.quaternion,ue.scale),ue.translateX(Ut),ue.translateZ(Bt),ue.matrixWorld.compose(ue.position,ue.quaternion,ue.scale),ue.matrixWorldInverse.copy(ue.matrixWorld).invert(),Ae[10]===-1)ue.projectionMatrix.copy(te.projectionMatrix),ue.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Z=Ct+Bt,et=at+Bt,lt=Xt-Ut,k=sn+(he-Ut),b=vt*at/et*Z,re=Wt*at/et*Z;ue.projectionMatrix.makePerspective(lt,k,b,re,Z,et),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert()}}function je(ue,te){te===null?ue.matrixWorld.copy(ue.matrix):ue.matrixWorld.multiplyMatrices(te.matrixWorld,ue.matrix),ue.matrixWorldInverse.copy(ue.matrixWorld).invert()}this.updateCamera=function(ue){if(r===null)return;let te=ue.near,ge=ue.far;E.texture!==null&&(E.depthNear>0&&(te=E.depthNear),E.depthFar>0&&(ge=E.depthFar)),ae.near=W.near=F.near=te,ae.far=W.far=F.far=ge,(X!==ae.near||q!==ae.far)&&(r.updateRenderState({depthNear:ae.near,depthFar:ae.far}),X=ae.near,q=ae.far),ae.layers.mask=ue.layers.mask|6,F.layers.mask=ae.layers.mask&-5,W.layers.mask=ae.layers.mask&-3;const he=ue.parent,Ae=ae.cameras;je(ae,he);for(let Ge=0;Ge<Ae.length;Ge++)je(Ae[Ge],he);Ae.length===2?Se(ae,F,W):ae.projectionMatrix.copy(F.projectionMatrix),B===null&&ue.isPerspectiveCamera&&(B={camera:ue,fov:ue.fov,zoom:ue.zoom}),He(ue,ae,he)};function He(ue,te,ge){ge===null?ue.matrix.copy(te.matrixWorld):(ue.matrix.copy(ge.matrixWorld),ue.matrix.invert(),ue.matrix.multiply(te.matrixWorld)),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.updateMatrixWorld(!0),ue.projectionMatrix.copy(te.projectionMatrix),ue.projectionMatrixInverse.copy(te.projectionMatrixInverse),ue.isPerspectiveCamera&&(ue.fov=Zc*2*Math.atan(1/ue.projectionMatrix.elements[5]),ue.zoom=1)}this.getCamera=function(){return ae},this.getFoveation=function(){if(!(p===null&&y===null))return f},this.setFoveation=function(ue){f=ue,p!==null&&(p.fixedFoveation=ue),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ue)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(ae)},this.getCameraTexture=function(ue){return v[ue]};let ot=null;function rt(ue,te){if(_=te.getViewerPose(h||l),T=te,_!==null){const ge=_.views;y!==null&&(e.setRenderTargetFramebuffer(L,y.framebuffer),e.setRenderTarget(L));let he=!1;ge.length!==ae.cameras.length&&(ae.cameras.length=0,he=!0);for(let at=0;at<ge.length;at++){const vt=ge[at];let Wt=null;if(y!==null)Wt=y.getViewport(vt);else{const $t=g.getViewSubImage(p,vt);Wt=$t.viewport,at===0&&(e.setRenderTargetTextures(L,$t.colorTexture,$t.depthStencilTexture),e.setRenderTarget(L))}let pt=Y[at];pt===void 0&&(pt=new ii,pt.layers.enable(at),pt.viewport=new on,Y[at]=pt),pt.matrix.fromArray(vt.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(vt.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),at===0&&(ae.matrix.copy(pt.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale)),he===!0&&ae.cameras.push(pt)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&I){g=i.getBinding();const at=g.getDepthInformation(ge[0]);at&&at.isValid&&at.texture&&E.init(at,r.renderState)}if(Ae&&Ae.includes("camera-access")&&I){e.state.unbindTexture(),g=i.getBinding();for(let at=0;at<ge.length;at++){const vt=ge[at].camera;if(vt){let Wt=v[vt];Wt||(Wt=new Mh,v[vt]=Wt);const pt=g.getCameraImage(vt);Wt.sourceTexture=pt}}}}for(let ge=0;ge<N.length;ge++){const he=M[ge],Ae=N[ge];he!==null&&Ae!==void 0&&Ae.update(he,te,h||l)}ot&&ot(ue,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),T=null}const tt=new Ah;tt.setAnimationLoop(rt),this.setAnimationLoop=function(ue){ot=ue},this.dispose=function(){}}}const fb=new an,Uh=new gt;Uh.set(-1,0,0,0,1,0,0,0,1);function db(n,e){function t(E,v){E.matrixAutoUpdate===!0&&E.updateMatrix(),v.value.copy(E.matrix)}function i(E,v){v.color.getRGB(E.fogColor.value,bh(n)),v.isFog?(E.fogNear.value=v.near,E.fogFar.value=v.far):v.isFogExp2&&(E.fogDensity.value=v.density)}function r(E,v,U,O,L){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?o(E,v):v.isMeshLambertMaterial?(o(E,v),v.envMap&&(E.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(o(E,v),g(E,v)):v.isMeshPhongMaterial?(o(E,v),_(E,v),v.envMap&&(E.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(o(E,v),p(E,v),v.isMeshPhysicalMaterial&&y(E,v,L)):v.isMeshMatcapMaterial?(o(E,v),T(E,v)):v.isMeshDepthMaterial?o(E,v):v.isMeshDistanceMaterial?(o(E,v),I(E,v)):v.isMeshNormalMaterial?o(E,v):v.isLineBasicMaterial?(l(E,v),v.isLineDashedMaterial&&u(E,v)):v.isPointsMaterial?f(E,v,U,O):v.isSpriteMaterial?h(E,v):v.isShadowMaterial?(E.color.value.copy(v.color),E.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function o(E,v){E.opacity.value=v.opacity,v.color&&E.diffuse.value.copy(v.color),v.emissive&&E.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(E.map.value=v.map,t(v.map,E.mapTransform)),v.alphaMap&&(E.alphaMap.value=v.alphaMap,t(v.alphaMap,E.alphaMapTransform)),v.bumpMap&&(E.bumpMap.value=v.bumpMap,t(v.bumpMap,E.bumpMapTransform),E.bumpScale.value=v.bumpScale,v.side===Bn&&(E.bumpScale.value*=-1)),v.normalMap&&(E.normalMap.value=v.normalMap,t(v.normalMap,E.normalMapTransform),E.normalScale.value.copy(v.normalScale),v.side===Bn&&E.normalScale.value.negate()),v.displacementMap&&(E.displacementMap.value=v.displacementMap,t(v.displacementMap,E.displacementMapTransform),E.displacementScale.value=v.displacementScale,E.displacementBias.value=v.displacementBias),v.emissiveMap&&(E.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,E.emissiveMapTransform)),v.specularMap&&(E.specularMap.value=v.specularMap,t(v.specularMap,E.specularMapTransform)),v.alphaTest>0&&(E.alphaTest.value=v.alphaTest);const U=e.get(v),O=U.envMap,L=U.envMapRotation;O&&(E.envMap.value=O,E.envMapRotation.value.setFromMatrix4(fb.makeRotationFromEuler(L)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&E.envMapRotation.value.premultiply(Uh),E.reflectivity.value=v.reflectivity,E.ior.value=v.ior,E.refractionRatio.value=v.refractionRatio),v.lightMap&&(E.lightMap.value=v.lightMap,E.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,E.lightMapTransform)),v.aoMap&&(E.aoMap.value=v.aoMap,E.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,E.aoMapTransform))}function l(E,v){E.diffuse.value.copy(v.color),E.opacity.value=v.opacity,v.map&&(E.map.value=v.map,t(v.map,E.mapTransform))}function u(E,v){E.dashSize.value=v.dashSize,E.totalSize.value=v.dashSize+v.gapSize,E.scale.value=v.scale}function f(E,v,U,O){E.diffuse.value.copy(v.color),E.opacity.value=v.opacity,E.size.value=v.size*U,E.scale.value=O*.5,v.map&&(E.map.value=v.map,t(v.map,E.uvTransform)),v.alphaMap&&(E.alphaMap.value=v.alphaMap,t(v.alphaMap,E.alphaMapTransform)),v.alphaTest>0&&(E.alphaTest.value=v.alphaTest)}function h(E,v){E.diffuse.value.copy(v.color),E.opacity.value=v.opacity,E.rotation.value=v.rotation,v.map&&(E.map.value=v.map,t(v.map,E.mapTransform)),v.alphaMap&&(E.alphaMap.value=v.alphaMap,t(v.alphaMap,E.alphaMapTransform)),v.alphaTest>0&&(E.alphaTest.value=v.alphaTest)}function _(E,v){E.specular.value.copy(v.specular),E.shininess.value=Math.max(v.shininess,1e-4)}function g(E,v){v.gradientMap&&(E.gradientMap.value=v.gradientMap)}function p(E,v){E.metalness.value=v.metalness,v.metalnessMap&&(E.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,E.metalnessMapTransform)),E.roughness.value=v.roughness,v.roughnessMap&&(E.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,E.roughnessMapTransform)),v.envMap&&(E.envMapIntensity.value=v.envMapIntensity)}function y(E,v,U){E.ior.value=v.ior,v.sheen>0&&(E.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),E.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(E.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,E.sheenColorMapTransform)),v.sheenRoughnessMap&&(E.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,E.sheenRoughnessMapTransform))),v.clearcoat>0&&(E.clearcoat.value=v.clearcoat,E.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(E.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,E.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(E.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Bn&&E.clearcoatNormalScale.value.negate())),v.dispersion>0&&(E.dispersion.value=v.dispersion),v.retroreflectivity>0&&(E.retroreflectivity.value=v.retroreflectivity),v.iridescence>0&&(E.iridescence.value=v.iridescence,E.iridescenceIOR.value=v.iridescenceIOR,E.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(E.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,E.iridescenceMapTransform)),v.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),v.transmission>0&&(E.transmission.value=v.transmission,E.transmissionSamplerMap.value=U.texture,E.transmissionSamplerSize.value.set(U.width,U.height),v.transmissionMap&&(E.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,E.transmissionMapTransform)),E.thickness.value=v.thickness,v.thicknessMap&&(E.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=v.attenuationDistance,E.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(E.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(E.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=v.specularIntensity,E.specularColor.value.copy(v.specularColor),v.specularColorMap&&(E.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,E.specularColorMapTransform)),v.specularIntensityMap&&(E.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,E.specularIntensityMapTransform))}function T(E,v){v.matcap&&(E.matcap.value=v.matcap)}function I(E,v){const U=e.get(v).light;E.referencePosition.value.setFromMatrixPosition(U.matrixWorld),E.nearDistance.value=U.shadow.camera.near,E.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function hb(n,e,t,i){let r={},o={},l=[];const u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function f(L,N){const M=N.program;i.uniformBlockBinding(L,M)}function h(L,N){let M=r[L.id];M===void 0&&(E(L),M=_(L),r[L.id]=M,L.addEventListener("dispose",U));const V=N.program;i.updateUBOMapping(L,V);const R=e.render.frame;o[L.id]!==R&&(p(L),o[L.id]=R)}function _(L){const N=g();L.__bindingPointIndex=N;const M=n.createBuffer(),V=L.__size,R=L.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,V,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,N,M),M}function g(){for(let L=0;L<u;L++)if(l.indexOf(L)===-1)return l.push(L),L;return Gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(L){const N=r[L.id],M=L.uniforms,V=L.__cache;n.bindBuffer(n.UNIFORM_BUFFER,N);for(let R=0,B=M.length;R<B;R++){const F=M[R];if(Array.isArray(F))for(let W=0,Y=F.length;W<Y;W++)y(F[W],R,W,V);else y(F,R,0,V)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function y(L,N,M,V){if(I(L,N,M,V)===!0){const R=L.__offset,B=L.value;if(Array.isArray(B)){let F=0;for(let W=0;W<B.length;W++){const Y=B[W],ae=v(Y);T(Y,L.__data,F),typeof Y!="number"&&typeof Y!="boolean"&&!Y.isMatrix3&&!ArrayBuffer.isView(Y)&&(F+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(B,L.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,R,L.__data)}}function T(L,N,M){typeof L=="number"||typeof L=="boolean"?N[0]=L:L.isMatrix3?(N[0]=L.elements[0],N[1]=L.elements[1],N[2]=L.elements[2],N[3]=0,N[4]=L.elements[3],N[5]=L.elements[4],N[6]=L.elements[5],N[7]=0,N[8]=L.elements[6],N[9]=L.elements[7],N[10]=L.elements[8],N[11]=0):ArrayBuffer.isView(L)?N.set(new L.constructor(L.buffer,L.byteOffset,N.length)):L.toArray(N,M)}function I(L,N,M,V){const R=L.value,B=N+"_"+M;if(V[B]===void 0)return typeof R=="number"||typeof R=="boolean"?V[B]=R:ArrayBuffer.isView(R)?V[B]=R.slice():V[B]=R.clone(),!0;{const F=V[B];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return V[B]=R,!0}else{if(ArrayBuffer.isView(R))return!0;if(F.equals(R)===!1)return F.copy(R),!0}}return!1}function E(L){const N=L.uniforms;let M=0;const V=16;for(let B=0,F=N.length;B<F;B++){const W=Array.isArray(N[B])?N[B]:[N[B]];for(let Y=0,ae=W.length;Y<ae;Y++){const X=W[Y],q=Array.isArray(X.value)?X.value:[X.value];for(let de=0,_e=q.length;de<_e;de++){const Ee=q[de],pe=v(Ee),me=M%V,Se=me%pe.boundary,je=me+Se;M+=Se,je!==0&&V-je<pe.storage&&(M+=V-je),X.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=M,M+=pe.storage}}}const R=M%V;return R>0&&(M+=V-R),L.__size=M,L.__cache={},this}function v(L){const N={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(N.boundary=4,N.storage=4):L.isVector2?(N.boundary=8,N.storage=8):L.isVector3||L.isColor?(N.boundary=16,N.storage=12):L.isVector4?(N.boundary=16,N.storage=16):L.isMatrix3?(N.boundary=48,N.storage=48):L.isMatrix4?(N.boundary=64,N.storage=64):L.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(L)?(N.boundary=16,N.storage=L.byteLength):ut("WebGLRenderer: Unsupported uniform value type.",L),N}function U(L){const N=L.target;N.removeEventListener("dispose",U);const M=l.indexOf(N.__bindingPointIndex);l.splice(M,1),n.deleteBuffer(r[N.id]),delete r[N.id],delete o[N.id]}function O(){for(const L in r)n.deleteBuffer(r[L]);l=[],r={},o={}}return{bind:f,update:h,dispose:O}}const pb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wi=null;function mb(){return wi===null&&(wi=new Jv(pb,16,16,Ur,Ii),wi.name="DFG_LUT",wi.minFilter=Tn,wi.magFilter=Tn,wi.wrapS=Wi,wi.wrapT=Wi,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}class _b{constructor(e={}){const{canvas:t=Tv(),context:i=null,depth:r=!0,stencil:o=!1,alpha:l=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:p=!1,outputBufferType:y=Xn}=e;this.isWebGLRenderer=!0;let T;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=i.getContextAttributes().alpha}else T=l;const I=y,E=new Set([hu,du,fu]),v=new Set([Xn,Li,as,ss,cu,uu]),U=new Uint32Array(4),O=new Int32Array(4),L=new ne;let N=null,M=null;const V=[],R=[];let B=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let W=!1,Y=null,ae=null,X=null,q=null;this._outputColorSpace=ni;let de=0,_e=0,Ee=null,pe=-1,me=null;const Se=new on,je=new on;let He=null;const ot=new It(0);let rt=0,tt=t.width,ue=t.height,te=1,ge=null,he=null;const Ae=new on(0,0,tt,ue),Ge=new on(0,0,tt,ue);let Ct=!1;const at=new yu;let vt=!1,Wt=!1;const pt=new an,$t=new ne,Xt=new on,sn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function Ut(){return Ee===null?te:1}let Z=i;function et(D,K){return t.getContext(D,K)}let lt,k,b,re,ce,ve,De,Ue,ye,be,Fe,Je,Be,Ne,Qe,it,ct,j,ie,$,Le,ze,Te;try{const D={alpha:!0,depth:r,stencil:o,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ou}`),t.addEventListener("webglcontextlost",Tt,!1),t.addEventListener("webglcontextrestored",Pt,!1),t.addEventListener("webglcontextcreationerror",Sn,!1),Z===null){const K="webgl2";if(Z=et(K,D),Z===null)throw et(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qe()}catch(D){throw t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",Pt,!1),t.removeEventListener("webglcontextcreationerror",Sn,!1),Gt("WebGLRenderer: "+D.message),D}function qe(){lt=new mE(Z),lt.init(),Le=new sb(Z,lt),k=new aE(Z,lt,e,Le),b=new rb(Z,lt),k.reversedDepthBuffer&&p&&b.buffers.depth.setReversed(!0),ae=Z.createFramebuffer(),X=Z.createFramebuffer(),q=Z.createFramebuffer(),re=new vE(Z),ce=new WM,ve=new ab(Z,lt,b,ce,k,Le,re),De=new pE(F),Ue=new xy(Z),ze=new iE(Z,Ue),ye=new _E(Z,Ue,re,ze),be=new xE(Z,ye,Ue,ze,re),j=new yE(Z,k,ve),Qe=new sE(ce),Fe=new VM(F,De,lt,k,ze,Qe),Je=new db(F,ce),Be=new XM,Ne=new JM(lt),ct=new nE(F,De,b,be,T,f),it=new ib(F,be,k),Te=new hb(Z,re,k,b),ie=new rE(Z,lt,re),$=new gE(Z,lt,re),re.programs=Fe.programs,F.capabilities=k,F.extensions=lt,F.properties=ce,F.renderLists=Be,F.shadowMap=it,F.state=b,F.info=re}I!==Xn&&(B=new EE(I,t.width,t.height,u,r,o));const Ke=new ub(F,Z);this.xr=Ke,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const D=lt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=lt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(D){D!==void 0&&(te=D,this.setSize(tt,ue,!1))},this.getSize=function(D){return D.set(tt,ue)},this.setSize=function(D,K,Q=!0){if(Ke.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}tt=D,ue=K,t.width=Math.floor(D*te),t.height=Math.floor(K*te),Q===!0&&(t.style.width=D+"px",t.style.height=K+"px"),B!==null&&B.setSize(t.width,t.height),this.setViewport(0,0,D,K)},this.getDrawingBufferSize=function(D){return D.set(tt*te,ue*te).floor()},this.setDrawingBufferSize=function(D,K,Q){tt=D,ue=K,te=Q,t.width=Math.floor(D*Q),t.height=Math.floor(K*Q),this.setViewport(0,0,D,K)},this.setEffects=function(D){if(I===Xn){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let K=0;K<D.length;K++)if(D[K].isOutputPass===!0){ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(Se)},this.getViewport=function(D){return D.copy(Ae)},this.setViewport=function(D,K,Q,oe){D.isVector4?Ae.set(D.x,D.y,D.z,D.w):Ae.set(D,K,Q,oe),b.viewport(Se.copy(Ae).multiplyScalar(te).round())},this.getScissor=function(D){return D.copy(Ge)},this.setScissor=function(D,K,Q,oe){D.isVector4?Ge.set(D.x,D.y,D.z,D.w):Ge.set(D,K,Q,oe),b.scissor(je.copy(Ge).multiplyScalar(te).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(D){b.setScissorTest(Ct=D)},this.setOpaqueSort=function(D){ge=D},this.setTransparentSort=function(D){he=D},this.getClearColor=function(D){return D.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor(...arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha(...arguments)},this.clear=function(D=!0,K=!0,Q=!0){let oe=0;if(D){let se=!1;if(Ee!==null){const Oe=Ee.texture.format;se=E.has(Oe)}if(se){const Oe=Ee.texture.type,$e=v.has(Oe),ke=ct.getClearColor(),We=ct.getClearAlpha(),Ze=ke.r,mt=ke.g,Et=ke.b;$e?(U[0]=Ze,U[1]=mt,U[2]=Et,U[3]=We,Z.clearBufferuiv(Z.COLOR,0,U)):(O[0]=Ze,O[1]=mt,O[2]=Et,O[3]=We,Z.clearBufferiv(Z.COLOR,0,O))}else oe|=Z.COLOR_BUFFER_BIT}K&&(oe|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(oe|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&Z.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),Y=D},this.dispose=function(){t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",Pt,!1),t.removeEventListener("webglcontextcreationerror",Sn,!1),ct.dispose(),Be.dispose(),Ne.dispose(),ce.dispose(),De.dispose(),be.dispose(),ze.dispose(),Te.dispose(),Fe.dispose(),Ke.dispose(),Ke.removeEventListener("sessionstart",ur),Ke.removeEventListener("sessionend",Gr),qn.stop()};function Tt(D){D.preventDefault(),Tf("WebGLRenderer: Context Lost."),W=!0}function Pt(){Tf("WebGLRenderer: Context Restored."),W=!1;const D=re.autoReset,K=it.enabled,Q=it.autoUpdate,oe=it.needsUpdate,se=it.type;qe(),re.autoReset=D,it.enabled=K,it.autoUpdate=Q,it.needsUpdate=oe,it.type=se}function Sn(D){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function An(D){const K=D.target;K.removeEventListener("dispose",An),Fn(K)}function Fn(D){zr(D),ce.remove(D)}function zr(D){const K=ce.get(D).programs;K!==void 0&&(K.forEach(function(Q){Fe.releaseProgram(Q)}),D.isShaderMaterial&&Fe.releaseShaderCache(D))}this.renderBufferDirect=function(D,K,Q,oe,se,Oe){K===null&&(K=sn);const $e=se.isMesh&&se.matrixWorld.determinantAffine()<0,ke=Si(D,K,Q,oe,se);b.setMaterial(oe,$e);let We=Q.index,Ze=1;if(oe.wireframe===!0){if(We=ye.getWireframeAttribute(Q),We===void 0)return;Ze=2}const mt=Q.drawRange,Et=Q.attributes.position;let Ye=mt.start*Ze,w=(mt.start+mt.count)*Ze;Oe!==null&&(Ye=Math.max(Ye,Oe.start*Ze),w=Math.min(w,(Oe.start+Oe.count)*Ze)),We!==null?(Ye=Math.max(Ye,0),w=Math.min(w,We.count)):Et!=null&&(Ye=Math.max(Ye,0),w=Math.min(w,Et.count));const ft=w-Ye;if(ft<0||ft===1/0)return;ze.setup(se,oe,ke,Q,We);let qt,Ot=ie;if(We!==null&&(qt=Ue.get(We),Ot=$,Ot.setIndex(qt)),se.isMesh)oe.wireframe===!0?(b.setLineWidth(oe.wireframeLinewidth*Ut()),Ot.setMode(Z.LINES)):Ot.setMode(Z.TRIANGLES);else if(se.isLine){let en=oe.linewidth;en===void 0&&(en=1),b.setLineWidth(en*Ut()),se.isLineSegments?Ot.setMode(Z.LINES):se.isLineLoop?Ot.setMode(Z.LINE_LOOP):Ot.setMode(Z.LINE_STRIP)}else se.isPoints?Ot.setMode(Z.POINTS):se.isSprite&&Ot.setMode(Z.TRIANGLES);if(se.isBatchedMesh)if(lt.get("WEBGL_multi_draw"))Ot.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const en=se._multiDrawStarts,Xe=se._multiDrawCounts,tn=se._multiDrawCount,At=We?Ue.get(We).bytesPerElement:1,un=ce.get(oe).currentProgram.getUniforms();for(let Rn=0;Rn<tn;Rn++)un.setValue(Z,"_gl_DrawID",Rn),Ot.render(en[Rn]/At,Xe[Rn])}else if(se.isInstancedMesh)Ot.renderInstances(Ye,ft,se.count);else if(Q.isInstancedBufferGeometry){const en=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Xe=Math.min(Q.instanceCount,en);Ot.renderInstances(Ye,ft,Xe)}else Ot.render(Ye,ft)};function yi(D,K,Q,oe){Y!==null&&D.isNodeMaterial&&Y.setObject(oe,D),vt===!0&&Qe.setState(D,Q,!1),D.transparent===!0&&D.side===Vi&&D.forceSinglePass===!1?(D.side=Bn,D.needsUpdate=!0,xi(D,K,oe),D.side=Lr,D.needsUpdate=!0,xi(D,K,oe),D.side=Vi):xi(D,K,oe)}this.compile=function(D,K,Q=null){Q===null&&(Q=D),Y!==null&&Y.renderStart(D,K,Q),M=Ne.get(Q),M.init(K),R.push(M),Q.traverseVisible(function(se){se.isLight&&se.layers.test(K.layers)&&(M.pushLight(se),se.castShadow&&M.pushShadow(se))}),D!==Q&&D.traverseVisible(function(se){se.isLight&&se.layers.test(K.layers)&&(M.pushLight(se),se.castShadow&&M.pushShadow(se))}),M.setupLights(),Y!==null&&Y.updateLights(M.state.lightsArray),Wt=this.localClippingEnabled,vt=Qe.init(this.clippingPlanes,Wt),vt===!0&&Qe.setGlobalState(this.clippingPlanes,K),Y!==null&&it.render(M.state.shadowsArray,Q,K);const oe=new Set;return D.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Oe=se.material;if(Oe)if(Array.isArray(Oe))for(let $e=0;$e<Oe.length;$e++){const ke=Oe[$e];yi(ke,Q,K,se),oe.add(ke)}else yi(Oe,Q,K,se),oe.add(Oe)}),M=R.pop(),Y!==null&&Y.renderEnd(),oe},this.compileAsync=function(D,K,Q=null){const oe=this.compile(D,K,Q);return new Promise(se=>{function Oe(){if(oe.forEach(function($e){const We=ce.get($e).currentProgram;(We===void 0||We.isReady())&&oe.delete($e)}),oe.size===0){se(D);return}setTimeout(Oe,10)}lt.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let ai=null;function cr(D){ai&&ai(D)}function ur(){qn.stop()}function Gr(){qn.start()}const qn=new Ah;qn.setAnimationLoop(cr),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(D){ai=D,Ke.setAnimationLoop(D),D===null?qn.stop():qn.start()},Ke.addEventListener("sessionstart",ur),Ke.addEventListener("sessionend",Gr),this.render=function(D,K){if(K!==void 0&&K.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;Y!==null&&Y.renderStart(D,K);const Q=Ke.enabled===!0&&Ke.isPresenting===!0,oe=B!==null&&(Ee===null||Q)&&B.begin(F,Ee);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ke.enabled===!0&&Ke.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(Ke.cameraAutoUpdate===!0&&Ke.updateCamera(K),K=Ke.getCamera()),D.isScene===!0&&D.onBeforeRender(F,D,K,Ee),M=Ne.get(D,R.length),M.init(K),M.state.textureUnits=ve.getTextureUnits(),R.push(M),pt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),at.setFromProjectionMatrix(pt,Ci,K.reversedDepth),Wt=this.localClippingEnabled,vt=Qe.init(this.clippingPlanes,Wt),N=Be.get(D,V.length),N.init(),V.push(N),Ke.enabled===!0&&Ke.isPresenting===!0){const $e=F.xr.getDepthSensingMesh();$e!==null&&Ni($e,K,-1/0,F.sortObjects)}Ni(D,K,0,F.sortObjects),N.finish(),Y!==null&&Y.updateLights(M.state.lightsArray),F.sortObjects===!0&&N.sort(ge,he),Bt=Ke.enabled===!1||Ke.isPresenting===!1||Ke.hasDepthSensing()===!1,Bt&&ct.addToRenderList(N,D),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),vt===!0&&Qe.beginShadows();const se=M.state.shadowsArray;if(it.render(se,D,K),vt===!0&&Qe.endShadows(),(oe&&B.hasRenderPass())===!1){const $e=N.opaque,ke=N.transmissive;if(M.setupLights(),K.isArrayCamera){const We=K.cameras;if(ke.length>0)for(let Ze=0,mt=We.length;Ze<mt;Ze++){const Et=We[Ze];Yi($e,ke,D,Et)}Bt&&ct.render(D);for(let Ze=0,mt=We.length;Ze<mt;Ze++){const Et=We[Ze];Hr(N,D,Et,Et.viewport)}}else ke.length>0&&Yi($e,ke,D,K),Bt&&ct.render(D),Hr(N,D,K)}Ee!==null&&_e===0&&(ve.updateMultisampleRenderTarget(Ee),ve.updateRenderTargetMipmap(Ee)),oe&&B.end(F),D.isScene===!0&&D.onAfterRender(F,D,K),ze.resetDefaultState(),pe=-1,me=null,R.pop(),R.length>0?(M=R[R.length-1],ve.setTextureUnits(M.state.textureUnits),vt===!0&&Qe.setGlobalState(F.clippingPlanes,M.state.camera)):M=null,V.pop(),V.length>0?N=V[V.length-1]:N=null,Y!==null&&Y.renderEnd()};function Ni(D,K,Q,oe){if(D.visible===!1)return;if(D.layers.test(K.layers)){if(D.isGroup)Q=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(K);else if(D.isLightProbeGrid)M.pushLightProbeGrid(D);else if(D.isLight)M.pushLight(D),D.castShadow&&M.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||D.intersectsFrustum(at)){oe&&Xt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(pt);const $e=be.update(D),ke=D.material;ke.visible&&N.push(D,$e,ke,Q,Xt.z,null,K)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||D.intersectsFrustum(at))){const $e=be.update(D),ke=D.material;if(oe&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Xt.copy(D.boundingSphere.center)):($e.boundingSphere===null&&$e.computeBoundingSphere(),Xt.copy($e.boundingSphere.center)),Xt.applyMatrix4(D.matrixWorld).applyMatrix4(pt)),Array.isArray(ke)){const We=$e.groups;for(let Ze=0,mt=We.length;Ze<mt;Ze++){const Et=We[Ze],Ye=ke[Et.materialIndex];Ye&&Ye.visible&&N.push(D,$e,Ye,Q,Xt.z,Et,K)}}else ke.visible&&N.push(D,$e,ke,Q,Xt.z,null,K)}}const Oe=D.children;for(let $e=0,ke=Oe.length;$e<ke;$e++)Ni(Oe[$e],K,Q,oe)}function Hr(D,K,Q,oe){const{opaque:se,transmissive:Oe,transparent:$e}=D;M.setupLightsView(Q),vt===!0&&Qe.setGlobalState(F.clippingPlanes,Q),oe&&b.viewport(Se.copy(oe)),se.length>0&&si(se,K,Q),Oe.length>0&&si(Oe,K,Q),$e.length>0&&si($e,K,Q),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Yi(D,K,Q,oe){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[oe.id]===void 0){const Ye=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[oe.id]=new gi(1,1,{generateMipmaps:!0,type:Ye?Ii:Xn,minFilter:Pr,samples:Math.max(4,k.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Nt.workingColorSpace})}const Oe=M.state.transmissionRenderTarget[oe.id],$e=oe.viewport||Se;Oe.setSize($e.z*F.transmissionResolutionScale,$e.w*F.transmissionResolutionScale);const ke=F.getRenderTarget(),We=F.getActiveCubeFace(),Ze=F.getActiveMipmapLevel();F.setRenderTarget(Oe),F.getClearColor(ot),rt=F.getClearAlpha(),rt<1&&F.setClearColor(16777215,.5),F.clear(),Bt&&ct.render(Q);const mt=F.toneMapping;F.toneMapping=Di;const Et=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),M.setupLightsView(oe),vt===!0&&Qe.setGlobalState(F.clippingPlanes,oe),si(D,Q,oe),ve.updateMultisampleRenderTarget(Oe),ve.updateRenderTargetMipmap(Oe),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let w=0,ft=K.length;w<ft;w++){const qt=K[w],{object:Ot,geometry:en,material:Xe,group:tn}=qt;if(Xe.side===Vi&&Ot.layers.test(oe.layers)){const At=Xe.side;Xe.side=Bn,Xe.needsUpdate=!0,kt(Ot,Q,oe,en,Xe,tn),Xe.side=At,Xe.needsUpdate=!0,Ye=!0}}Ye===!0&&(ve.updateMultisampleRenderTarget(Oe),ve.updateRenderTargetMipmap(Oe))}F.setRenderTarget(ke,We,Ze),F.setClearColor(ot,rt),Et!==void 0&&(oe.viewport=Et),F.toneMapping=mt}function si(D,K,Q){const oe=K.isScene===!0?K.overrideMaterial:null;for(let se=0,Oe=D.length;se<Oe;se++){const $e=D[se],{object:ke,geometry:We,group:Ze}=$e;let mt=$e.material;mt.allowOverride===!0&&oe!==null&&(mt=oe),ke.layers.test(Q.layers)&&kt(ke,K,Q,We,mt,Ze)}}function kt(D,K,Q,oe,se,Oe){Y!==null&&se.isNodeMaterial&&Y.setObject(D,se),D.onBeforeRender(F,K,Q,oe,se,Oe),D.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),se.onBeforeRender(F,K,Q,oe,D,Oe),se.transparent===!0&&se.side===Vi&&se.forceSinglePass===!1?(se.side=Bn,se.needsUpdate=!0,F.renderBufferDirect(Q,K,oe,se,D,Oe),se.side=Lr,se.needsUpdate=!0,F.renderBufferDirect(Q,K,oe,se,D,Oe),se.side=Vi):F.renderBufferDirect(Q,K,oe,se,D,Oe),D.onAfterRender(F,K,Q,oe,se,Oe)}function xi(D,K,Q){K.isScene!==!0&&(K=sn);const oe=ce.get(D),se=M.state.lights,Oe=M.state.shadowsArray,$e=se.state.version,ke=Fe.getParameters(D,se.state,Oe,K,Q,M.state.lightProbeGridArray),We=Fe.getProgramCacheKey(ke);let Ze=oe.programs;oe.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?K.environment:null,oe.fog=K.fog;const mt=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;oe.envMap=De.get(D.envMap||oe.environment,mt),oe.envMapRotation=oe.environment!==null&&D.envMap===null?K.environmentRotation:D.envMapRotation,Ze===void 0&&(D.addEventListener("dispose",An),Ze=new Map,oe.programs=Ze);let Et=Ze.get(We);if(Et!==void 0){if(oe.currentProgram===Et&&oe.lightsStateVersion===$e)return oi(D,ke),Et}else ke.uniforms=Fe.getUniforms(D),Y!==null&&D.isNodeMaterial&&Y.build(D,Q,ke),D.onBeforeCompile(ke,F),Et=Fe.acquireProgram(ke,We),Ze.set(We,Et),oe.uniforms=ke.uniforms;const Ye=oe.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ye.clippingPlanes=Qe.uniform),oi(D,ke),oe.needsLights=ji(D),oe.lightsStateVersion=$e,oe.needsLights&&(Ye.ambientLightColor.value=se.state.ambient,Ye.lightProbe.value=se.state.probe,Ye.sunLights.value=se.state.sun,Ye.sunLightShadows.value=se.state.sunShadow,Ye.directionalLights.value=se.state.directional,Ye.directionalLightShadows.value=se.state.directionalShadow,Ye.spotLights.value=se.state.spot,Ye.spotLightShadows.value=se.state.spotShadow,Ye.rectAreaLights.value=se.state.rectArea,Ye.ltc_1.value=se.state.rectAreaLTC1,Ye.ltc_2.value=se.state.rectAreaLTC2,Ye.pointLights.value=se.state.point,Ye.pointLightShadows.value=se.state.pointShadow,Ye.hemisphereLights.value=se.state.hemi,Ye.sunShadowMatrix.value=se.state.sunShadowMatrix,Ye.sunShadowCascade.value=se.state.sunShadowCascade,Ye.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Ye.spotLightMatrix.value=se.state.spotLightMatrix,Ye.spotLightMap.value=se.state.spotLightMap,Ye.pointShadowMatrix.value=se.state.pointShadowMatrix),oe.lightProbeGrid=M.state.lightProbeGridArray.length>0,oe.currentProgram=Et,oe.uniformsList=null,Et}function fr(D){if(D.uniformsList===null){const K=D.currentProgram.getUniforms();D.uniformsList=yo.seqWithValue(K.seq,D.uniforms)}return D.uniformsList}function oi(D,K){const Q=ce.get(D);Q.outputColorSpace=K.outputColorSpace,Q.batching=K.batching,Q.batchingColor=K.batchingColor,Q.instancing=K.instancing,Q.instancingColor=K.instancingColor,Q.instancingMorph=K.instancingMorph,Q.skinning=K.skinning,Q.morphTargets=K.morphTargets,Q.morphNormals=K.morphNormals,Q.morphColors=K.morphColors,Q.morphTargetsCount=K.morphTargetsCount,Q.numClippingPlanes=K.numClippingPlanes,Q.numIntersection=K.numClipIntersection,Q.vertexAlphas=K.vertexAlphas,Q.vertexTangents=K.vertexTangents,Q.toneMapping=K.toneMapping}function dr(D,K){if(D.length===0)return null;if(D.length===1)return D[0].texture!==null?D[0]:null;L.setFromMatrixPosition(K.matrixWorld);for(let Q=0,oe=D.length;Q<oe;Q++){const se=D[Q];if(se.texture!==null&&se.boundingBox.containsPoint(L))return se}return null}function Si(D,K,Q,oe,se){K.isScene!==!0&&(K=sn),ve.resetTextureUnits();const Oe=K.fog,$e=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?K.environment:null,ke=Ee===null?F.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Nt.workingColorSpace,We=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,Ze=De.get(oe.envMap||$e,We),mt=oe.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Et=!!Q.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Ye=!!Q.morphAttributes.position,w=!!Q.morphAttributes.normal,ft=!!Q.morphAttributes.color;let qt=Di;oe.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(qt=F.toneMapping);const Ot=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,en=Ot!==void 0?Ot.length:0,Xe=ce.get(oe),tn=M.state.lights;if(vt===!0&&(Wt===!0||D!==me)){const Dt=D===me&&oe.id===pe;Qe.setState(oe,D,Dt)}let At=!1;oe.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==tn.state.version||Xe.outputColorSpace!==ke||se.isBatchedMesh&&Xe.batching===!1||!se.isBatchedMesh&&Xe.batching===!0||se.isBatchedMesh&&Xe.batchingColor===!0&&se._colorsTexture===null||se.isBatchedMesh&&Xe.batchingColor===!1&&se._colorsTexture!==null||se.isInstancedMesh&&Xe.instancing===!1||!se.isInstancedMesh&&Xe.instancing===!0||se.isSkinnedMesh&&Xe.skinning===!1||!se.isSkinnedMesh&&Xe.skinning===!0||se.isInstancedMesh&&Xe.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&Xe.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&Xe.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&Xe.instancingMorph===!1&&se.morphTexture!==null||Xe.envMap!==Ze||oe.fog===!0&&Xe.fog!==Oe||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Qe.numPlanes||Xe.numIntersection!==Qe.numIntersection)||Xe.vertexAlphas!==mt||Xe.vertexTangents!==Et||Xe.morphTargets!==Ye||Xe.morphNormals!==w||Xe.morphColors!==ft||Xe.toneMapping!==qt||Xe.morphTargetsCount!==en||!!Xe.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(At=!0):(At=!0,Xe.__version=oe.version);let un=Xe.currentProgram;At===!0&&(un=xi(oe,K,se),Y&&oe.isNodeMaterial&&Y.onUpdateProgram(oe,un,Xe));let Rn=!1,Yn=!1,kn=!1;const Vt=un.getUniforms(),yt=Xe.uniforms;if(b.useProgram(un.program)&&(Rn=!0,Yn=!0,kn=!0),oe.id!==pe&&(pe=oe.id,Yn=!0),Xe.needsLights){const Dt=dr(M.state.lightProbeGridArray,se);Xe.lightProbeGrid!==Dt&&(Xe.lightProbeGrid=Dt,Yn=!0)}if(Rn||me!==D){b.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Vt.setValue(Z,"projectionMatrix",D.projectionMatrix),Vt.setValue(Z,"viewMatrix",D.matrixWorldInverse);const En=Vt.map.cameraPosition;En!==void 0&&En.setValue(Z,$t.setFromMatrixPosition(D.matrixWorld)),k.logarithmicDepthBuffer&&Vt.setValue(Z,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Vt.setValue(Z,"isOrthographic",D.isOrthographicCamera===!0),me!==D&&(me=D,Yn=!0,kn=!0)}if(Xe.needsLights&&(tn.state.sunShadowMap.length>0&&Vt.setValue(Z,"sunShadowMap",tn.state.sunShadowMap,ve),tn.state.directionalShadowMap.length>0&&Vt.setValue(Z,"directionalShadowMap",tn.state.directionalShadowMap,ve),tn.state.spotShadowMap.length>0&&Vt.setValue(Z,"spotShadowMap",tn.state.spotShadowMap,ve),tn.state.pointShadowMap.length>0&&Vt.setValue(Z,"pointShadowMap",tn.state.pointShadowMap,ve)),se.isSkinnedMesh){Vt.setOptional(Z,se,"bindMatrix"),Vt.setOptional(Z,se,"bindMatrixInverse");const Dt=se.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),Vt.setValue(Z,"boneTexture",Dt.boneTexture,ve))}se.isBatchedMesh&&(Vt.setOptional(Z,se,"batchingTexture"),Vt.setValue(Z,"batchingTexture",se._matricesTexture,ve),Vt.setOptional(Z,se,"batchingIdTexture"),Vt.setValue(Z,"batchingIdTexture",se._indirectTexture,ve),Vt.setOptional(Z,se,"batchingColorTexture"),se._colorsTexture!==null&&Vt.setValue(Z,"batchingColorTexture",se._colorsTexture,ve));const fn=Q.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&j.update(se,Q,un),(Yn||Xe.receiveShadow!==se.receiveShadow)&&(Xe.receiveShadow=se.receiveShadow,Vt.setValue(Z,"receiveShadow",se.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&K.environment!==null&&(yt.envMapIntensity.value=K.environmentIntensity),yt.dfgLUT!==void 0&&(yt.dfgLUT.value=mb()),Yn){if(Vt.setValue(Z,"toneMappingExposure",F.toneMappingExposure),Xe.needsLights&&Vr(yt,kn),Oe&&oe.fog===!0&&Je.refreshFogUniforms(yt,Oe),Je.refreshMaterialUniforms(yt,oe,te,ue,M.state.transmissionRenderTarget[D.id]),Xe.needsLights&&Xe.lightProbeGrid){const Dt=Xe.lightProbeGrid;yt.probesSH.value=Dt.texture,yt.probesMin.value.copy(Dt.boundingBox.min),yt.probesMax.value.copy(Dt.boundingBox.max),yt.probesResolution.value.copy(Dt.resolution)}yo.upload(Z,fr(Xe),yt,ve)}if(oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(yo.upload(Z,fr(Xe),yt,ve),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Vt.setValue(Z,"center",se.center),Vt.setValue(Z,"modelViewMatrix",se.modelViewMatrix),Vt.setValue(Z,"normalMatrix",se.normalMatrix),Vt.setValue(Z,"modelMatrix",se.matrixWorld),oe.uniformsGroups!==void 0){const Dt=oe.uniformsGroups;for(let En=0,Cn=Dt.length;En<Cn;En++){const Mt=Dt[En];Te.update(Mt,un),Te.bind(Mt,un)}}return un}function Vr(D,K){D.ambientLightColor.needsUpdate=K,D.lightProbe.needsUpdate=K,D.sunLights.needsUpdate=K,D.sunLightShadows.needsUpdate=K,D.directionalLights.needsUpdate=K,D.directionalLightShadows.needsUpdate=K,D.pointLights.needsUpdate=K,D.pointLightShadows.needsUpdate=K,D.spotLights.needsUpdate=K,D.spotLightShadows.needsUpdate=K,D.rectAreaLights.needsUpdate=K,D.hemisphereLights.needsUpdate=K}function ji(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return de},this.getActiveMipmapLevel=function(){return _e},this.getRenderTarget=function(){return Ee},this.setRenderTargetTextures=function(D,K,Q){const oe=ce.get(D);oe.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),ce.get(D.texture).__webglTexture=K,ce.get(D.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:Q,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,K){const Q=ce.get(D);Q.__webglFramebuffer=K,Q.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(D,K=0,Q=0){Ee=D,de=K,_e=Q;let oe=null,se=!1,Oe=!1;if(D){const ke=ce.get(D);if(ke.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(Z.FRAMEBUFFER,ke.__webglFramebuffer),Se.copy(D.viewport),je.copy(D.scissor),He=D.scissorTest,b.viewport(Se),b.scissor(je),b.setScissorTest(He),pe=-1;return}else if(ke.__webglFramebuffer===void 0)ve.setupRenderTarget(D);else if(ke.__hasExternalTextures)ve.rebindTextures(D,ce.get(D.texture).__webglTexture,ce.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const mt=D.depthTexture;if(ke.__boundDepthTexture!==mt){if(mt!==null&&ce.has(mt)&&(D.width!==mt.image.width||D.height!==mt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(D)}}const We=D.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Oe=!0);const Ze=ce.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Ze[K])?oe=Ze[K][Q]:oe=Ze[K],se=!0):D.samples>0&&ve.useMultisampledRTT(D)===!1?oe=ce.get(D).__webglMultisampledFramebuffer:Array.isArray(Ze)?oe=Ze[Q]:oe=Ze,Se.copy(D.viewport),je.copy(D.scissor),He=D.scissorTest}else Se.copy(Ae).multiplyScalar(te).floor(),je.copy(Ge).multiplyScalar(te).floor(),He=Ct;if(Q!==0&&(oe=ae),b.bindFramebuffer(Z.FRAMEBUFFER,oe)&&b.drawBuffers(D,oe),b.viewport(Se),b.scissor(je),b.setScissorTest(He),se){const ke=ce.get(D.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+K,ke.__webglTexture,Q)}else if(Oe){const ke=K;for(let We=0;We<D.textures.length;We++){const Ze=ce.get(D.textures[We]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+We,Ze.__webglTexture,Q,ke)}}else if(D!==null&&Q!==0){const ke=ce.get(D.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,ke.__webglTexture,Q)}pe=-1};function hr(D){const K=ce.get(D);return(K.__readFormat!==D.format||K.__readType!==D.type)&&(K.__readFormat=D.format,K.__readType=D.type,K.__formatReadable=k.textureFormatReadable(D.format),K.__typeReadable=k.textureTypeReadable(D.type)),K}this.readRenderTargetPixels=function(D,K,Q,oe,se,Oe,$e,ke=0){if(!(D&&D.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=ce.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&$e!==void 0&&(We=We[$e]),We){b.bindFramebuffer(Z.FRAMEBUFFER,We);try{const Ze=D.textures[ke],mt=Ze.format,Et=Ze.type;D.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+ke);const Ye=hr(Ze);if(Ye.__formatReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ye.__typeReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=D.width-oe&&Q>=0&&Q<=D.height-se&&Z.readPixels(K,Q,oe,se,Le.convert(mt),Le.convert(Et),Oe)}finally{const Ze=Ee!==null?ce.get(Ee).__webglFramebuffer:null;b.bindFramebuffer(Z.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(D,K,Q,oe,se,Oe,$e,ke=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=ce.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&$e!==void 0&&(We=We[$e]),We)if(K>=0&&K<=D.width-oe&&Q>=0&&Q<=D.height-se){b.bindFramebuffer(Z.FRAMEBUFFER,We);const Ze=D.textures[ke],mt=Ze.format,Et=Ze.type;D.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+ke);const Ye=hr(Ze);if(Ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const w=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,w),Z.bufferData(Z.PIXEL_PACK_BUFFER,Oe.byteLength,Z.STREAM_READ),Z.readPixels(K,Q,oe,se,Le.convert(mt),Le.convert(Et),0),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null);const ft=Ee!==null?ce.get(Ee).__webglFramebuffer:null;b.bindFramebuffer(Z.FRAMEBUFFER,ft);const qt=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await Av(Z,qt,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,w),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Oe),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null),Z.deleteBuffer(w),Z.deleteSync(qt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,K=null,Q=0){const oe=Math.pow(2,-Q),se=Math.floor(D.image.width*oe),Oe=Math.floor(D.image.height*oe),$e=K!==null?K.x:0,ke=K!==null?K.y:0;ve.setTexture2D(D,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,Q,0,0,$e,ke,se,Oe),b.unbindTexture()},this.copyTextureToTexture=function(D,K,Q=null,oe=null,se=0,Oe=0){let $e,ke,We,Ze,mt,Et,Ye,w,ft;const qt=D.isCompressedTexture?D.mipmaps[Oe]:D.image;if(Q!==null)$e=Q.max.x-Q.min.x,ke=Q.max.y-Q.min.y,We=Q.isBox3?Q.max.z-Q.min.z:1,Ze=Q.min.x,mt=Q.min.y,Et=Q.isBox3?Q.min.z:0;else{const yt=Math.pow(2,-se);$e=Math.floor(qt.width*yt),ke=Math.floor(qt.height*yt),D.isDataArrayTexture?We=qt.depth:D.isData3DTexture?We=Math.floor(qt.depth*yt):We=1,Ze=0,mt=0,Et=0}oe!==null?(Ye=oe.x,w=oe.y,ft=oe.z):(Ye=0,w=0,ft=0);const Ot=Le.convert(K.format),en=Le.convert(K.type);let Xe;K.isData3DTexture?(ve.setTexture3D(K,0),Xe=Z.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(ve.setTexture2DArray(K,0),Xe=Z.TEXTURE_2D_ARRAY):(ve.setTexture2D(K,0),Xe=Z.TEXTURE_2D),b.activeTexture(Z.TEXTURE0),b.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,K.flipY),b.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),b.pixelStorei(Z.UNPACK_ALIGNMENT,K.unpackAlignment);const tn=b.getParameter(Z.UNPACK_ROW_LENGTH),At=b.getParameter(Z.UNPACK_IMAGE_HEIGHT),un=b.getParameter(Z.UNPACK_SKIP_PIXELS),Rn=b.getParameter(Z.UNPACK_SKIP_ROWS),Yn=b.getParameter(Z.UNPACK_SKIP_IMAGES);b.pixelStorei(Z.UNPACK_ROW_LENGTH,qt.width),b.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,qt.height),b.pixelStorei(Z.UNPACK_SKIP_PIXELS,Ze),b.pixelStorei(Z.UNPACK_SKIP_ROWS,mt),b.pixelStorei(Z.UNPACK_SKIP_IMAGES,Et);const kn=D.isDataArrayTexture||D.isData3DTexture,Vt=K.isDataArrayTexture||K.isData3DTexture;if(D.isDepthTexture){const yt=ce.get(D),fn=ce.get(K),Dt=ce.get(yt.__renderTarget),En=ce.get(fn.__renderTarget);b.bindFramebuffer(Z.READ_FRAMEBUFFER,Dt.__webglFramebuffer),b.bindFramebuffer(Z.DRAW_FRAMEBUFFER,En.__webglFramebuffer);for(let Cn=0;Cn<We;Cn++)kn&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,ce.get(D).__webglTexture,se,Et+Cn),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,ce.get(K).__webglTexture,Oe,ft+Cn)),Z.blitFramebuffer(Ze,mt,$e,ke,Ye,w,$e,ke,Z.DEPTH_BUFFER_BIT,Z.NEAREST);b.bindFramebuffer(Z.READ_FRAMEBUFFER,null),b.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(se!==0||D.isRenderTargetTexture||ce.has(D)){const yt=ce.get(D),fn=ce.get(K);b.bindFramebuffer(Z.READ_FRAMEBUFFER,X),b.bindFramebuffer(Z.DRAW_FRAMEBUFFER,q);for(let Dt=0;Dt<We;Dt++)kn?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,yt.__webglTexture,se,Et+Dt):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,yt.__webglTexture,se),Vt?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,fn.__webglTexture,Oe,ft+Dt):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,fn.__webglTexture,Oe),se!==0?Z.blitFramebuffer(Ze,mt,$e,ke,Ye,w,$e,ke,Z.COLOR_BUFFER_BIT,Z.NEAREST):Vt?Z.copyTexSubImage3D(Xe,Oe,Ye,w,ft+Dt,Ze,mt,$e,ke):Z.copyTexSubImage2D(Xe,Oe,Ye,w,Ze,mt,$e,ke);b.bindFramebuffer(Z.READ_FRAMEBUFFER,null),b.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Vt?D.isDataTexture||D.isData3DTexture?Z.texSubImage3D(Xe,Oe,Ye,w,ft,$e,ke,We,Ot,en,qt.data):K.isCompressedArrayTexture?Z.compressedTexSubImage3D(Xe,Oe,Ye,w,ft,$e,ke,We,Ot,qt.data):Z.texSubImage3D(Xe,Oe,Ye,w,ft,$e,ke,We,Ot,en,qt):D.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Oe,Ye,w,$e,ke,Ot,en,qt.data):D.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Oe,Ye,w,qt.width,qt.height,Ot,qt.data):Z.texSubImage2D(Z.TEXTURE_2D,Oe,Ye,w,$e,ke,Ot,en,qt);b.pixelStorei(Z.UNPACK_ROW_LENGTH,tn),b.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,At),b.pixelStorei(Z.UNPACK_SKIP_PIXELS,un),b.pixelStorei(Z.UNPACK_SKIP_ROWS,Rn),b.pixelStorei(Z.UNPACK_SKIP_IMAGES,Yn),Oe===0&&K.generateMipmaps&&Z.generateMipmap(Xe),b.unbindTexture()},this.initRenderTarget=function(D){ce.get(D).__webglFramebuffer===void 0&&ve.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?ve.setTextureCube(D,0):D.isData3DTexture?ve.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?ve.setTexture2DArray(D,0):ve.setTexture2D(D,0),b.unbindTexture()},this.resetState=function(){de=0,_e=0,Ee=null,b.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Nt._getUnpackColorSpace()}}const Md={type:"change"},bu={type:"start"},Fh={type:"end"},oo=new Fo,bd=new Ti,gb=Math.cos(70*Pv.DEG2RAD),hn=new ne,On=2*Math.PI,jt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xl=1e-6;class vb extends vy{constructor(e,t=null){super(e,t),this.state=jt.NONE,this.target=new ne,this.cursor=new ne,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xa.ROTATE,MIDDLE:xa.DOLLY,RIGHT:xa.PAN},this.touches={ONE:va.ROTATE,TWO:va.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new ne,this._lastQuaternion=new sr,this._lastTargetPosition=new ne,this._quat=new sr().setFromUnitVectors(e.up,new ne(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Jf,this._sphericalDelta=new Jf,this._scale=1,this._panOffset=new ne,this._rotateStart=new ht,this._rotateEnd=new ht,this._rotateDelta=new ht,this._panStart=new ht,this._panEnd=new ht,this._panDelta=new ht,this._dollyStart=new ht,this._dollyEnd=new ht,this._dollyDelta=new ht,this._dollyDirection=new ne,this._mouse=new ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=xb.bind(this),this._onPointerDown=yb.bind(this),this._onPointerUp=Sb.bind(this),this._onContextMenu=Rb.bind(this),this._onMouseWheel=bb.bind(this),this._onKeyDown=wb.bind(this),this._onTouchStart=Tb.bind(this),this._onTouchMove=Ab.bind(this),this._onMouseDown=Eb.bind(this),this._onMouseMove=Mb.bind(this),this._interceptControlDown=Cb.bind(this),this._interceptControlUp=Pb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=jt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Md),this.update(),this.state=jt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;hn.copy(t).sub(this.target),hn.applyQuaternion(this._quat),this._spherical.setFromVector3(hn),this.autoRotate&&this.state===jt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=On:i>Math.PI&&(i-=On),r<-Math.PI?r+=On:r>Math.PI&&(r-=On),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=l!=this._spherical.radius}if(hn.setFromSpherical(this._spherical),hn.applyQuaternion(this._quatInverse),t.copy(this.target).add(hn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){const u=hn.length();l=this._clampDistance(u*this._scale);const f=u-l;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),o=!!f}else if(this.object.isOrthographicCamera){const u=new ne(this._mouse.x,this._mouse.y,0);u.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=f!==this.object.zoom;const h=new ne(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(u),this.object.updateMatrixWorld(),l=hn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(oo.origin.copy(this.object.position),oo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(oo.direction))<gb?this.object.lookAt(this.target):(bd.setFromNormalAndCoplanarPoint(this.object.up,this.target),oo.intersectPlane(bd,this.target))))}else if(this.object.isOrthographicCamera){const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Xl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xl||this._lastTargetPosition.distanceToSquared(this.target)>Xl?(this.dispatchEvent(Md),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?On/60*this.autoRotateSpeed*e:On/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){hn.setFromMatrixColumn(t,0),hn.multiplyScalar(-e),this._panOffset.add(hn)}_panUp(e,t){this.screenSpacePanning===!0?hn.setFromMatrixColumn(t,1):(hn.setFromMatrixColumn(t,0),hn.crossVectors(this.object.up,hn)),hn.multiplyScalar(e),this._panOffset.add(hn)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;hn.copy(r).sub(this.target);let o=hn.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/i.clientHeight,this.object.matrix),this._panUp(2*t*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,o=t-i.top,l=i.width,u=i.height;this._mouse.x=r/l*2-1,this._mouse.y=-(o/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(On*this._rotateDelta.x/t.clientHeight),this._rotateUp(On*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(i*i+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),o=.5*(e.pageY+i.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(On*this._rotateDelta.x/t.clientHeight),this._rotateUp(On*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const l=(e.pageX+t.x)*.5,u=(e.pageY+t.y)*.5;this._updateZoomParameters(l,u)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ht,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function yb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function xb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Sb(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fh),this.state=jt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Eb(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case xa.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=jt.DOLLY;break;case xa.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=jt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=jt.ROTATE}break;case xa.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=jt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=jt.PAN}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(bu)}function Mb(n){switch(this.state){case jt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case jt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case jt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function bb(n){this.enabled===!1||this.enableZoom===!1||this.state!==jt.NONE||(n.preventDefault(),this.dispatchEvent(bu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Fh))}function wb(n){this.enabled!==!1&&this._handleKeyDown(n)}function Tb(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case va.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=jt.TOUCH_ROTATE;break;case va.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=jt.TOUCH_PAN;break;default:this.state=jt.NONE}break;case 2:switch(this.touches.TWO){case va.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=jt.TOUCH_DOLLY_PAN;break;case va.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=jt.TOUCH_DOLLY_ROTATE;break;default:this.state=jt.NONE}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(bu)}function Ab(n){switch(this._trackPointer(n),this.state){case jt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case jt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case jt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case jt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=jt.NONE}}function Rb(n){this.enabled!==!1&&n.preventDefault()}function Cb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Pb(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Db="modulepreload",Lb=function(n,e){return new URL(n,e).href},wd={},Ib=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let h=function(_){return Promise.all(_.map(g=>Promise.resolve(g).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};const l=document.getElementsByTagName("link"),u=document.querySelector("meta[property=csp-nonce]"),f=u?.nonce||u?.getAttribute("nonce");r=h(t.map(_=>{if(_=Lb(_,i),_ in wd)return;wd[_]=!0;const g=_.endsWith(".css"),p=g?'[rel="stylesheet"]':"";if(i)for(let T=l.length-1;T>=0;T--){const I=l[T];if(I.href===_&&(!g||I.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${_}"]${p}`))return;const y=document.createElement("link");if(y.rel=g?"stylesheet":Db,g||(y.as="script"),y.crossOrigin="",y.href=_,f&&y.setAttribute("nonce",f),document.head.appendChild(y),g)return new Promise((T,I)=>{y.addEventListener("load",T),y.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${_}`)))})}))}function o(l){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=l,window.dispatchEvent(u),!u.defaultPrevented)throw l}return r.then(l=>{for(const u of l||[])u.status==="rejected"&&o(u.reason);return e().catch(o)})};var Ub=(async function(n={}){var e,t=n,i=typeof window=="object",r=typeof WorkerGlobalScope<"u",o=typeof process=="object"&&process.versions?.node&&process.type!="renderer",l=!i&&!o&&!r;if(o){const{createRequire:a}=await Ib(async()=>{const{createRequire:s}=await Promise.resolve().then(()=>Uw);return{createRequire:s}},[],import.meta.url);var u=a(import.meta.url)}var f="./this.program",h=(a,s)=>{throw s},_=import.meta.url,g="";function p(a){return t.locateFile?t.locateFile(a,g):g+a}var y,T;if(o){if(!(typeof process=="object"&&process.versions?.node&&process.type!="renderer"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var I=process.versions.node,E=I.split(".").slice(0,3);if(E=E[0]*1e4+E[1]*100+E[2].split("-")[0]*1,E<16e4)throw new Error("This emscripten-generated code requires node v16.0.0 (detected v"+I+")");var v=u("fs");_.startsWith("file:")&&(g=u("path").dirname(u("url").fileURLToPath(_))+"/"),T=s=>{s=V(s)?new URL(s):s;var c=v.readFileSync(s);return M(Buffer.isBuffer(c)),c},y=async(s,c=!0)=>{s=V(s)?new URL(s):s;var d=v.readFileSync(s,c?void 0:"utf8");return M(c?Buffer.isBuffer(d):typeof d=="string"),d},process.argv.length>1&&(f=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),h=(s,c)=>{throw process.exitCode=s,c}}else if(l){if(typeof process=="object"&&process.versions?.node&&process.type!="renderer"||typeof window=="object"||typeof WorkerGlobalScope<"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)")}else if(i||r){try{g=new URL(".",_).href}catch{}if(!(typeof window=="object"||typeof WorkerGlobalScope<"u"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");r&&(T=a=>{var s=new XMLHttpRequest;return s.open("GET",a,!1),s.responseType="arraybuffer",s.send(null),new Uint8Array(s.response)}),y=async a=>{if(V(a))return new Promise((c,d)=>{var m=new XMLHttpRequest;m.open("GET",a,!0),m.responseType="arraybuffer",m.onload=()=>{if(m.status==200||m.status==0&&m.response){c(m.response);return}d(m.status)},m.onerror=d,m.send(null)});var s=await fetch(a,{credentials:"same-origin"});if(s.ok)return s.arrayBuffer();throw new Error(s.status+" : "+s.url)}}else throw new Error("environment detection error");var U=console.log.bind(console),O=console.error.bind(console);M(!l,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");var L;typeof WebAssembly!="object"&&O("no native wasm support detected");var N=!1;function M(a,s){a||lt("Assertion failed"+(s?": "+s:""))}var V=a=>a.startsWith("file://");function R(){var a=cl();M((a&3)==0),a==0&&(a+=4),ge[a>>2]=34821223,ge[a+4>>2]=2310721022,ge[0]=1668509029}function B(){if(!N){var a=cl();a==0&&(a+=4);var s=ge[a>>2],c=ge[a+4>>2];(s!=34821223||c!=2310721022)&&lt(`Stack overflow! Stack cookie has been overwritten at ${j(a)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${j(c)} ${j(s)}`),ge[0]!=1668509029&&lt("Runtime error: The application has corrupted its heap memory area (address zero)!")}}class F extends Error{}class W extends F{}class Y extends F{constructor(s){super(s),this.excPtr=s;const c=af(s);this.name=c[0],this.message=c[1]}}(()=>{var a=new Int16Array(1),s=new Int8Array(a.buffer);if(a[0]=25459,s[0]!==115||s[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();function ae(a){Object.getOwnPropertyDescriptor(t,a)||Object.defineProperty(t,a,{configurable:!0,set(){lt(`Attempt to set \`Module.${a}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function X(a){return()=>M(!1,`call to '${a}' via reference taken before Wasm module initialization`)}function q(a){Object.getOwnPropertyDescriptor(t,a)&&lt(`\`Module.${a}\` was supplied but \`${a}\` not included in INCOMING_MODULE_JS_API`)}function de(a){return a==="FS_createPath"||a==="FS_createDataFile"||a==="FS_createPreloadedFile"||a==="FS_unlink"||a==="addRunDependency"||a==="FS_createLazyFile"||a==="FS_createDevice"||a==="removeRunDependency"}function _e(a,s){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,a)&&Object.defineProperty(globalThis,a,{configurable:!0,get(){s()}})}function Ee(a,s){_e(a,()=>{Le(`\`${a}\` is not longer defined by emscripten. ${s}`)})}Ee("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),Ee("asm","Please use wasmExports instead");function pe(a){_e(a,()=>{var s=`\`${a}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,c=a;c.startsWith("_")||(c="$"+a),s+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${c}')`,de(a)&&(s+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Le(s)}),me(a)}function me(a){Object.getOwnPropertyDescriptor(t,a)||Object.defineProperty(t,a,{configurable:!0,get(){var s=`'${a}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;de(a)&&(s+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),lt(s)}})}var Se,je,He,ot,rt,tt,ue,te,ge,he,Ae,Ge,Ct,at=!1;function vt(){var a=He.buffer;ot=new Int8Array(a),tt=new Int16Array(a),rt=new Uint8Array(a),ue=new Uint16Array(a),te=new Int32Array(a),ge=new Uint32Array(a),he=new Float32Array(a),Ae=new Float64Array(a),Ge=new BigInt64Array(a),Ct=new BigUint64Array(a)}M(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support");function Wt(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)it(t.preRun.shift());ae("preRun"),Je(Qe)}function pt(){M(!at),at=!0,B(),!t.noFSInit&&!w.initialized&&w.init(),vr.__wasm_call_ctors(),w.ignorePermissions=!1}function $t(){if(B(),t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)Ne(t.postRun.shift());ae("postRun"),Je(Be)}var Xt=0,sn=null,Bt={},Ut=null;function Z(a){Xt++,t.monitorRunDependencies?.(Xt),a?(M(!Bt[a]),Bt[a]=1,Ut===null&&typeof setInterval<"u"&&(Ut=setInterval(()=>{if(N){clearInterval(Ut),Ut=null;return}var s=!1;for(var c in Bt)s||(s=!0,O("still waiting on run dependencies:")),O(`dependency: ${c}`);s&&O("(end of list)")},1e4))):O("warning: run dependency added without ID")}function et(a){if(Xt--,t.monitorRunDependencies?.(Xt),a?(M(Bt[a]),delete Bt[a]):O("warning: run dependency removed without ID"),Xt==0&&(Ut!==null&&(clearInterval(Ut),Ut=null),sn)){var s=sn;sn=null,s()}}function lt(a){t.onAbort?.(a),a="Aborted("+a+")",O(a),N=!0;var s=new WebAssembly.RuntimeError(a);throw je?.(s),s}function k(a,s){return(...c)=>{M(at,`native function \`${a}\` called before runtime initialization`);var d=vr[a];return M(d,`exported native function \`${a}\` not found`),M(c.length<=s,`native function \`${a}\` called with ${c.length} args but expects ${s}`),d(...c)}}var b;function re(){return t.locateFile?p("mujoco.wasm"):new URL(""+new URL("mujoco-CGsuVDfV.wasm",import.meta.url).href,import.meta.url).href}function ce(a){if(a==b&&L)return new Uint8Array(L);if(T)return T(a);throw"both async and sync fetching of the wasm failed"}async function ve(a){if(!L)try{var s=await y(a);return new Uint8Array(s)}catch{}return ce(a)}async function De(a,s){try{var c=await ve(a),d=await WebAssembly.instantiate(c,s);return d}catch(m){O(`failed to asynchronously prepare wasm: ${m}`),V(b)&&O(`warning: Loading from a file URI (${b}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),lt(m)}}async function Ue(a,s,c){if(!a&&typeof WebAssembly.instantiateStreaming=="function"&&!V(s)&&!o)try{var d=fetch(s,{credentials:"same-origin"}),m=await WebAssembly.instantiateStreaming(d,c);return m}catch(x){O(`wasm streaming compile failed: ${x}`),O("falling back to ArrayBuffer instantiation")}return De(s,c)}function ye(){return{env:gf,wasi_snapshot_preview1:gf}}async function be(){function a(A,P){return vr=A.exports,He=vr.memory,M(He,"memory not found in wasm exports"),vt(),Zr=vr.__indirect_function_table,M(Zr,"table not found in wasm exports"),Hm(vr),et("wasm-instantiate"),vr}Z("wasm-instantiate");var s=t;function c(A){return M(t===s,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),s=null,a(A.instance)}var d=ye();if(t.instantiateWasm)return new Promise((A,P)=>{try{t.instantiateWasm(d,(z,ee)=>{A(a(z,ee))})}catch(z){O(`Module.instantiateWasm callback failed with error: ${z}`),P(z)}});b??=re();var m=await Ue(L,b,d),x=c(m);return x}class Fe{name="ExitStatus";constructor(s){this.message=`Program terminated with exit(${s})`,this.status=s}}var Je=a=>{for(;a.length>0;)a.shift()(t)},Be=[],Ne=a=>Be.push(a),Qe=[],it=a=>Qe.push(a),ct=!0,j=a=>(M(typeof a=="number"),a>>>=0,"0x"+a.toString(16).padStart(8,"0")),ie=a=>ff(a),$=()=>hf(),Le=a=>{Le.shown||={},Le.shown[a]||(Le.shown[a]=1,o&&(a="warning: "+a),O(a))},ze=typeof TextDecoder<"u"?new TextDecoder:void 0,Te=(a,s=0,c=NaN)=>{for(var d=s+c,m=s;a[m]&&!(m>=d);)++m;if(m-s>16&&a.buffer&&ze)return ze.decode(a.subarray(s,m));for(var x="";s<m;){var A=a[s++];if(!(A&128)){x+=String.fromCharCode(A);continue}var P=a[s++]&63;if((A&224)==192){x+=String.fromCharCode((A&31)<<6|P);continue}var z=a[s++]&63;if((A&240)==224?A=(A&15)<<12|P<<6|z:((A&248)!=240&&Le("Invalid UTF-8 leading byte "+j(A)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),A=(A&7)<<18|P<<12|z<<6|a[s++]&63),A<65536)x+=String.fromCharCode(A);else{var ee=A-65536;x+=String.fromCharCode(55296|ee>>10,56320|ee&1023)}}return x},qe=(a,s)=>(M(typeof a=="number",`UTF8ToString expects a number (got ${typeof a})`),a?Te(rt,a,s):""),Ke=(a,s,c,d)=>lt(`Assertion failed: ${qe(a)}, at: `+[s?qe(s):"unknown filename",c,d?qe(d):"unknown function"]),Tt=[],Pt=0,Sn=a=>{var s=new yi(a);return s.get_caught()||(s.set_caught(!0),Pt--),s.set_rethrown(!1),Tt.push(s),Ls(a),_f(a)},An=()=>{if(!Tt.length)return 0;var a=Tt[Tt.length-1];return Ls(a.excPtr),a.excPtr},Fn=0,zr=()=>{Pe(0,0),M(Tt.length>0);var a=Tt.pop();ul(a.excPtr),Fn=0};class yi{constructor(s){this.excPtr=s,this.ptr=s-24}set_type(s){ge[this.ptr+4>>2]=s}get_type(){return ge[this.ptr+4>>2]}set_destructor(s){ge[this.ptr+8>>2]=s}get_destructor(){return ge[this.ptr+8>>2]}set_caught(s){s=s?1:0,ot[this.ptr+12]=s}get_caught(){return ot[this.ptr+12]!=0}set_rethrown(s){s=s?1:0,ot[this.ptr+13]=s}get_rethrown(){return ot[this.ptr+13]!=0}init(s,c){this.set_adjusted_ptr(0),this.set_type(s),this.set_destructor(c)}set_adjusted_ptr(s){ge[this.ptr+16>>2]=s}get_adjusted_ptr(){return ge[this.ptr+16>>2]}}var ai=a=>cf(a),cr=a=>{var s=Fn?.excPtr;if(!s)return ai(0),0;var c=new yi(s);c.set_adjusted_ptr(s);var d=c.get_type();if(!d)return ai(0),s;for(var m of a){if(m===0||m===d)break;var x=c.ptr+16;if(mf(m,d,x))return ai(m),s}return ai(d),s},ur=()=>cr([]),Gr=a=>cr([a]),qn=()=>{var a=Tt.pop();a||lt("no exception to throw");var s=a.excPtr;throw a.get_rethrown()||(Tt.push(a),a.set_rethrown(!0),a.set_caught(!1),Pt++),Fn=new Y(s),Fn},Ni=a=>{if(a){var s=new yi(a);Tt.push(s),s.set_rethrown(!0),qn()}},Hr=(a,s,c)=>{var d=new yi(a);throw d.init(s,c),Fn=new Y(a),Pt++,Fn},Yi=()=>Pt,si=a=>{throw Fn||(Fn=new Y(a)),Fn},kt={isAbs:a=>a.charAt(0)==="/",splitPath:a=>{var s=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return s.exec(a).slice(1)},normalizeArray:(a,s)=>{for(var c=0,d=a.length-1;d>=0;d--){var m=a[d];m==="."?a.splice(d,1):m===".."?(a.splice(d,1),c++):c&&(a.splice(d,1),c--)}if(s)for(;c;c--)a.unshift("..");return a},normalize:a=>{var s=kt.isAbs(a),c=a.slice(-1)==="/";return a=kt.normalizeArray(a.split("/").filter(d=>!!d),!s).join("/"),!a&&!s&&(a="."),a&&c&&(a+="/"),(s?"/":"")+a},dirname:a=>{var s=kt.splitPath(a),c=s[0],d=s[1];return!c&&!d?".":(d&&(d=d.slice(0,-1)),c+d)},basename:a=>a&&a.match(/([^\/]+|\/)\/*$/)[1],join:(...a)=>kt.normalize(a.join("/")),join2:(a,s)=>kt.normalize(a+"/"+s)},xi=()=>{if(o){var a=u("crypto");return s=>a.randomFillSync(s)}return s=>crypto.getRandomValues(s)},fr=a=>{(fr=xi())(a)},oi={resolve:(...a)=>{for(var s="",c=!1,d=a.length-1;d>=-1&&!c;d--){var m=d>=0?a[d]:w.cwd();if(typeof m!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!m)return"";s=m+"/"+s,c=kt.isAbs(m)}return s=kt.normalizeArray(s.split("/").filter(x=>!!x),!c).join("/"),(c?"/":"")+s||"."},relative:(a,s)=>{a=oi.resolve(a).slice(1),s=oi.resolve(s).slice(1);function c(ee){for(var le=0;le<ee.length&&ee[le]==="";le++);for(var xe=ee.length-1;xe>=0&&ee[xe]==="";xe--);return le>xe?[]:ee.slice(le,xe-le+1)}for(var d=c(a.split("/")),m=c(s.split("/")),x=Math.min(d.length,m.length),A=x,P=0;P<x;P++)if(d[P]!==m[P]){A=P;break}for(var z=[],P=A;P<d.length;P++)z.push("..");return z=z.concat(m.slice(A)),z.join("/")}},dr=[],Si=a=>{for(var s=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);d<=127?s++:d<=2047?s+=2:d>=55296&&d<=57343?(s+=4,++c):s+=3}return s},Vr=(a,s,c,d)=>{if(M(typeof a=="string",`stringToUTF8Array expects a string (got ${typeof a})`),!(d>0))return 0;for(var m=c,x=c+d-1,A=0;A<a.length;++A){var P=a.codePointAt(A);if(P<=127){if(c>=x)break;s[c++]=P}else if(P<=2047){if(c+1>=x)break;s[c++]=192|P>>6,s[c++]=128|P&63}else if(P<=65535){if(c+2>=x)break;s[c++]=224|P>>12,s[c++]=128|P>>6&63,s[c++]=128|P&63}else{if(c+3>=x)break;P>1114111&&Le("Invalid Unicode code point "+j(P)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),s[c++]=240|P>>18,s[c++]=128|P>>12&63,s[c++]=128|P>>6&63,s[c++]=128|P&63,A++}}return s[c]=0,c-m},ji=(a,s,c)=>{var d=Si(a)+1,m=new Array(d),x=Vr(a,m,0,m.length);return m.length=x,m},hr=()=>{if(!dr.length){var a=null;if(o){var s=256,c=Buffer.alloc(s),d=0,m=process.stdin.fd;try{d=v.readSync(m,c,0,s)}catch(x){if(x.toString().includes("EOF"))d=0;else throw x}d>0&&(a=c.slice(0,d).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(a=window.prompt("Input: "),a!==null&&(a+=`
`));if(!a)return null;dr=ji(a)}return dr.shift()},D={ttys:[],init(){},shutdown(){},register(a,s){D.ttys[a]={input:[],output:[],ops:s},w.registerDevice(a,D.stream_ops)},stream_ops:{open(a){var s=D.ttys[a.node.rdev];if(!s)throw new w.ErrnoError(43);a.tty=s,a.seekable=!1},close(a){a.tty.ops.fsync(a.tty)},fsync(a){a.tty.ops.fsync(a.tty)},read(a,s,c,d,m){if(!a.tty||!a.tty.ops.get_char)throw new w.ErrnoError(60);for(var x=0,A=0;A<d;A++){var P;try{P=a.tty.ops.get_char(a.tty)}catch{throw new w.ErrnoError(29)}if(P===void 0&&x===0)throw new w.ErrnoError(6);if(P==null)break;x++,s[c+A]=P}return x&&(a.node.atime=Date.now()),x},write(a,s,c,d,m){if(!a.tty||!a.tty.ops.put_char)throw new w.ErrnoError(60);try{for(var x=0;x<d;x++)a.tty.ops.put_char(a.tty,s[c+x])}catch{throw new w.ErrnoError(29)}return d&&(a.node.mtime=a.node.ctime=Date.now()),x}},default_tty_ops:{get_char(a){return hr()},put_char(a,s){s===null||s===10?(U(Te(a.output)),a.output=[]):s!=0&&a.output.push(s)},fsync(a){a.output?.length>0&&(U(Te(a.output)),a.output=[])},ioctl_tcgets(a){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(a,s,c){return 0},ioctl_tiocgwinsz(a){return[24,80]}},default_tty1_ops:{put_char(a,s){s===null||s===10?(O(Te(a.output)),a.output=[]):s!=0&&a.output.push(s)},fsync(a){a.output?.length>0&&(O(Te(a.output)),a.output=[])}}},K=a=>{lt("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")},Q={ops_table:null,mount(a){return Q.createNode(null,"/",16895,0)},createNode(a,s,c,d){if(w.isBlkdev(c)||w.isFIFO(c))throw new w.ErrnoError(63);Q.ops_table||={dir:{node:{getattr:Q.node_ops.getattr,setattr:Q.node_ops.setattr,lookup:Q.node_ops.lookup,mknod:Q.node_ops.mknod,rename:Q.node_ops.rename,unlink:Q.node_ops.unlink,rmdir:Q.node_ops.rmdir,readdir:Q.node_ops.readdir,symlink:Q.node_ops.symlink},stream:{llseek:Q.stream_ops.llseek}},file:{node:{getattr:Q.node_ops.getattr,setattr:Q.node_ops.setattr},stream:{llseek:Q.stream_ops.llseek,read:Q.stream_ops.read,write:Q.stream_ops.write,mmap:Q.stream_ops.mmap,msync:Q.stream_ops.msync}},link:{node:{getattr:Q.node_ops.getattr,setattr:Q.node_ops.setattr,readlink:Q.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Q.node_ops.getattr,setattr:Q.node_ops.setattr},stream:w.chrdev_stream_ops}};var m=w.createNode(a,s,c,d);return w.isDir(m.mode)?(m.node_ops=Q.ops_table.dir.node,m.stream_ops=Q.ops_table.dir.stream,m.contents={}):w.isFile(m.mode)?(m.node_ops=Q.ops_table.file.node,m.stream_ops=Q.ops_table.file.stream,m.usedBytes=0,m.contents=null):w.isLink(m.mode)?(m.node_ops=Q.ops_table.link.node,m.stream_ops=Q.ops_table.link.stream):w.isChrdev(m.mode)&&(m.node_ops=Q.ops_table.chrdev.node,m.stream_ops=Q.ops_table.chrdev.stream),m.atime=m.mtime=m.ctime=Date.now(),a&&(a.contents[s]=m,a.atime=a.mtime=a.ctime=m.atime),m},getFileDataAsTypedArray(a){return a.contents?a.contents.subarray?a.contents.subarray(0,a.usedBytes):new Uint8Array(a.contents):new Uint8Array(0)},expandFileStorage(a,s){var c=a.contents?a.contents.length:0;if(!(c>=s)){var d=1024*1024;s=Math.max(s,c*(c<d?2:1.125)>>>0),c!=0&&(s=Math.max(s,256));var m=a.contents;a.contents=new Uint8Array(s),a.usedBytes>0&&a.contents.set(m.subarray(0,a.usedBytes),0)}},resizeFileStorage(a,s){if(a.usedBytes!=s)if(s==0)a.contents=null,a.usedBytes=0;else{var c=a.contents;a.contents=new Uint8Array(s),c&&a.contents.set(c.subarray(0,Math.min(s,a.usedBytes))),a.usedBytes=s}},node_ops:{getattr(a){var s={};return s.dev=w.isChrdev(a.mode)?a.id:1,s.ino=a.id,s.mode=a.mode,s.nlink=1,s.uid=0,s.gid=0,s.rdev=a.rdev,w.isDir(a.mode)?s.size=4096:w.isFile(a.mode)?s.size=a.usedBytes:w.isLink(a.mode)?s.size=a.link.length:s.size=0,s.atime=new Date(a.atime),s.mtime=new Date(a.mtime),s.ctime=new Date(a.ctime),s.blksize=4096,s.blocks=Math.ceil(s.size/s.blksize),s},setattr(a,s){for(const c of["mode","atime","mtime","ctime"])s[c]!=null&&(a[c]=s[c]);s.size!==void 0&&Q.resizeFileStorage(a,s.size)},lookup(a,s){throw new w.ErrnoError(44)},mknod(a,s,c,d){return Q.createNode(a,s,c,d)},rename(a,s,c){var d;try{d=w.lookupNode(s,c)}catch{}if(d){if(w.isDir(a.mode))for(var m in d.contents)throw new w.ErrnoError(55);w.hashRemoveNode(d)}delete a.parent.contents[a.name],s.contents[c]=a,a.name=c,s.ctime=s.mtime=a.parent.ctime=a.parent.mtime=Date.now()},unlink(a,s){delete a.contents[s],a.ctime=a.mtime=Date.now()},rmdir(a,s){var c=w.lookupNode(a,s);for(var d in c.contents)throw new w.ErrnoError(55);delete a.contents[s],a.ctime=a.mtime=Date.now()},readdir(a){return[".","..",...Object.keys(a.contents)]},symlink(a,s,c){var d=Q.createNode(a,s,41471,0);return d.link=c,d},readlink(a){if(!w.isLink(a.mode))throw new w.ErrnoError(28);return a.link}},stream_ops:{read(a,s,c,d,m){var x=a.node.contents;if(m>=a.node.usedBytes)return 0;var A=Math.min(a.node.usedBytes-m,d);if(M(A>=0),A>8&&x.subarray)s.set(x.subarray(m,m+A),c);else for(var P=0;P<A;P++)s[c+P]=x[m+P];return A},write(a,s,c,d,m,x){if(M(!(s instanceof ArrayBuffer)),s.buffer===ot.buffer&&(x=!1),!d)return 0;var A=a.node;if(A.mtime=A.ctime=Date.now(),s.subarray&&(!A.contents||A.contents.subarray)){if(x)return M(m===0,"canOwn must imply no weird position inside the file"),A.contents=s.subarray(c,c+d),A.usedBytes=d,d;if(A.usedBytes===0&&m===0)return A.contents=s.slice(c,c+d),A.usedBytes=d,d;if(m+d<=A.usedBytes)return A.contents.set(s.subarray(c,c+d),m),d}if(Q.expandFileStorage(A,m+d),A.contents.subarray&&s.subarray)A.contents.set(s.subarray(c,c+d),m);else for(var P=0;P<d;P++)A.contents[m+P]=s[c+P];return A.usedBytes=Math.max(A.usedBytes,m+d),d},llseek(a,s,c){var d=s;if(c===1?d+=a.position:c===2&&w.isFile(a.node.mode)&&(d+=a.node.usedBytes),d<0)throw new w.ErrnoError(28);return d},mmap(a,s,c,d,m){if(!w.isFile(a.node.mode))throw new w.ErrnoError(43);var x,A,P=a.node.contents;if(!(m&2)&&P&&P.buffer===ot.buffer)A=!1,x=P.byteOffset;else{if(A=!0,x=K(),!x)throw new w.ErrnoError(48);P&&((c>0||c+s<P.length)&&(P.subarray?P=P.subarray(c,c+s):P=Array.prototype.slice.call(P,c,c+s)),ot.set(P,x))}return{ptr:x,allocated:A}},msync(a,s,c,d,m){return Q.stream_ops.write(a,s,0,d,c,!1),0}}},oe=async a=>{var s=await y(a);return M(s,`Loading data file "${a}" failed (no arrayBuffer).`),new Uint8Array(s)},se=(...a)=>w.createDataFile(...a),Oe=a=>{for(var s=a;;){if(!Bt[a])return a;a=s+Math.random()}},$e=[],ke=(a,s,c,d)=>{typeof Browser<"u"&&Browser.init();var m=!1;return $e.forEach(x=>{m||x.canHandle(s)&&(x.handle(a,s,c,d),m=!0)}),m},We=(a,s,c,d,m,x,A,P,z,ee)=>{var le=s?oi.resolve(kt.join2(a,s)):a,xe=Oe(`cp ${le}`);function we(Me){function Ce(st){ee?.(),P||se(a,s,st,d,m,z),x?.(),et(xe)}ke(Me,le,Ce,()=>{A?.(),et(xe)})||Ce(Me)}Z(xe),typeof c=="string"?oe(c).then(we,A):we(c)},Ze=a=>{var s={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},c=s[a];if(typeof c>"u")throw new Error(`Unknown file open mode: ${a}`);return c},mt=(a,s)=>{var c=0;return a&&(c|=365),s&&(c|=146),c},Et=a=>qe(lf(a)),Ye={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},w={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class extends Error{name="ErrnoError";constructor(a){super(at?Et(a):""),this.errno=a;for(var s in Ye)if(Ye[s]===a){this.code=s;break}}},FSStream:class{shared={};get object(){return this.node}set object(a){this.node=a}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(a){this.shared.flags=a}get position(){return this.shared.position}set position(a){this.shared.position=a}},FSNode:class{node_ops={};stream_ops={};readMode=365;writeMode=146;mounted=null;constructor(a,s,c,d){a||(a=this),this.parent=a,this.mount=a.mount,this.id=w.nextInode++,this.name=s,this.mode=c,this.rdev=d,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(a){a?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(a){a?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return w.isDir(this.mode)}get isDevice(){return w.isChrdev(this.mode)}},lookupPath(a,s={}){if(!a)throw new w.ErrnoError(44);s.follow_mount??=!0,kt.isAbs(a)||(a=w.cwd()+"/"+a);e:for(var c=0;c<40;c++){for(var d=a.split("/").filter(ee=>!!ee),m=w.root,x="/",A=0;A<d.length;A++){var P=A===d.length-1;if(P&&s.parent)break;if(d[A]!=="."){if(d[A]===".."){if(x=kt.dirname(x),w.isRoot(m)){a=x+"/"+d.slice(A+1).join("/");continue e}else m=m.parent;continue}x=kt.join2(x,d[A]);try{m=w.lookupNode(m,d[A])}catch(ee){if(ee?.errno===44&&P&&s.noent_okay)return{path:x};throw ee}if(w.isMountpoint(m)&&(!P||s.follow_mount)&&(m=m.mounted.root),w.isLink(m.mode)&&(!P||s.follow)){if(!m.node_ops.readlink)throw new w.ErrnoError(52);var z=m.node_ops.readlink(m);kt.isAbs(z)||(z=kt.dirname(x)+"/"+z),a=z+"/"+d.slice(A+1).join("/");continue e}}}return{path:x,node:m}}throw new w.ErrnoError(32)},getPath(a){for(var s;;){if(w.isRoot(a)){var c=a.mount.mountpoint;return s?c[c.length-1]!=="/"?`${c}/${s}`:c+s:c}s=s?`${a.name}/${s}`:a.name,a=a.parent}},hashName(a,s){for(var c=0,d=0;d<s.length;d++)c=(c<<5)-c+s.charCodeAt(d)|0;return(a+c>>>0)%w.nameTable.length},hashAddNode(a){var s=w.hashName(a.parent.id,a.name);a.name_next=w.nameTable[s],w.nameTable[s]=a},hashRemoveNode(a){var s=w.hashName(a.parent.id,a.name);if(w.nameTable[s]===a)w.nameTable[s]=a.name_next;else for(var c=w.nameTable[s];c;){if(c.name_next===a){c.name_next=a.name_next;break}c=c.name_next}},lookupNode(a,s){var c=w.mayLookup(a);if(c)throw new w.ErrnoError(c);for(var d=w.hashName(a.id,s),m=w.nameTable[d];m;m=m.name_next){var x=m.name;if(m.parent.id===a.id&&x===s)return m}return w.lookup(a,s)},createNode(a,s,c,d){M(typeof a=="object");var m=new w.FSNode(a,s,c,d);return w.hashAddNode(m),m},destroyNode(a){w.hashRemoveNode(a)},isRoot(a){return a===a.parent},isMountpoint(a){return!!a.mounted},isFile(a){return(a&61440)===32768},isDir(a){return(a&61440)===16384},isLink(a){return(a&61440)===40960},isChrdev(a){return(a&61440)===8192},isBlkdev(a){return(a&61440)===24576},isFIFO(a){return(a&61440)===4096},isSocket(a){return(a&49152)===49152},flagsToPermissionString(a){var s=["r","w","rw"][a&3];return a&512&&(s+="w"),s},nodePermissions(a,s){return w.ignorePermissions?0:s.includes("r")&&!(a.mode&292)||s.includes("w")&&!(a.mode&146)||s.includes("x")&&!(a.mode&73)?2:0},mayLookup(a){if(!w.isDir(a.mode))return 54;var s=w.nodePermissions(a,"x");return s||(a.node_ops.lookup?0:2)},mayCreate(a,s){if(!w.isDir(a.mode))return 54;try{var c=w.lookupNode(a,s);return 20}catch{}return w.nodePermissions(a,"wx")},mayDelete(a,s,c){var d;try{d=w.lookupNode(a,s)}catch(x){return x.errno}var m=w.nodePermissions(a,"wx");if(m)return m;if(c){if(!w.isDir(d.mode))return 54;if(w.isRoot(d)||w.getPath(d)===w.cwd())return 10}else if(w.isDir(d.mode))return 31;return 0},mayOpen(a,s){return a?w.isLink(a.mode)?32:w.isDir(a.mode)&&(w.flagsToPermissionString(s)!=="r"||s&576)?31:w.nodePermissions(a,w.flagsToPermissionString(s)):44},checkOpExists(a,s){if(!a)throw new w.ErrnoError(s);return a},MAX_OPEN_FDS:4096,nextfd(){for(var a=0;a<=w.MAX_OPEN_FDS;a++)if(!w.streams[a])return a;throw new w.ErrnoError(33)},getStreamChecked(a){var s=w.getStream(a);if(!s)throw new w.ErrnoError(8);return s},getStream:a=>w.streams[a],createStream(a,s=-1){return M(s>=-1),a=Object.assign(new w.FSStream,a),s==-1&&(s=w.nextfd()),a.fd=s,w.streams[s]=a,a},closeStream(a){w.streams[a]=null},dupStream(a,s=-1){var c=w.createStream(a,s);return c.stream_ops?.dup?.(c),c},doSetAttr(a,s,c){var d=a?.stream_ops.setattr,m=d?a:s;d??=s.node_ops.setattr,w.checkOpExists(d,63),d(m,c)},chrdev_stream_ops:{open(a){var s=w.getDevice(a.node.rdev);a.stream_ops=s.stream_ops,a.stream_ops.open?.(a)},llseek(){throw new w.ErrnoError(70)}},major:a=>a>>8,minor:a=>a&255,makedev:(a,s)=>a<<8|s,registerDevice(a,s){w.devices[a]={stream_ops:s}},getDevice:a=>w.devices[a],getMounts(a){for(var s=[],c=[a];c.length;){var d=c.pop();s.push(d),c.push(...d.mounts)}return s},syncfs(a,s){typeof a=="function"&&(s=a,a=!1),w.syncFSRequests++,w.syncFSRequests>1&&O(`warning: ${w.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var c=w.getMounts(w.root.mount),d=0;function m(A){return M(w.syncFSRequests>0),w.syncFSRequests--,s(A)}function x(A){if(A)return x.errored?void 0:(x.errored=!0,m(A));++d>=c.length&&m(null)}c.forEach(A=>{if(!A.type.syncfs)return x(null);A.type.syncfs(A,a,x)})},mount(a,s,c){if(typeof a=="string")throw a;var d=c==="/",m=!c,x;if(d&&w.root)throw new w.ErrnoError(10);if(!d&&!m){var A=w.lookupPath(c,{follow_mount:!1});if(c=A.path,x=A.node,w.isMountpoint(x))throw new w.ErrnoError(10);if(!w.isDir(x.mode))throw new w.ErrnoError(54)}var P={type:a,opts:s,mountpoint:c,mounts:[]},z=a.mount(P);return z.mount=P,P.root=z,d?w.root=z:x&&(x.mounted=P,x.mount&&x.mount.mounts.push(P)),z},unmount(a){var s=w.lookupPath(a,{follow_mount:!1});if(!w.isMountpoint(s.node))throw new w.ErrnoError(28);var c=s.node,d=c.mounted,m=w.getMounts(d);Object.keys(w.nameTable).forEach(A=>{for(var P=w.nameTable[A];P;){var z=P.name_next;m.includes(P.mount)&&w.destroyNode(P),P=z}}),c.mounted=null;var x=c.mount.mounts.indexOf(d);M(x!==-1),c.mount.mounts.splice(x,1)},lookup(a,s){return a.node_ops.lookup(a,s)},mknod(a,s,c){var d=w.lookupPath(a,{parent:!0}),m=d.node,x=kt.basename(a);if(!x)throw new w.ErrnoError(28);if(x==="."||x==="..")throw new w.ErrnoError(20);var A=w.mayCreate(m,x);if(A)throw new w.ErrnoError(A);if(!m.node_ops.mknod)throw new w.ErrnoError(63);return m.node_ops.mknod(m,x,s,c)},statfs(a){return w.statfsNode(w.lookupPath(a,{follow:!0}).node)},statfsStream(a){return w.statfsNode(a.node)},statfsNode(a){var s={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:w.nextInode,ffree:w.nextInode-1,fsid:42,flags:2,namelen:255};return a.node_ops.statfs&&Object.assign(s,a.node_ops.statfs(a.mount.opts.root)),s},create(a,s=438){return s&=4095,s|=32768,w.mknod(a,s,0)},mkdir(a,s=511){return s&=1023,s|=16384,w.mknod(a,s,0)},mkdirTree(a,s){var c=a.split("/"),d="";for(var m of c)if(m){(d||kt.isAbs(a))&&(d+="/"),d+=m;try{w.mkdir(d,s)}catch(x){if(x.errno!=20)throw x}}},mkdev(a,s,c){return typeof c>"u"&&(c=s,s=438),s|=8192,w.mknod(a,s,c)},symlink(a,s){if(!oi.resolve(a))throw new w.ErrnoError(44);var c=w.lookupPath(s,{parent:!0}),d=c.node;if(!d)throw new w.ErrnoError(44);var m=kt.basename(s),x=w.mayCreate(d,m);if(x)throw new w.ErrnoError(x);if(!d.node_ops.symlink)throw new w.ErrnoError(63);return d.node_ops.symlink(d,m,a)},rename(a,s){var c=kt.dirname(a),d=kt.dirname(s),m=kt.basename(a),x=kt.basename(s),A,P,z;if(A=w.lookupPath(a,{parent:!0}),P=A.node,A=w.lookupPath(s,{parent:!0}),z=A.node,!P||!z)throw new w.ErrnoError(44);if(P.mount!==z.mount)throw new w.ErrnoError(75);var ee=w.lookupNode(P,m),le=oi.relative(a,d);if(le.charAt(0)!==".")throw new w.ErrnoError(28);if(le=oi.relative(s,c),le.charAt(0)!==".")throw new w.ErrnoError(55);var xe;try{xe=w.lookupNode(z,x)}catch{}if(ee!==xe){var we=w.isDir(ee.mode),Me=w.mayDelete(P,m,we);if(Me)throw new w.ErrnoError(Me);if(Me=xe?w.mayDelete(z,x,we):w.mayCreate(z,x),Me)throw new w.ErrnoError(Me);if(!P.node_ops.rename)throw new w.ErrnoError(63);if(w.isMountpoint(ee)||xe&&w.isMountpoint(xe))throw new w.ErrnoError(10);if(z!==P&&(Me=w.nodePermissions(P,"w"),Me))throw new w.ErrnoError(Me);w.hashRemoveNode(ee);try{P.node_ops.rename(ee,z,x),ee.parent=z}catch(Ce){throw Ce}finally{w.hashAddNode(ee)}}},rmdir(a){var s=w.lookupPath(a,{parent:!0}),c=s.node,d=kt.basename(a),m=w.lookupNode(c,d),x=w.mayDelete(c,d,!0);if(x)throw new w.ErrnoError(x);if(!c.node_ops.rmdir)throw new w.ErrnoError(63);if(w.isMountpoint(m))throw new w.ErrnoError(10);c.node_ops.rmdir(c,d),w.destroyNode(m)},readdir(a){var s=w.lookupPath(a,{follow:!0}),c=s.node,d=w.checkOpExists(c.node_ops.readdir,54);return d(c)},unlink(a){var s=w.lookupPath(a,{parent:!0}),c=s.node;if(!c)throw new w.ErrnoError(44);var d=kt.basename(a),m=w.lookupNode(c,d),x=w.mayDelete(c,d,!1);if(x)throw new w.ErrnoError(x);if(!c.node_ops.unlink)throw new w.ErrnoError(63);if(w.isMountpoint(m))throw new w.ErrnoError(10);c.node_ops.unlink(c,d),w.destroyNode(m)},readlink(a){var s=w.lookupPath(a),c=s.node;if(!c)throw new w.ErrnoError(44);if(!c.node_ops.readlink)throw new w.ErrnoError(28);return c.node_ops.readlink(c)},stat(a,s){var c=w.lookupPath(a,{follow:!s}),d=c.node,m=w.checkOpExists(d.node_ops.getattr,63);return m(d)},fstat(a){var s=w.getStreamChecked(a),c=s.node,d=s.stream_ops.getattr,m=d?s:c;return d??=c.node_ops.getattr,w.checkOpExists(d,63),d(m)},lstat(a){return w.stat(a,!0)},doChmod(a,s,c,d){w.doSetAttr(a,s,{mode:c&4095|s.mode&-4096,ctime:Date.now(),dontFollow:d})},chmod(a,s,c){var d;if(typeof a=="string"){var m=w.lookupPath(a,{follow:!c});d=m.node}else d=a;w.doChmod(null,d,s,c)},lchmod(a,s){w.chmod(a,s,!0)},fchmod(a,s){var c=w.getStreamChecked(a);w.doChmod(c,c.node,s,!1)},doChown(a,s,c){w.doSetAttr(a,s,{timestamp:Date.now(),dontFollow:c})},chown(a,s,c,d){var m;if(typeof a=="string"){var x=w.lookupPath(a,{follow:!d});m=x.node}else m=a;w.doChown(null,m,d)},lchown(a,s,c){w.chown(a,s,c,!0)},fchown(a,s,c){var d=w.getStreamChecked(a);w.doChown(d,d.node,!1)},doTruncate(a,s,c){if(w.isDir(s.mode))throw new w.ErrnoError(31);if(!w.isFile(s.mode))throw new w.ErrnoError(28);var d=w.nodePermissions(s,"w");if(d)throw new w.ErrnoError(d);w.doSetAttr(a,s,{size:c,timestamp:Date.now()})},truncate(a,s){if(s<0)throw new w.ErrnoError(28);var c;if(typeof a=="string"){var d=w.lookupPath(a,{follow:!0});c=d.node}else c=a;w.doTruncate(null,c,s)},ftruncate(a,s){var c=w.getStreamChecked(a);if(s<0||(c.flags&2097155)===0)throw new w.ErrnoError(28);w.doTruncate(c,c.node,s)},utime(a,s,c){var d=w.lookupPath(a,{follow:!0}),m=d.node,x=w.checkOpExists(m.node_ops.setattr,63);x(m,{atime:s,mtime:c})},open(a,s,c=438){if(a==="")throw new w.ErrnoError(44);s=typeof s=="string"?Ze(s):s,s&64?c=c&4095|32768:c=0;var d,m;if(typeof a=="object")d=a;else{m=a.endsWith("/");var x=w.lookupPath(a,{follow:!(s&131072),noent_okay:!0});d=x.node,a=x.path}var A=!1;if(s&64)if(d){if(s&128)throw new w.ErrnoError(20)}else{if(m)throw new w.ErrnoError(31);d=w.mknod(a,c|511,0),A=!0}if(!d)throw new w.ErrnoError(44);if(w.isChrdev(d.mode)&&(s&=-513),s&65536&&!w.isDir(d.mode))throw new w.ErrnoError(54);if(!A){var P=w.mayOpen(d,s);if(P)throw new w.ErrnoError(P)}s&512&&!A&&w.truncate(d,0),s&=-131713;var z=w.createStream({node:d,path:w.getPath(d),flags:s,seekable:!0,position:0,stream_ops:d.stream_ops,ungotten:[],error:!1});return z.stream_ops.open&&z.stream_ops.open(z),A&&w.chmod(d,c&511),t.logReadFiles&&!(s&1)&&(a in w.readFiles||(w.readFiles[a]=1)),z},close(a){if(w.isClosed(a))throw new w.ErrnoError(8);a.getdents&&(a.getdents=null);try{a.stream_ops.close&&a.stream_ops.close(a)}catch(s){throw s}finally{w.closeStream(a.fd)}a.fd=null},isClosed(a){return a.fd===null},llseek(a,s,c){if(w.isClosed(a))throw new w.ErrnoError(8);if(!a.seekable||!a.stream_ops.llseek)throw new w.ErrnoError(70);if(c!=0&&c!=1&&c!=2)throw new w.ErrnoError(28);return a.position=a.stream_ops.llseek(a,s,c),a.ungotten=[],a.position},read(a,s,c,d,m){if(M(c>=0),d<0||m<0)throw new w.ErrnoError(28);if(w.isClosed(a))throw new w.ErrnoError(8);if((a.flags&2097155)===1)throw new w.ErrnoError(8);if(w.isDir(a.node.mode))throw new w.ErrnoError(31);if(!a.stream_ops.read)throw new w.ErrnoError(28);var x=typeof m<"u";if(!x)m=a.position;else if(!a.seekable)throw new w.ErrnoError(70);var A=a.stream_ops.read(a,s,c,d,m);return x||(a.position+=A),A},write(a,s,c,d,m,x){if(M(c>=0),d<0||m<0)throw new w.ErrnoError(28);if(w.isClosed(a))throw new w.ErrnoError(8);if((a.flags&2097155)===0)throw new w.ErrnoError(8);if(w.isDir(a.node.mode))throw new w.ErrnoError(31);if(!a.stream_ops.write)throw new w.ErrnoError(28);a.seekable&&a.flags&1024&&w.llseek(a,0,2);var A=typeof m<"u";if(!A)m=a.position;else if(!a.seekable)throw new w.ErrnoError(70);var P=a.stream_ops.write(a,s,c,d,m,x);return A||(a.position+=P),P},mmap(a,s,c,d,m){if((d&2)!==0&&(m&2)===0&&(a.flags&2097155)!==2)throw new w.ErrnoError(2);if((a.flags&2097155)===1)throw new w.ErrnoError(2);if(!a.stream_ops.mmap)throw new w.ErrnoError(43);if(!s)throw new w.ErrnoError(28);return a.stream_ops.mmap(a,s,c,d,m)},msync(a,s,c,d,m){return M(c>=0),a.stream_ops.msync?a.stream_ops.msync(a,s,c,d,m):0},ioctl(a,s,c){if(!a.stream_ops.ioctl)throw new w.ErrnoError(59);return a.stream_ops.ioctl(a,s,c)},readFile(a,s={}){if(s.flags=s.flags||0,s.encoding=s.encoding||"binary",s.encoding!=="utf8"&&s.encoding!=="binary")throw new Error(`Invalid encoding type "${s.encoding}"`);var c=w.open(a,s.flags),d=w.stat(a),m=d.size,x=new Uint8Array(m);return w.read(c,x,0,m,0),s.encoding==="utf8"&&(x=Te(x)),w.close(c),x},writeFile(a,s,c={}){c.flags=c.flags||577;var d=w.open(a,c.flags,c.mode);if(typeof s=="string"&&(s=new Uint8Array(ji(s))),ArrayBuffer.isView(s))w.write(d,s,0,s.byteLength,void 0,c.canOwn);else throw new Error("Unsupported data type");w.close(d)},cwd:()=>w.currentPath,chdir(a){var s=w.lookupPath(a,{follow:!0});if(s.node===null)throw new w.ErrnoError(44);if(!w.isDir(s.node.mode))throw new w.ErrnoError(54);var c=w.nodePermissions(s.node,"x");if(c)throw new w.ErrnoError(c);w.currentPath=s.path},createDefaultDirectories(){w.mkdir("/tmp"),w.mkdir("/home"),w.mkdir("/home/web_user")},createDefaultDevices(){w.mkdir("/dev"),w.registerDevice(w.makedev(1,3),{read:()=>0,write:(d,m,x,A,P)=>A,llseek:()=>0}),w.mkdev("/dev/null",w.makedev(1,3)),D.register(w.makedev(5,0),D.default_tty_ops),D.register(w.makedev(6,0),D.default_tty1_ops),w.mkdev("/dev/tty",w.makedev(5,0)),w.mkdev("/dev/tty1",w.makedev(6,0));var a=new Uint8Array(1024),s=0,c=()=>(s===0&&(fr(a),s=a.byteLength),a[--s]);w.createDevice("/dev","random",c),w.createDevice("/dev","urandom",c),w.mkdir("/dev/shm"),w.mkdir("/dev/shm/tmp")},createSpecialDirectories(){w.mkdir("/proc");var a=w.mkdir("/proc/self");w.mkdir("/proc/self/fd"),w.mount({mount(){var s=w.createNode(a,"fd",16895,73);return s.stream_ops={llseek:Q.stream_ops.llseek},s.node_ops={lookup(c,d){var m=+d,x=w.getStreamChecked(m),A={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>x.path},id:m+1};return A.parent=A,A},readdir(){return Array.from(w.streams.entries()).filter(([c,d])=>d).map(([c,d])=>c.toString())}},s}},{},"/proc/self/fd")},createStandardStreams(a,s,c){a?w.createDevice("/dev","stdin",a):w.symlink("/dev/tty","/dev/stdin"),s?w.createDevice("/dev","stdout",null,s):w.symlink("/dev/tty","/dev/stdout"),c?w.createDevice("/dev","stderr",null,c):w.symlink("/dev/tty1","/dev/stderr");var d=w.open("/dev/stdin",0),m=w.open("/dev/stdout",1),x=w.open("/dev/stderr",1);M(d.fd===0,`invalid handle for stdin (${d.fd})`),M(m.fd===1,`invalid handle for stdout (${m.fd})`),M(x.fd===2,`invalid handle for stderr (${x.fd})`)},staticInit(){w.nameTable=new Array(4096),w.mount(Q,{},"/"),w.createDefaultDirectories(),w.createDefaultDevices(),w.createSpecialDirectories(),w.filesystems={MEMFS:Q}},init(a,s,c){M(!w.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),w.initialized=!0,a??=t.stdin,s??=t.stdout,c??=t.stderr,w.createStandardStreams(a,s,c)},quit(){w.initialized=!1,ll(0);for(var a of w.streams)a&&w.close(a)},findObject(a,s){var c=w.analyzePath(a,s);return c.exists?c.object:null},analyzePath(a,s){try{var c=w.lookupPath(a,{follow:!s});a=c.path}catch{}var d={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var c=w.lookupPath(a,{parent:!0});d.parentExists=!0,d.parentPath=c.path,d.parentObject=c.node,d.name=kt.basename(a),c=w.lookupPath(a,{follow:!s}),d.exists=!0,d.path=c.path,d.object=c.node,d.name=c.node.name,d.isRoot=c.path==="/"}catch(m){d.error=m.errno}return d},createPath(a,s,c,d){a=typeof a=="string"?a:w.getPath(a);for(var m=s.split("/").reverse();m.length;){var x=m.pop();if(x){var A=kt.join2(a,x);try{w.mkdir(A)}catch(P){if(P.errno!=20)throw P}a=A}}return A},createFile(a,s,c,d,m){var x=kt.join2(typeof a=="string"?a:w.getPath(a),s),A=mt(d,m);return w.create(x,A)},createDataFile(a,s,c,d,m,x){var A=s;a&&(a=typeof a=="string"?a:w.getPath(a),A=s?kt.join2(a,s):a);var P=mt(d,m),z=w.create(A,P);if(c){if(typeof c=="string"){for(var ee=new Array(c.length),le=0,xe=c.length;le<xe;++le)ee[le]=c.charCodeAt(le);c=ee}w.chmod(z,P|146);var we=w.open(z,577);w.write(we,c,0,c.length,0,x),w.close(we),w.chmod(z,P)}},createDevice(a,s,c,d){var m=kt.join2(typeof a=="string"?a:w.getPath(a),s),x=mt(!!c,!!d);w.createDevice.major??=64;var A=w.makedev(w.createDevice.major++,0);return w.registerDevice(A,{open(P){P.seekable=!1},close(P){d?.buffer?.length&&d(10)},read(P,z,ee,le,xe){for(var we=0,Me=0;Me<le;Me++){var Ce;try{Ce=c()}catch{throw new w.ErrnoError(29)}if(Ce===void 0&&we===0)throw new w.ErrnoError(6);if(Ce==null)break;we++,z[ee+Me]=Ce}return we&&(P.node.atime=Date.now()),we},write(P,z,ee,le,xe){for(var we=0;we<le;we++)try{d(z[ee+we])}catch{throw new w.ErrnoError(29)}return le&&(P.node.mtime=P.node.ctime=Date.now()),we}}),w.mkdev(m,x,A)},forceLoadFile(a){if(a.isDevice||a.isFolder||a.link||a.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{a.contents=T(a.url),a.usedBytes=a.contents.length}catch{throw new w.ErrnoError(29)}},createLazyFile(a,s,c,d,m){class x{lengthKnown=!1;chunks=[];get(Me){if(!(Me>this.length-1||Me<0)){var Ce=Me%this.chunkSize,st=Me/this.chunkSize|0;return this.getter(st)[Ce]}}setDataGetter(Me){this.getter=Me}cacheLength(){var Me=new XMLHttpRequest;if(Me.open("HEAD",c,!1),Me.send(null),!(Me.status>=200&&Me.status<300||Me.status===304))throw new Error("Couldn't load "+c+". Status: "+Me.status);var Ce=Number(Me.getResponseHeader("Content-length")),st,Rt=(st=Me.getResponseHeader("Accept-Ranges"))&&st==="bytes",bt=(st=Me.getResponseHeader("Content-Encoding"))&&st==="gzip",Jt=1024*1024;Rt||(Jt=Ce);var zt=(dn,Dn)=>{if(dn>Dn)throw new Error("invalid range ("+dn+", "+Dn+") or no bytes requested!");if(Dn>Ce-1)throw new Error("only "+Ce+" bytes available! programmer error!");var Kt=new XMLHttpRequest;if(Kt.open("GET",c,!1),Ce!==Jt&&Kt.setRequestHeader("Range","bytes="+dn+"-"+Dn),Kt.responseType="arraybuffer",Kt.overrideMimeType&&Kt.overrideMimeType("text/plain; charset=x-user-defined"),Kt.send(null),!(Kt.status>=200&&Kt.status<300||Kt.status===304))throw new Error("Couldn't load "+c+". Status: "+Kt.status);return Kt.response!==void 0?new Uint8Array(Kt.response||[]):ji(Kt.responseText||"")},Mn=this;Mn.setDataGetter(dn=>{var Dn=dn*Jt,Kt=(dn+1)*Jt-1;if(Kt=Math.min(Kt,Ce-1),typeof Mn.chunks[dn]>"u"&&(Mn.chunks[dn]=zt(Dn,Kt)),typeof Mn.chunks[dn]>"u")throw new Error("doXHR failed!");return Mn.chunks[dn]}),(bt||!Ce)&&(Jt=Ce=1,Ce=this.getter(0).length,Jt=Ce,U("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=Ce,this._chunkSize=Jt,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!r)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var A=new x,P={isDevice:!1,contents:A}}else var P={isDevice:!1,url:c};var z=w.createFile(a,s,P,d,m);P.contents?z.contents=P.contents:P.url&&(z.contents=null,z.url=P.url),Object.defineProperties(z,{usedBytes:{get:function(){return this.contents.length}}});var ee={},le=Object.keys(z.stream_ops);le.forEach(we=>{var Me=z.stream_ops[we];ee[we]=(...Ce)=>(w.forceLoadFile(z),Me(...Ce))});function xe(we,Me,Ce,st,Rt){var bt=we.node.contents;if(Rt>=bt.length)return 0;var Jt=Math.min(bt.length-Rt,st);if(M(Jt>=0),bt.slice)for(var zt=0;zt<Jt;zt++)Me[Ce+zt]=bt[Rt+zt];else for(var zt=0;zt<Jt;zt++)Me[Ce+zt]=bt.get(Rt+zt);return Jt}return ee.read=(we,Me,Ce,st,Rt)=>(w.forceLoadFile(z),xe(we,Me,Ce,st,Rt)),ee.mmap=(we,Me,Ce,st,Rt)=>{w.forceLoadFile(z);var bt=K();if(!bt)throw new w.ErrnoError(48);return xe(we,ot,bt,Me,Ce),{ptr:bt,allocated:!0}},z.stream_ops=ee,z},absolutePath(){lt("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder(){lt("FS.createFolder has been removed; use FS.mkdir instead")},createLink(){lt("FS.createLink has been removed; use FS.symlink instead")},joinPath(){lt("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc(){lt("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath(){lt("FS.standardizePath has been removed; use PATH.normalize instead")}},ft={DEFAULT_POLLMASK:5,calculateAt(a,s,c){if(kt.isAbs(s))return s;var d;if(a===-100)d=w.cwd();else{var m=ft.getStreamFromFD(a);d=m.path}if(s.length==0){if(!c)throw new w.ErrnoError(44);return d}return d+"/"+s},writeStat(a,s){te[a>>2]=s.dev,te[a+4>>2]=s.mode,ge[a+8>>2]=s.nlink,te[a+12>>2]=s.uid,te[a+16>>2]=s.gid,te[a+20>>2]=s.rdev,Ge[a+24>>3]=BigInt(s.size),te[a+32>>2]=4096,te[a+36>>2]=s.blocks;var c=s.atime.getTime(),d=s.mtime.getTime(),m=s.ctime.getTime();return Ge[a+40>>3]=BigInt(Math.floor(c/1e3)),ge[a+48>>2]=c%1e3*1e3*1e3,Ge[a+56>>3]=BigInt(Math.floor(d/1e3)),ge[a+64>>2]=d%1e3*1e3*1e3,Ge[a+72>>3]=BigInt(Math.floor(m/1e3)),ge[a+80>>2]=m%1e3*1e3*1e3,Ge[a+88>>3]=BigInt(s.ino),0},writeStatFs(a,s){te[a+4>>2]=s.bsize,te[a+40>>2]=s.bsize,te[a+8>>2]=s.blocks,te[a+12>>2]=s.bfree,te[a+16>>2]=s.bavail,te[a+20>>2]=s.files,te[a+24>>2]=s.ffree,te[a+28>>2]=s.fsid,te[a+44>>2]=s.flags,te[a+36>>2]=s.namelen},doMsync(a,s,c,d,m){if(!w.isFile(s.node.mode))throw new w.ErrnoError(43);if(d&2)return 0;var x=rt.slice(a,a+c);w.msync(s,x,m,c,d)},getStreamFromFD(a){var s=w.getStreamChecked(a);return s},varargs:void 0,getStr(a){var s=qe(a);return s}};function qt(a,s,c){try{var d=ft.getStreamFromFD(a);if(M(!c),d.fd===s)return-28;if(s<0||s>=w.MAX_OPEN_FDS)return-8;var m=w.getStream(s);return m&&w.close(m),w.dupStream(d,s).fd}catch(x){if(typeof w>"u"||x.name!=="ErrnoError")throw x;return-x.errno}}var Ot=()=>{M(ft.varargs!=null);var a=te[+ft.varargs>>2];return ft.varargs+=4,a},en=Ot;function Xe(a,s,c){ft.varargs=c;try{var d=ft.getStreamFromFD(a);switch(s){case 0:{var m=Ot();if(m<0)return-28;for(;w.streams[m];)m++;var x;return x=w.dupStream(d,m),x.fd}case 1:case 2:return 0;case 3:return d.flags;case 4:{var m=Ot();return d.flags|=m,0}case 12:{var m=en(),A=0;return tt[m+A>>1]=2,0}case 13:case 14:return 0}return-28}catch(P){if(typeof w>"u"||P.name!=="ErrnoError")throw P;return-P.errno}}function tn(a,s){try{return ft.writeStat(s,w.fstat(a))}catch(c){if(typeof w>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}function At(a,s,c){ft.varargs=c;try{var d=ft.getStreamFromFD(a);switch(s){case 21509:return d.tty?0:-59;case 21505:{if(!d.tty)return-59;if(d.tty.ops.ioctl_tcgets){var m=d.tty.ops.ioctl_tcgets(d),x=en();te[x>>2]=m.c_iflag||0,te[x+4>>2]=m.c_oflag||0,te[x+8>>2]=m.c_cflag||0,te[x+12>>2]=m.c_lflag||0;for(var A=0;A<32;A++)ot[x+A+17]=m.c_cc[A]||0;return 0}return 0}case 21510:case 21511:case 21512:return d.tty?0:-59;case 21506:case 21507:case 21508:{if(!d.tty)return-59;if(d.tty.ops.ioctl_tcsets){for(var x=en(),P=te[x>>2],z=te[x+4>>2],ee=te[x+8>>2],le=te[x+12>>2],xe=[],A=0;A<32;A++)xe.push(ot[x+A+17]);return d.tty.ops.ioctl_tcsets(d.tty,s,{c_iflag:P,c_oflag:z,c_cflag:ee,c_lflag:le,c_cc:xe})}return 0}case 21519:{if(!d.tty)return-59;var x=en();return te[x>>2]=0,0}case 21520:return d.tty?-28:-59;case 21531:{var x=en();return w.ioctl(d,s,x)}case 21523:{if(!d.tty)return-59;if(d.tty.ops.ioctl_tiocgwinsz){var we=d.tty.ops.ioctl_tiocgwinsz(d.tty),x=en();tt[x>>1]=we[0],tt[x+2>>1]=we[1]}return 0}case 21524:return d.tty?0:-59;case 21515:return d.tty?0:-59;default:return-28}}catch(Me){if(typeof w>"u"||Me.name!=="ErrnoError")throw Me;return-Me.errno}}function un(a,s){try{return a=ft.getStr(a),ft.writeStat(s,w.lstat(a))}catch(c){if(typeof w>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}function Rn(a,s,c,d){try{s=ft.getStr(s);var m=d&256,x=d&4096;return d=d&-6401,M(!d,`unknown flags in __syscall_newfstatat: ${d}`),s=ft.calculateAt(a,s,x),ft.writeStat(c,m?w.lstat(s):w.stat(s))}catch(A){if(typeof w>"u"||A.name!=="ErrnoError")throw A;return-A.errno}}function Yn(a,s,c,d){ft.varargs=d;try{s=ft.getStr(s),s=ft.calculateAt(a,s);var m=d?Ot():0;return w.open(s,c,m).fd}catch(x){if(typeof w>"u"||x.name!=="ErrnoError")throw x;return-x.errno}}function kn(a,s){try{return a=ft.getStr(a),ft.writeStat(s,w.stat(a))}catch(c){if(typeof w>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}var Vt=()=>lt("native code called abort()"),yt=a=>{for(var s="";;){var c=rt[a++];if(!c)return s;s+=String.fromCharCode(c)}},fn={},Dt={},En={},Cn=class extends Error{constructor(s){super(s),this.name="BindingError"}},Mt=a=>{throw new Cn(a)};function hs(a,s,c={}){var d=s.name;if(a||Mt(`type "${d}" must have a positive integer typeid pointer`),Dt.hasOwnProperty(a)){if(c.ignoreDuplicateRegistrations)return;Mt(`Cannot register type '${d}' twice`)}if(Dt[a]=s,delete En[a],fn.hasOwnProperty(a)){var m=fn[a];delete fn[a],m.forEach(x=>x())}}function Pn(a,s,c={}){if(s.argPackAdvance===void 0)throw new TypeError("registerType registeredInstance requires argPackAdvance");return hs(a,s,c)}var Ca=(a,s,c)=>{switch(s){case 1:return c?d=>ot[d]:d=>rt[d];case 2:return c?d=>tt[d>>1]:d=>ue[d>>1];case 4:return c?d=>te[d>>2]:d=>ge[d>>2];case 8:return c?d=>Ge[d>>3]:d=>Ct[d>>3];default:throw new TypeError(`invalid integer width (${s}): ${a}`)}},Ei=a=>{if(a===null)return"null";var s=typeof a;return s==="object"||s==="array"||s==="function"?a.toString():""+a},ps=(a,s,c,d)=>{if(s<c||s>d)throw new TypeError(`Passing a number "${Ei(s)}" from JS side to C/C++ side to an argument of type "${a}", which is outside the valid range [${c}, ${d}]!`)},ms=(a,s,c,d,m)=>{s=yt(s);const x=d===0n;let A=P=>P;if(x){const P=c*8;A=z=>BigInt.asUintN(P,z),m=A(m)}Pn(a,{name:s,fromWireType:A,toWireType:(P,z)=>{if(typeof z=="number")z=BigInt(z);else if(typeof z!="bigint")throw new TypeError(`Cannot convert "${Ei(z)}" to ${this.name}`);return ps(s,z,d,m),z},argPackAdvance:jn,readValueFromPointer:Ca(s,c,!x),destructorFunction:null})},jn=8,Wr=(a,s,c,d)=>{s=yt(s),Pn(a,{name:s,fromWireType:function(m){return!!m},toWireType:function(m,x){return x?c:d},argPackAdvance:jn,readValueFromPointer:function(m){return this.fromWireType(rt[m])},destructorFunction:null})},_s=a=>({count:a.count,deleteScheduled:a.deleteScheduled,preservePointerOnDelete:a.preservePointerOnDelete,ptr:a.ptr,ptrType:a.ptrType,smartPtr:a.smartPtr,smartPtrType:a.smartPtrType}),$r=a=>{function s(c){return c.$$.ptrType.registeredClass.name}Mt(s(a)+" instance already deleted")},pr=!1,Pa=a=>{},gs=a=>{a.smartPtr?a.smartPtrType.rawDestructor(a.smartPtr):a.ptrType.registeredClass.rawDestructor(a.ptr)},Da=a=>{a.count.value-=1;var s=a.count.value===0;s&&gs(a)},Xr=(a,s,c)=>{if(s===c)return a;if(c.baseClass===void 0)return null;var d=Xr(a,s,c.baseClass);return d===null?null:c.downcast(d)},La={},vs={},xt=(a,s)=>{for(s===void 0&&Mt("ptr should not be undefined");a.baseClass;)s=a.upcast(s),a=a.baseClass;return s},mr=(a,s)=>(s=xt(a,s),vs[s]),ys=class extends Error{constructor(s){super(s),this.name="InternalError"}},dt=a=>{throw new ys(a)},Ki=(a,s)=>{(!s.ptrType||!s.ptr)&&dt("makeClassHandle requires ptr and ptrType");var c=!!s.smartPtrType,d=!!s.smartPtr;return c!==d&&dt("Both smartPtrType and smartPtr must be specified"),s.count={value:1},Zi(Object.create(a,{$$:{value:s,writable:!0}}))};function _t(a){var s=this.getPointee(a);if(!s)return this.destructor(a),null;var c=mr(this.registeredClass,s);if(c!==void 0){if(c.$$.count.value===0)return c.$$.ptr=s,c.$$.smartPtr=a,c.clone();var d=c.clone();return this.destructor(a),d}function m(){return this.isSmartPointer?Ki(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:s,smartPtrType:this,smartPtr:a}):Ki(this.registeredClass.instancePrototype,{ptrType:this,ptr:a})}var x=this.registeredClass.getActualType(s),A=La[x];if(!A)return m.call(this);var P;this.isConst?P=A.constPointerType:P=A.pointerType;var z=Xr(s,this.registeredClass,P.registeredClass);return z===null?m.call(this):this.isSmartPointer?Ki(P.registeredClass.instancePrototype,{ptrType:P,ptr:z,smartPtrType:this,smartPtr:a}):Ki(P.registeredClass.instancePrototype,{ptrType:P,ptr:z})}var Zi=a=>typeof FinalizationRegistry>"u"?(Zi=s=>s,a):(pr=new FinalizationRegistry(s=>{console.warn(s.leakWarning),Da(s.$$)}),Zi=s=>{var c=s.$$,d=!!c.smartPtr;if(d){var m={$$:c},x=c.ptrType.registeredClass,A=new Error(`Embind found a leaked C++ instance ${x.name} <${j(c.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);"captureStackTrace"in Error&&Error.captureStackTrace(A,_t),m.leakWarning=A.stack.replace(/^Error: /,""),pr.register(s,m,s)}return s},Pa=s=>pr.unregister(s),Zi(a)),Ia=()=>{let a=_r.prototype;Object.assign(a,{isAliasOf(c){if(!(this instanceof _r)||!(c instanceof _r))return!1;var d=this.$$.ptrType.registeredClass,m=this.$$.ptr;c.$$=c.$$;for(var x=c.$$.ptrType.registeredClass,A=c.$$.ptr;d.baseClass;)m=d.upcast(m),d=d.baseClass;for(;x.baseClass;)A=x.upcast(A),x=x.baseClass;return d===x&&m===A},clone(){if(this.$$.ptr||$r(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var c=Zi(Object.create(Object.getPrototypeOf(this),{$$:{value:_s(this.$$)}}));return c.$$.count.value+=1,c.$$.deleteScheduled=!1,c},delete(){this.$$.ptr||$r(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Mt("Object already scheduled for deletion"),Pa(this),Da(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||$r(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Mt("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const s=Symbol.dispose;s&&(a[s]=a.delete)};function _r(){}var gr=(a,s)=>Object.defineProperty(s,"name",{value:a}),qr=(a,s,c)=>{if(a[s].overloadTable===void 0){var d=a[s];a[s]=function(...m){return a[s].overloadTable.hasOwnProperty(m.length)||Mt(`Function '${c}' called with an invalid number of arguments (${m.length}) - expects one of (${a[s].overloadTable})!`),a[s].overloadTable[m.length].apply(this,m)},a[s].overloadTable=[],a[s].overloadTable[d.argCount]=d}},Kn=(a,s,c)=>{t.hasOwnProperty(a)?((c===void 0||t[a].overloadTable!==void 0&&t[a].overloadTable[c]!==void 0)&&Mt(`Cannot register public name '${a}' twice`),qr(t,a,a),t[a].overloadTable.hasOwnProperty(c)&&Mt(`Cannot register multiple overloads of a function with the same number of arguments (${c})!`),t[a].overloadTable[c]=s):(t[a]=s,t[a].argCount=c)},ko=48,xs=57,zo=a=>{M(typeof a=="string"),a=a.replace(/[^a-zA-Z0-9_]/g,"$");var s=a.charCodeAt(0);return s>=ko&&s<=xs?`_${a}`:a};function Go(a,s,c,d,m,x,A,P){this.name=a,this.constructor=s,this.instancePrototype=c,this.rawDestructor=d,this.baseClass=m,this.getActualType=x,this.upcast=A,this.downcast=P,this.pureVirtualFunctions=[]}var Yr=(a,s,c)=>{for(;s!==c;)s.upcast||Mt(`Expected null or instance of ${c.name}, got an instance of ${s.name}`),a=s.upcast(a),s=s.baseClass;return a};function Ho(a,s){if(s===null)return this.isReference&&Mt(`null is not a valid ${this.name}`),0;s.$$||Mt(`Cannot pass "${Ei(s)}" as a ${this.name}`),s.$$.ptr||Mt(`Cannot pass deleted object as a pointer of type ${this.name}`);var c=s.$$.ptrType.registeredClass,d=Yr(s.$$.ptr,c,this.registeredClass);return d}function Vo(a,s){var c;if(s===null)return this.isReference&&Mt(`null is not a valid ${this.name}`),this.isSmartPointer?(c=this.rawConstructor(),a!==null&&a.push(this.rawDestructor,c),c):0;(!s||!s.$$)&&Mt(`Cannot pass "${Ei(s)}" as a ${this.name}`),s.$$.ptr||Mt(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&s.$$.ptrType.isConst&&Mt(`Cannot convert argument of type ${s.$$.smartPtrType?s.$$.smartPtrType.name:s.$$.ptrType.name} to parameter type ${this.name}`);var d=s.$$.ptrType.registeredClass;if(c=Yr(s.$$.ptr,d,this.registeredClass),this.isSmartPointer)switch(s.$$.smartPtr===void 0&&Mt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:s.$$.smartPtrType===this?c=s.$$.smartPtr:Mt(`Cannot convert argument of type ${s.$$.smartPtrType?s.$$.smartPtrType.name:s.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:c=s.$$.smartPtr;break;case 2:if(s.$$.smartPtrType===this)c=s.$$.smartPtr;else{var m=s.clone();c=this.rawShare(c,ln.toHandle(()=>m.delete())),a!==null&&a.push(this.rawDestructor,c)}break;default:Mt("Unsupporting sharing policy")}return c}function Wo(a,s){if(s===null)return this.isReference&&Mt(`null is not a valid ${this.name}`),0;s.$$||Mt(`Cannot pass "${Ei(s)}" as a ${this.name}`),s.$$.ptr||Mt(`Cannot pass deleted object as a pointer of type ${this.name}`),s.$$.ptrType.isConst&&Mt(`Cannot convert argument of type ${s.$$.ptrType.name} to parameter type ${this.name}`);var c=s.$$.ptrType.registeredClass,d=Yr(s.$$.ptr,c,this.registeredClass);return d}function jr(a){return this.fromWireType(ge[a>>2])}var $o=()=>{Object.assign(Kr.prototype,{getPointee(a){return this.rawGetPointee&&(a=this.rawGetPointee(a)),a},destructor(a){this.rawDestructor?.(a)},argPackAdvance:jn,readValueFromPointer:jr,fromWireType:_t})};function Kr(a,s,c,d,m,x,A,P,z,ee,le){this.name=a,this.registeredClass=s,this.isReference=c,this.isConst=d,this.isSmartPointer=m,this.pointeeType=x,this.sharingPolicy=A,this.rawGetPointee=P,this.rawConstructor=z,this.rawShare=ee,this.rawDestructor=le,!m&&s.baseClass===void 0?d?(this.toWireType=Ho,this.destructorFunction=null):(this.toWireType=Wo,this.destructorFunction=null):this.toWireType=Vo}var Ss=(a,s,c)=>{t.hasOwnProperty(a)||dt("Replacing nonexistent public symbol"),t[a].overloadTable!==void 0&&c!==void 0?t[a].overloadTable[c]=s:(t[a]=s,t[a].argCount=c)},Es=[],Zr,Re=a=>{var s=Es[a];return s||(Es[a]=s=Zr.get(a)),M(Zr.get(a)==s,"JavaScript-side Wasm function table mirror is out of date!"),s},Zn=(a,s,c=!1)=>{M(!c,"Async bindings are only supported with JSPI."),a=yt(a);function d(){var x=Re(s);return x}var m=d();return typeof m!="function"&&Mt(`unknown function pointer with signature ${a}: ${s}`),m};class Xo extends Error{}var Ms=a=>{var s=of(a),c=yt(s);return Mi(s),c},Oi=(a,s)=>{var c=[],d={};function m(x){if(!d[x]&&!Dt[x]){if(En[x]){En[x].forEach(m);return}c.push(x),d[x]=!0}}throw s.forEach(m),new Xo(`${a}: `+c.map(Ms).join([", "]))},zn=(a,s,c)=>{a.forEach(P=>En[P]=s);function d(P){var z=c(P);z.length!==a.length&&dt("Mismatched type converter count");for(var ee=0;ee<a.length;++ee)Pn(a[ee],z[ee])}var m=new Array(s.length),x=[],A=0;s.forEach((P,z)=>{Dt.hasOwnProperty(P)?m[z]=Dt[P]:(x.push(P),fn.hasOwnProperty(P)||(fn[P]=[]),fn[P].push(()=>{m[z]=Dt[P],++A,A===x.length&&d(m)}))}),x.length===0&&d(m)},qo=(a,s,c,d,m,x,A,P,z,ee,le,xe,we)=>{le=yt(le),x=Zn(m,x),P&&=Zn(A,P),ee&&=Zn(z,ee),we=Zn(xe,we);var Me=zo(le);Kn(Me,function(){Oi(`Cannot construct ${le} due to unbound types`,[d])}),zn([a,s,c],d?[d]:[],Ce=>{Ce=Ce[0];var st,Rt;d?(st=Ce.registeredClass,Rt=st.instancePrototype):Rt=_r.prototype;var bt=gr(le,function(...Kt){if(Object.getPrototypeOf(this)!==Jt)throw new Cn(`Use 'new' to construct ${le}`);if(zt.constructor_body===void 0)throw new Cn(`${le} has no accessible constructor`);var yr=zt.constructor_body[Kt.length];if(yr===void 0)throw new Cn(`Tried to invoke ctor of ${le} with invalid number of parameters (${Kt.length}) - expected (${Object.keys(zt.constructor_body).toString()}) parameters instead!`);return yr.apply(this,Kt)}),Jt=Object.create(Rt,{constructor:{value:bt}});bt.prototype=Jt;var zt=new Go(le,bt,Jt,we,st,x,P,ee);zt.baseClass&&(zt.baseClass.__derivedClasses??=[],zt.baseClass.__derivedClasses.push(zt));var Mn=new Kr(le,zt,!0,!1,!1),dn=new Kr(le+"*",zt,!1,!1,!1),Dn=new Kr(le+" const*",zt,!1,!0,!1);return La[a]={pointerType:dn,constPointerType:Dn},Ss(Me,bt),[Mn,dn,Dn]})},Ua=a=>{for(;a.length;){var s=a.pop(),c=a.pop();c(s)}};function bs(a){for(var s=1;s<a.length;++s)if(a[s]!==null&&a[s].destructorFunction===void 0)return!0;return!1}function Yo(a,s,c,d,m){if(a<s||a>c){var x=s==c?s:`${s} to ${c}`;m(`function ${d} called with ${a} arguments, expected ${x}`)}}function jo(a,s,c,d){var m=bs(a),x=a.length-2,A=[],P=["fn"];s&&P.push("thisWired");for(var z=0;z<x;++z)A.push(`arg${z}`),P.push(`arg${z}Wired`);A=A.join(","),P=P.join(",");var ee=`return function (${A}) {
`;ee+=`checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`,m&&(ee+=`var destructors = [];
`);var le=m?"destructors":"null",xe=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];s&&(ee+=`var thisWired = classParam['toWireType'](${le}, this);
`);for(var z=0;z<x;++z)ee+=`var arg${z}Wired = argType${z}['toWireType'](${le}, arg${z});
`,xe.push(`argType${z}`);if(ee+=(c||d?"var rv = ":"")+`invoker(${P});
`,m)ee+=`runDestructors(destructors);
`;else for(var z=s?1:2;z<a.length;++z){var we=z===1?"thisWired":"arg"+(z-2)+"Wired";a[z].destructorFunction!==null&&(ee+=`${we}_dtor(${we});
`,xe.push(`${we}_dtor`))}return c&&(ee+=`var ret = retType['fromWireType'](rv);
return ret;
`),ee+=`}
`,xe.push("checkArgCount","minArgs","maxArgs"),ee=`if (arguments.length !== ${xe.length}){ throw new Error(humanName + "Expected ${xe.length} closure arguments " + arguments.length + " given."); }
${ee}`,[xe,ee]}function Ko(a){for(var s=a.length-2,c=a.length-1;c>=2&&a[c].optional;--c)s--;return s}function Jr(a,s,c,d,m,x){var A=s.length;A<2&&Mt("argTypes array size mismatch! Must at least get return value and 'this' types!"),M(!x,"Async bindings are only supported with JSPI.");for(var P=s[1]!==null&&c!==null,z=bs(s),ee=s[0].name!=="void",le=A-2,xe=Ko(s),we=[a,Mt,d,m,Ua,s[0],s[1]],Me=0;Me<A-2;++Me)we.push(s[Me+2]);if(!z)for(var Me=P?1:2;Me<s.length;++Me)s[Me].destructorFunction!==null&&we.push(s[Me].destructorFunction);we.push(Yo,xe,le);let[Ce,st]=jo(s,P,ee,x);var Rt=new Function(...Ce,st)(...we);return gr(a,Rt)}var Qr=(a,s)=>{for(var c=[],d=0;d<a;d++)c.push(ge[s+d*4>>2]);return c},Fa=a=>{a=a.trim();const s=a.indexOf("(");return s===-1?a:(M(a.endsWith(")"),"Parentheses for argument names should match."),a.slice(0,s))},Zo=(a,s,c,d,m,x,A,P,z)=>{var ee=Qr(c,d);s=yt(s),s=Fa(s),x=Zn(m,x,P),zn([],[a],le=>{le=le[0];var xe=`${le.name}.${s}`;function we(){Oi(`Cannot call ${xe} due to unbound types`,ee)}s.startsWith("@@")&&(s=Symbol[s.substring(2)]);var Me=le.registeredClass.constructor;return Me[s]===void 0?(we.argCount=c-1,Me[s]=we):(qr(Me,s,xe),Me[s].overloadTable[c-1]=we),zn([],ee,Ce=>{var st=[Ce[0],null].concat(Ce.slice(1)),Rt=Jr(xe,st,null,x,A,P);if(Me[s].overloadTable===void 0?(Rt.argCount=c-1,Me[s]=Rt):Me[s].overloadTable[c-1]=Rt,le.registeredClass.__derivedClasses)for(const bt of le.registeredClass.__derivedClasses)bt.constructor.hasOwnProperty(s)||(bt.constructor[s]=Rt);return[]}),[]})},Jo=(a,s,c,d,m,x)=>{M(s>0);var A=Qr(s,c);m=Zn(d,m),zn([],[a],P=>{P=P[0];var z=`constructor ${P.name}`;if(P.registeredClass.constructor_body===void 0&&(P.registeredClass.constructor_body=[]),P.registeredClass.constructor_body[s-1]!==void 0)throw new Cn(`Cannot register multiple constructors with identical number of parameters (${s-1}) for class '${P.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return P.registeredClass.constructor_body[s-1]=()=>{Oi(`Cannot construct ${P.name} due to unbound types`,A)},zn([],A,ee=>(ee.splice(1,0,null),P.registeredClass.constructor_body[s-1]=Jr(z,ee,null,m,x),[])),[]})},Qo=(a,s,c,d,m,x,A,P,z,ee)=>{var le=Qr(c,d);s=yt(s),s=Fa(s),x=Zn(m,x,z),zn([],[a],xe=>{xe=xe[0];var we=`${xe.name}.${s}`;s.startsWith("@@")&&(s=Symbol[s.substring(2)]),P&&xe.registeredClass.pureVirtualFunctions.push(s);function Me(){Oi(`Cannot call ${we} due to unbound types`,le)}var Ce=xe.registeredClass.instancePrototype,st=Ce[s];return st===void 0||st.overloadTable===void 0&&st.className!==xe.name&&st.argCount===c-2?(Me.argCount=c-2,Me.className=xe.name,Ce[s]=Me):(qr(Ce,s,we),Ce[s].overloadTable[c-2]=Me),zn([],le,Rt=>{var bt=Jr(we,Rt,xe,x,A,z);return Ce[s].overloadTable===void 0?(bt.argCount=c-2,Ce[s]=bt):Ce[s].overloadTable[c-2]=bt,[]}),[]})},ws=(a,s,c)=>(a instanceof Object||Mt(`${c} with invalid "this": ${a}`),a instanceof s.registeredClass.constructor||Mt(`${c} incompatible with "this" of type ${a.constructor.name}`),a.$$.ptr||Mt(`cannot call emscripten binding method ${c} on deleted object`),Yr(a.$$.ptr,a.$$.ptrType.registeredClass,s.registeredClass)),el=(a,s,c,d,m,x,A,P,z,ee)=>{s=yt(s),m=Zn(d,m),zn([],[a],le=>{le=le[0];var xe=`${le.name}.${s}`,we={get(){Oi(`Cannot access ${xe} due to unbound types`,[c,A])},enumerable:!0,configurable:!0};return z?we.set=()=>Oi(`Cannot access ${xe} due to unbound types`,[c,A]):we.set=Me=>Mt(xe+" is a read-only property"),Object.defineProperty(le.registeredClass.instancePrototype,s,we),zn([],z?[c,A]:[c],Me=>{var Ce=Me[0],st={get(){var bt=ws(this,le,xe+" getter");return Ce.fromWireType(m(x,bt))},enumerable:!0};if(z){z=Zn(P,z);var Rt=Me[1];st.set=function(bt){var Jt=ws(this,le,xe+" setter"),zt=[];z(ee,Jt,Rt.toWireType(zt,bt)),Ua(zt)}}return Object.defineProperty(le.registeredClass.instancePrototype,s,st),[]}),[]})},tl=(a,s,c)=>{a=yt(a),zn([],[s],d=>(d=d[0],t[a]=d.fromWireType(c),[]))},Ts=[],Jn=[0,1,,1,null,1,!0,1,!1,1],Na=a=>{a>9&&--Jn[a+1]===0&&(M(Jn[a]!==void 0,"Decref for unallocated handle."),Jn[a]=void 0,Ts.push(a))},ln={toValue:a=>(a||Mt(`Cannot use deleted val. handle = ${a}`),M(a===2||Jn[a]!==void 0&&a%2===0,`invalid handle: ${a}`),Jn[a]),toHandle:a=>{switch(a){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const s=Ts.pop()||Jn.length;return Jn[s]=a,Jn[s+1]=1,s}}}},As={name:"emscripten::val",fromWireType:a=>{var s=ln.toValue(a);return Na(a),s},toWireType:(a,s)=>ln.toHandle(s),argPackAdvance:jn,readValueFromPointer:jr,destructorFunction:null},Rs=a=>Pn(a,As),ea=(a,s,c)=>{switch(s){case 1:return c?function(d){return this.fromWireType(ot[d])}:function(d){return this.fromWireType(rt[d])};case 2:return c?function(d){return this.fromWireType(tt[d>>1])}:function(d){return this.fromWireType(ue[d>>1])};case 4:return c?function(d){return this.fromWireType(te[d>>2])}:function(d){return this.fromWireType(ge[d>>2])};default:throw new TypeError(`invalid integer width (${s}): ${a}`)}},S=(a,s,c,d)=>{s=yt(s);function m(){}m.values={},Pn(a,{name:s,constructor:m,fromWireType:function(x){return this.constructor.values[x]},toWireType:(x,A)=>A.value,argPackAdvance:jn,readValueFromPointer:ea(s,c,d),destructorFunction:null}),Kn(s,m)},C=(a,s)=>{var c=Dt[a];return c===void 0&&Mt(`${s} has unknown type ${Ms(a)}`),c},H=(a,s,c)=>{var d=C(a,"enum");s=yt(s);var m=d.constructor,x=Object.create(d.constructor.prototype,{value:{value:c},constructor:{value:gr(`${d.name}_${s}`,function(){})}});m.values[c]=x,m[s]=x},G=(a,s)=>{switch(s){case 4:return function(c){return this.fromWireType(he[c>>2])};case 8:return function(c){return this.fromWireType(Ae[c>>3])};default:throw new TypeError(`invalid float width (${s}): ${a}`)}},J=(a,s,c)=>{s=yt(s),Pn(a,{name:s,fromWireType:d=>d,toWireType:(d,m)=>{if(typeof m!="number"&&typeof m!="boolean")throw new TypeError(`Cannot convert ${Ei(m)} to ${this.name}`);return m},argPackAdvance:jn,readValueFromPointer:G(s,c),destructorFunction:null})},fe=(a,s,c,d,m,x,A,P)=>{var z=Qr(s,c);a=yt(a),a=Fa(a),m=Zn(d,m,A),Kn(a,function(){Oi(`Cannot call ${a} due to unbound types`,z)},s-1),zn([],z,ee=>{var le=[ee[0],null].concat(ee.slice(1));return Ss(a,Jr(a,le,null,m,x,A),s-1),[]})},Ie=(a,s,c,d,m)=>{s=yt(s);const x=d===0;let A=z=>z;if(x){var P=32-8*c;A=z=>z<<P>>>P,m=A(m)}Pn(a,{name:s,fromWireType:A,toWireType:(z,ee)=>{if(typeof ee!="number"&&typeof ee!="boolean")throw new TypeError(`Cannot convert "${Ei(ee)}" to ${s}`);return ps(s,ee,d,m),ee},argPackAdvance:jn,readValueFromPointer:Ca(s,c,d!==0),destructorFunction:null})},nt=(a,s,c)=>{var d=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],m=d[s];function x(A){var P=ge[A>>2],z=ge[A+4>>2];return new m(ot.buffer,z,P)}c=yt(c),Pn(a,{name:c,fromWireType:x,argPackAdvance:jn,readValueFromPointer:x},{ignoreDuplicateRegistrations:!0})},St=Object.assign({optional:!0},As),Lt=(a,s)=>{Pn(a,St)},nn=(a,s,c)=>(M(typeof c=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),Vr(a,rt,s,c)),Gn=(a,s)=>{s=yt(s),Pn(a,{name:s,fromWireType(c){for(var d=ge[c>>2],m=c+4,x,A,P=m,A=0;A<=d;++A){var z=m+A;if(A==d||rt[z]==0){var ee=z-P,le=qe(P,ee);x===void 0?x=le:(x+="\0",x+=le),P=z+1}}return Mi(c),x},toWireType(c,d){d instanceof ArrayBuffer&&(d=new Uint8Array(d));var m,x=typeof d=="string";x||ArrayBuffer.isView(d)&&d.BYTES_PER_ELEMENT==1||Mt("Cannot pass non-string to std::string"),x?m=Si(d):m=d.length;var A=ol(4+m+1),P=A+4;return ge[A>>2]=m,x?nn(d,P,m+1):rt.set(d,P),c!==null&&c.push(Mi,A),A},argPackAdvance:jn,readValueFromPointer:jr,destructorFunction(c){Mi(c)}})},Qn=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,li=(a,s)=>{M(a%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var c=a>>1,d=c+s/2,m=c;!(m>=d)&&ue[m];)++m;if(m-c>16&&Qn)return Qn.decode(ue.subarray(c,m));for(var x="",A=c;!(A>=d);++A){var P=ue[A];if(P==0)break;x+=String.fromCharCode(P)}return x},nl=(a,s,c)=>{if(M(s%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),M(typeof c=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),c??=2147483647,c<2)return 0;c-=2;for(var d=s,m=c<a.length*2?c/2:a.length,x=0;x<m;++x){var A=a.charCodeAt(x);tt[s>>1]=A,s+=2}return tt[s>>1]=0,s-d},il=a=>a.length*2,rl=(a,s)=>{M(a%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var c="",d=0;!(d>=s/4);d++){var m=te[a+d*4>>2];if(!m)break;c+=String.fromCodePoint(m)}return c},Oa=(a,s,c)=>{if(M(s%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),M(typeof c=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),c??=2147483647,c<4)return 0;for(var d=s,m=d+c-4,x=0;x<a.length;++x){var A=a.codePointAt(x);if(A>65535&&x++,te[s>>2]=A,s+=4,s+4>m)break}return te[s>>2]=0,s-d},Cp=a=>{for(var s=0,c=0;c<a.length;++c){var d=a.codePointAt(c);d>65535&&c++,s+=4}return s},Pp=(a,s,c)=>{c=yt(c);var d,m,x,A;s===2?(d=li,m=nl,A=il,x=P=>ue[P>>1]):s===4&&(d=rl,m=Oa,A=Cp,x=P=>ge[P>>2]),Pn(a,{name:c,fromWireType:P=>{for(var z=ge[P>>2],ee,le=P+4,xe=0;xe<=z;++xe){var we=P+4+xe*s;if(xe==z||x(we)==0){var Me=we-le,Ce=d(le,Me);ee===void 0?ee=Ce:(ee+="\0",ee+=Ce),le=we+s}}return Mi(P),ee},toWireType:(P,z)=>{typeof z!="string"&&Mt(`Cannot pass non-string to C++ string type ${c}`);var ee=A(z),le=ol(4+ee+s);return ge[le>>2]=ee/s,m(z,le+4,ee+s),P!==null&&P.push(Mi,le),le},argPackAdvance:jn,readValueFromPointer:jr,destructorFunction(P){Mi(P)}})},Dp=(a,s)=>{Rs(a)},Lp=(a,s)=>{s=yt(s),Pn(a,{isVoid:!0,name:s,argPackAdvance:0,fromWireType:()=>{},toWireType:(c,d)=>{}})},Ip=()=>{throw new W},Yu=(a,s,c)=>{var d=[],m=a.toWireType(d,c);return d.length&&(ge[s>>2]=ln.toHandle(d)),m},Up=(a,s,c)=>(a=ln.toValue(a),s=C(s,"emval::as"),Yu(s,c,a)),Fp=(a,s)=>(a=ln.toValue(a),s=C(s,"emval::as"),s.toWireType(null,a)),Cs=[],Np=(a,s,c,d)=>(a=Cs[a],s=ln.toValue(s),a(null,s,c,d)),Op={},al=a=>{var s=Op[a];return s===void 0?yt(a):s},Bp=(a,s,c,d,m)=>(a=Cs[a],s=ln.toValue(s),c=al(c),a(s,s[c],d,m)),ju=()=>globalThis,kp=a=>a===0?ln.toHandle(ju()):(a=al(a),ln.toHandle(ju()[a])),zp=a=>{var s=Cs.length;return Cs.push(a),s},Gp=(a,s)=>{for(var c=new Array(a),d=0;d<a;++d)c[d]=C(ge[s+d*4>>2],`parameter ${d}`);return c},Hp=(a,s,c)=>{var d=Gp(a,s),m=d.shift();a--;var x=`return function (obj, func, destructorsRef, args) {
`,A=0,P=[];c===0&&P.push("obj");for(var z=["retType"],ee=[m],le=0;le<a;++le)P.push(`arg${le}`),z.push(`argType${le}`),ee.push(d[le]),x+=`  var arg${le} = argType${le}.readValueFromPointer(args${A?"+"+A:""});
`,A+=d[le].argPackAdvance;var xe=c===1?"new func":"func.call";x+=`  var rv = ${xe}(${P.join(", ")});
`,m.isVoid||(z.push("emval_returnValue"),ee.push(Yu),x+=`  return emval_returnValue(retType, destructorsRef, rv);
`),x+=`};
`;var we=new Function(...z,x)(...ee),Me=`methodCaller<(${d.map(Ce=>Ce.name).join(", ")}) => ${m.name}>`;return zp(gr(Me,we))},Vp=(a,s)=>(a=ln.toValue(a),s=ln.toValue(s),ln.toHandle(a[s])),Wp=a=>{a>9&&(Jn[a+1]+=1)},$p=a=>(a=ln.toValue(a),typeof a=="number"),Xp=a=>(a=ln.toValue(a),typeof a=="string"),qp=()=>ln.toHandle([]),Yp=a=>ln.toHandle(al(a)),jp=a=>{var s=ln.toValue(a);Ua(s),Na(a)},Kp=(a,s)=>{a=C(a,"_emval_take_value");var c=a.readValueFromPointer(s);return ln.toHandle(c)},Zp=a=>{throw a=ln.toValue(a),a},Jp=a=>a%4===0&&(a%100!==0||a%400===0),Qp=[0,31,60,91,121,152,182,213,244,274,305,335],em=[0,31,59,90,120,151,181,212,243,273,304,334],Ku=a=>{var s=Jp(a.getFullYear()),c=s?Qp:em,d=c[a.getMonth()]+a.getDate()-1;return d},tm=9007199254740992,nm=-9007199254740992,Zu=a=>a<nm||a>tm?NaN:Number(a);function im(a,s){a=Zu(a);var c=new Date(a*1e3);te[s>>2]=c.getSeconds(),te[s+4>>2]=c.getMinutes(),te[s+8>>2]=c.getHours(),te[s+12>>2]=c.getDate(),te[s+16>>2]=c.getMonth(),te[s+20>>2]=c.getFullYear()-1900,te[s+24>>2]=c.getDay();var d=Ku(c)|0;te[s+28>>2]=d,te[s+36>>2]=-(c.getTimezoneOffset()*60);var m=new Date(c.getFullYear(),0,1),x=new Date(c.getFullYear(),6,1).getTimezoneOffset(),A=m.getTimezoneOffset(),P=(x!=A&&c.getTimezoneOffset()==Math.min(A,x))|0;te[s+32>>2]=P}var rm=function(a){var s=(()=>{var c=new Date(te[a+20>>2]+1900,te[a+16>>2],te[a+12>>2],te[a+8>>2],te[a+4>>2],te[a>>2],0),d=te[a+32>>2],m=c.getTimezoneOffset(),x=new Date(c.getFullYear(),0,1),A=new Date(c.getFullYear(),6,1).getTimezoneOffset(),P=x.getTimezoneOffset(),z=Math.min(P,A);if(d<0)te[a+32>>2]=+(A!=P&&z==m);else if(d>0!=(z==m)){var ee=Math.max(P,A),le=d>0?z:ee;c.setTime(c.getTime()+(le-m)*6e4)}te[a+24>>2]=c.getDay();var xe=Ku(c)|0;te[a+28>>2]=xe,te[a>>2]=c.getSeconds(),te[a+4>>2]=c.getMinutes(),te[a+8>>2]=c.getHours(),te[a+12>>2]=c.getDate(),te[a+16>>2]=c.getMonth(),te[a+20>>2]=c.getYear();var we=c.getTime();return isNaN(we)?-1:we/1e3})();return BigInt(s)},am=(a,s,c,d)=>{var m=new Date().getFullYear(),x=new Date(m,0,1),A=new Date(m,6,1),P=x.getTimezoneOffset(),z=A.getTimezoneOffset(),ee=Math.max(P,z);ge[a>>2]=ee*60,te[s>>2]=+(P!=z);var le=Me=>{var Ce=Me>=0?"-":"+",st=Math.abs(Me),Rt=String(Math.floor(st/60)).padStart(2,"0"),bt=String(st%60).padStart(2,"0");return`UTC${Ce}${Rt}${bt}`},xe=le(P),we=le(z);M(xe),M(we),M(Si(xe)<=16,`timezone name truncated to fit in TZNAME_MAX (${xe})`),M(Si(we)<=16,`timezone name truncated to fit in TZNAME_MAX (${we})`),z<P?(nn(xe,c,17),nn(we,d,17)):(nn(xe,d,17),nn(we,c,17))},Ju=()=>performance.now(),Qu=()=>Date.now(),sm=a=>a>=0&&a<=3;function om(a,s,c){if(!sm(a))return 28;var d;a===0?d=Qu():d=Ju();var m=Math.round(d*1e3*1e3);return Ge[c>>3]=BigInt(m),0}var Ps=[],lm=(a,s)=>{M(Array.isArray(Ps)),M(s%16==0),Ps.length=0;for(var c;c=rt[a++];){var d=String.fromCharCode(c),m=["d","f","i","p"];m.push("j"),M(m.includes(d),`Invalid character ${c}("${d}") in readEmAsmArgs! Use only [${m}], and do not specify "v" for void return argument.`);var x=c!=105;x&=c!=112,s+=x&&s%8?4:0,Ps.push(c==112?ge[s>>2]:c==106?Ge[s>>3]:c==105?te[s>>2]:Ae[s>>3]),s+=x?8:4}return Ps},cm=(a,s,c)=>{var d=lm(s,c);return M(sf.hasOwnProperty(a),`No EM_ASM constant found at address ${a}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),sf[a](...d)},um=(a,s,c)=>cm(a,s,c),ef=()=>2147483648,fm=()=>ef(),dm=(a,s)=>(M(s,"alignment argument is required"),Math.ceil(a/s)*s),hm=a=>{var s=He.buffer,c=(a-s.byteLength+65535)/65536|0;try{return He.grow(c),vt(),1}catch(d){O(`growMemory: Attempted to grow heap from ${s.byteLength} bytes to ${a} bytes, but got error: ${d}`)}},pm=a=>{var s=rt.length;a>>>=0,M(a>s);var c=ef();if(a>c)return O(`Cannot enlarge memory, requested ${a} bytes, but the limit is ${c} bytes!`),!1;for(var d=1;d<=4;d*=2){var m=s*(1+.2/d);m=Math.min(m,a+100663296);var x=Math.min(c,dm(Math.max(a,m),65536)),A=hm(x);if(A)return!0}return O(`Failed to grow the heap from ${s} bytes to ${x} bytes, not enough memory!`),!1},sl={},mm=()=>f||"./this.program",Ba=()=>{if(!Ba.strings){var a=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8",s={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:a,_:mm()};for(var c in sl)sl[c]===void 0?delete s[c]:s[c]=sl[c];var d=[];for(var c in s)d.push(`${c}=${s[c]}`);Ba.strings=d}return Ba.strings},_m=(a,s)=>{var c=0,d=0;for(var m of Ba()){var x=s+c;ge[a+d>>2]=x,c+=nn(m,x,1/0)+1,d+=4}return 0},gm=(a,s)=>{var c=Ba();ge[a>>2]=c.length;var d=0;for(var m of c)d+=Si(m)+1;return ge[s>>2]=d,0},tf=0,nf=()=>ct||tf>0,vm=a=>{nf()||(t.onExit?.(a),N=!0),h(a,new Fe(a))},ym=(a,s)=>{if(Fg(),nf()&&!s){var c=`program exited (with status: ${a}), but keepRuntimeAlive() is set (counter=${tf}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;je?.(c),O(c)}vm(a)},xm=ym;function Sm(a){try{var s=ft.getStreamFromFD(a);return w.close(s),0}catch(c){if(typeof w>"u"||c.name!=="ErrnoError")throw c;return c.errno}}var Em=(a,s,c,d)=>{for(var m=0,x=0;x<c;x++){var A=ge[s>>2],P=ge[s+4>>2];s+=8;var z=w.read(a,ot,A,P,d);if(z<0)return-1;if(m+=z,z<P)break}return m};function Mm(a,s,c,d){try{var m=ft.getStreamFromFD(a),x=Em(m,s,c);return ge[d>>2]=x,0}catch(A){if(typeof w>"u"||A.name!=="ErrnoError")throw A;return A.errno}}function bm(a,s,c,d){s=Zu(s);try{if(isNaN(s))return 61;var m=ft.getStreamFromFD(a);return w.llseek(m,s,c),Ge[d>>3]=BigInt(m.position),m.getdents&&s===0&&c===0&&(m.getdents=null),0}catch(x){if(typeof w>"u"||x.name!=="ErrnoError")throw x;return x.errno}}var wm=(a,s,c,d)=>{for(var m=0,x=0;x<c;x++){var A=ge[s>>2],P=ge[s+4>>2];s+=8;var z=w.write(a,ot,A,P,d);if(z<0)return-1;if(m+=z,z<P)break}return m};function Tm(a,s,c,d){try{var m=ft.getStreamFromFD(a),x=wm(m,s,c);return ge[d>>2]=x,0}catch(A){if(typeof w>"u"||A.name!=="ErrnoError")throw A;return A.errno}}var Am=a=>a,Rm=a=>{var s=t["_"+a];return M(s,"Cannot call unknown function "+a+", make sure it is exported"),s},Cm=(a,s)=>{M(a.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),ot.set(a,s)},Ds=a=>df(a),Pm=a=>{var s=Si(a)+1,c=Ds(s);return nn(a,c,s),c},rf=(a,s,c,d,m)=>{var x={string:Ce=>{var st=0;return Ce!=null&&Ce!==0&&(st=Pm(Ce)),st},array:Ce=>{var st=Ds(Ce.length);return Cm(Ce,st),st}};function A(Ce){return s==="string"?qe(Ce):s==="boolean"?!!Ce:Ce}var P=Rm(a),z=[],ee=0;if(M(s!=="array",'Return type should not be "array".'),d)for(var le=0;le<d.length;le++){var xe=x[c[le]];xe?(ee===0&&(ee=$()),z[le]=xe(d[le])):z[le]=d[le]}var we=P(...z);function Me(Ce){return ee!==0&&ie(ee),A(Ce)}return we=Me(we),we},Dm=(a,s,c,d)=>(...m)=>rf(a,s,c,m),Lm=(...a)=>w.createPath(...a),Im=(...a)=>w.unlink(...a),Um=(...a)=>w.createLazyFile(...a),Fm=(...a)=>w.createDevice(...a),Nm=a=>Ls(a),Om=a=>ul(a),Bm=a=>{var s=$(),c=Ds(4),d=Ds(4);pf(a,c,d);var m=ge[c>>2],x=ge[d>>2],A=qe(m);Mi(m);var P;return x&&(P=qe(x),Mi(x)),ie(s),[A,P]},af=a=>Bm(a);w.createPreloadedFile=We,w.staticInit(),Ia(),$o(),M(Jn.length===10),t.noExitRuntime&&(ct=t.noExitRuntime),t.preloadPlugins&&($e=t.preloadPlugins),t.print&&(U=t.print),t.printErr&&(O=t.printErr),t.wasmBinary&&(L=t.wasmBinary),Gm(),t.arguments&&t.arguments,t.thisProgram&&(f=t.thisProgram),M(typeof t.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),M(typeof t.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),M(typeof t.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),M(typeof t.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),M(typeof t.read>"u","Module.read option was removed"),M(typeof t.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),M(typeof t.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),M(typeof t.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),M(typeof t.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),M(typeof t.ENVIRONMENT>"u","Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),M(typeof t.STACK_SIZE>"u","STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),M(typeof t.wasmMemory>"u","Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),M(typeof t.INITIAL_MEMORY>"u","Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),t.addRunDependency=Z,t.removeRunDependency=et,t.ccall=rf,t.cwrap=Dm,t.FS_createPreloadedFile=We,t.FS_unlink=Im,t.FS_createPath=Lm,t.FS_createDevice=Fm,t.FS=w,t.FS_createDataFile=se,t.FS_createLazyFile=Um,t.MEMFS=Q;var km=["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","zeroMemory","withStackSave","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","runMainThreadEmAsm","jstoi_q","autoResumeAudioContext","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","HandleAllocator","getNativeTypeSize","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","stringToAscii","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace","getFunctionArgsName","createJsInvokerSignature","PureVirtualError","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","setDelayFunction","count_emval_handles"];km.forEach(pe);var zm=["run","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP8","HEAPU8","HEAP16","HEAPU16","HEAP32","HEAPU32","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","setTempRet0","ptrToString","exitJS","getHeapMax","growMemory","ENV","ERRNO_CODES","strError","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","getExecutableName","keepRuntimeAlive","asyncLoad","alignMemory","mmapAlloc","wasmTable","getUniqueRunDependency","noExitRuntime","addOnPreRun","addOnPostRun","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","intArrayFromString","AsciiToString","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","getEnvStrings","checkWasiClock","doReadv","doWritev","initRandomFill","randomFill","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","preloadPlugins","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS_readFile","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_forceLoadFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s","InternalError","BindingError","throwInternalError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","whenDependentTypesAreResolved","getTypeName","getFunctionName","heap32VectorToArray","requireRegisteredType","usesDestructorStack","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","GenericWireTypeSize","EmValType","EmValOptionalType","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","getInheritedInstance","registeredPointers","registerType","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","assertIntegerRange","readPointer","runDestructors","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","deletionQueue","flushPendingDeletes","delayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_freelist","emval_handles","emval_symbols","getStringOrSymbol","Emval","emval_get_global","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller"];zm.forEach(me),t.incrementExceptionRefcount=Nm,t.decrementExceptionRefcount=Om,t.getExceptionMessage=af;function Gm(){q("fetchSettings")}var sf={701944:()=>{typeof t<"u"&&"mjDISABLESTRING mjENABLESTRING mjFRAMESTRING mjLABELSTRING mjRNDSTRING mjTIMERSTRING mjVISSTRING".split(" ").forEach(function(a){Object.defineProperty(t,a,{get:function(){return t["get_"+a]()},set:function(s){},enumerable:!0,configurable:!0})})}},of=X("___getTypeName"),ol=X("_malloc"),ll=X("_fflush"),Mi=X("_free"),cl=X("_emscripten_stack_get_end"),lf=X("_strerror"),Pe=X("_setThrew"),cf=X("__emscripten_tempret_set"),uf=X("_emscripten_stack_init"),ff=X("__emscripten_stack_restore"),df=X("__emscripten_stack_alloc"),hf=X("_emscripten_stack_get_current"),ul=X("___cxa_decrement_exception_refcount"),Ls=X("___cxa_increment_exception_refcount"),pf=X("___get_exception_message"),mf=X("___cxa_can_catch"),_f=X("___cxa_get_exception_ptr");function Hm(a){of=k("__getTypeName",1),ol=k("malloc",1),ll=k("fflush",1),Mi=k("free",1),cl=a.emscripten_stack_get_end,a.emscripten_stack_get_base,lf=k("strerror",1),Pe=k("setThrew",2),cf=k("_emscripten_tempret_set",1),uf=a.emscripten_stack_init,a.emscripten_stack_get_free,ff=a._emscripten_stack_restore,df=a._emscripten_stack_alloc,hf=a.emscripten_stack_get_current,ul=k("__cxa_decrement_exception_refcount",1),Ls=k("__cxa_increment_exception_refcount",1),pf=k("__get_exception_message",3),mf=k("__cxa_can_catch",3),_f=k("__cxa_get_exception_ptr",1)}var gf={__assert_fail:Ke,__cxa_begin_catch:Sn,__cxa_current_primary_exception:An,__cxa_end_catch:zr,__cxa_find_matching_catch_2:ur,__cxa_find_matching_catch_3:Gr,__cxa_rethrow:qn,__cxa_rethrow_primary_exception:Ni,__cxa_throw:Hr,__cxa_uncaught_exceptions:Yi,__resumeException:si,__syscall_dup3:qt,__syscall_fcntl64:Xe,__syscall_fstat64:tn,__syscall_ioctl:At,__syscall_lstat64:un,__syscall_newfstatat:Rn,__syscall_openat:Yn,__syscall_stat64:kn,_abort_js:Vt,_embind_register_bigint:ms,_embind_register_bool:Wr,_embind_register_class:qo,_embind_register_class_class_function:Zo,_embind_register_class_constructor:Jo,_embind_register_class_function:Qo,_embind_register_class_property:el,_embind_register_constant:tl,_embind_register_emval:Rs,_embind_register_enum:S,_embind_register_enum_value:H,_embind_register_float:J,_embind_register_function:fe,_embind_register_integer:Ie,_embind_register_memory_view:nt,_embind_register_optional:Lt,_embind_register_std_string:Gn,_embind_register_std_wstring:Pp,_embind_register_user_type:Dp,_embind_register_void:Lp,_emscripten_throw_longjmp:Ip,_emval_as:Up,_emval_as_int64:Fp,_emval_call:Np,_emval_call_method:Bp,_emval_decref:Na,_emval_get_global:kp,_emval_get_method_caller:Hp,_emval_get_property:Vp,_emval_incref:Wp,_emval_is_number:$p,_emval_is_string:Xp,_emval_new_array:qp,_emval_new_cstring:Yp,_emval_run_destructors:jp,_emval_take_value:Kp,_emval_throw:Zp,_localtime_js:im,_mktime_js:rm,_tzset_js:am,clock_time_get:om,emscripten_asm_const_int:um,emscripten_date_now:Qu,emscripten_get_heap_max:fm,emscripten_get_now:Ju,emscripten_resize_heap:pm,environ_get:_m,environ_sizes_get:gm,exit:xm,fd_close:Sm,fd_read:Mm,fd_seek:bm,fd_write:Tm,invoke_ddd:Mg,invoke_dddi:I_,invoke_dddidi:U_,invoke_ddidi:L_,invoke_di:F_,invoke_didd:dg,invoke_dii:M_,invoke_diii:i_,invoke_diiii:D_,invoke_diiiidd:C_,invoke_diiiidi:s_,invoke_diiiii:Zm,invoke_diiiiii:d_,invoke_diiiiiii:N_,invoke_diiiiiiiii:u_,invoke_diiiiiiiiiiii:f_,invoke_fiii:Dg,invoke_i:Jm,invoke_id:j_,invoke_ii:$m,invoke_iid:X_,invoke_iidiii:x_,invoke_iidiiid:v_,invoke_iidiiiiidi:S_,invoke_iii:Vm,invoke_iiid:E_,invoke_iiididdddddd:y_,invoke_iiidiiiiiiii:g_,invoke_iiii:Ym,invoke_iiiidddiiiii:B_,invoke_iiiii:n_,invoke_iiiiid:cg,invoke_iiiiii:eg,invoke_iiiiiii:Y_,invoke_iiiiiiii:$_,invoke_iiiiiiiidd:ug,invoke_iiiiiiiii:R_,invoke_iiiiiiiiid:Eg,invoke_iiiiiiiiii:J_,invoke_iiiiiiiiiidddiiiiiiiii:__,invoke_iiiiiiiiiii:K_,invoke_iiiiiiiiiiii:Lg,invoke_iiiiiiiiiiiii:hg,invoke_iiij:Q_,invoke_iiji:Z_,invoke_j:Cg,invoke_ji:xg,invoke_jiiii:tg,invoke_jij:pg,invoke_v:qm,invoke_vi:Xm,invoke_vid:q_,invoke_viddd:ig,invoke_vidddd:rg,invoke_vidi:P_,invoke_vidiii:p_,invoke_vif:Tg,invoke_vii:Km,invoke_viid:T_,invoke_viiddi:lg,invoke_viiddidi:og,invoke_viiddii:O_,invoke_viidi:w_,invoke_viidii:a_,invoke_viidiii:V_,invoke_viidiiid:G_,invoke_viidiiiii:m_,invoke_viidiiiiidi:W_,invoke_viidiiiiiiii:h_,invoke_viii:Wm,invoke_viiid:l_,invoke_viiidd:sg,invoke_viiidi:b_,invoke_viiididdddddd:H_,invoke_viiidiiiiiiii:z_,invoke_viiii:e_,invoke_viiiiddd:ag,invoke_viiiidi:bg,invoke_viiiifi:wg,invoke_viiiii:jm,invoke_viiiiid:o_,invoke_viiiiii:Qm,invoke_viiiiiii:r_,invoke_viiiiiiii:A_,invoke_viiiiiiiii:fg,invoke_viiiiiiiiii:vg,invoke_viiiiiiiiiidddiiiiiiiii:k_,invoke_viiiiiiiiiii:Sg,invoke_viiiiiiiiiiid:c_,invoke_viiiiiiiiiiiii:_g,invoke_viiiiiiiiiiiiii:gg,invoke_viiiiiiiiiiiiiii:Ig,invoke_viiiiiiiiiiiiiiiiii:yg,invoke_viiiij:Ag,invoke_viiij:t_,invoke_viij:Rg,invoke_viijii:Pg,invoke_vij:mg,invoke_vijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj:ng,llvm_eh_typeid_for:Am},vr=await be();function Vm(a,s,c){var d=$();try{return Re(a)(s,c)}catch(m){if(ie(d),!(m instanceof F))throw m;Pe(1,0)}}function Wm(a,s,c,d){var m=$();try{Re(a)(s,c,d)}catch(x){if(ie(m),!(x instanceof F))throw x;Pe(1,0)}}function $m(a,s){var c=$();try{return Re(a)(s)}catch(d){if(ie(c),!(d instanceof F))throw d;Pe(1,0)}}function Xm(a,s){var c=$();try{Re(a)(s)}catch(d){if(ie(c),!(d instanceof F))throw d;Pe(1,0)}}function qm(a){var s=$();try{Re(a)()}catch(c){if(ie(s),!(c instanceof F))throw c;Pe(1,0)}}function Ym(a,s,c,d){var m=$();try{return Re(a)(s,c,d)}catch(x){if(ie(m),!(x instanceof F))throw x;Pe(1,0)}}function jm(a,s,c,d,m,x){var A=$();try{Re(a)(s,c,d,m,x)}catch(P){if(ie(A),!(P instanceof F))throw P;Pe(1,0)}}function Km(a,s,c){var d=$();try{Re(a)(s,c)}catch(m){if(ie(d),!(m instanceof F))throw m;Pe(1,0)}}function Zm(a,s,c,d,m,x){var A=$();try{return Re(a)(s,c,d,m,x)}catch(P){if(ie(A),!(P instanceof F))throw P;Pe(1,0)}}function Jm(a){var s=$();try{return Re(a)()}catch(c){if(ie(s),!(c instanceof F))throw c;Pe(1,0)}}function Qm(a,s,c,d,m,x,A){var P=$();try{Re(a)(s,c,d,m,x,A)}catch(z){if(ie(P),!(z instanceof F))throw z;Pe(1,0)}}function e_(a,s,c,d,m){var x=$();try{Re(a)(s,c,d,m)}catch(A){if(ie(x),!(A instanceof F))throw A;Pe(1,0)}}function t_(a,s,c,d,m){var x=$();try{Re(a)(s,c,d,m)}catch(A){if(ie(x),!(A instanceof F))throw A;Pe(1,0)}}function n_(a,s,c,d,m){var x=$();try{return Re(a)(s,c,d,m)}catch(A){if(ie(x),!(A instanceof F))throw A;Pe(1,0)}}function i_(a,s,c,d){var m=$();try{return Re(a)(s,c,d)}catch(x){if(ie(m),!(x instanceof F))throw x;Pe(1,0)}}function r_(a,s,c,d,m,x,A,P){var z=$();try{Re(a)(s,c,d,m,x,A,P)}catch(ee){if(ie(z),!(ee instanceof F))throw ee;Pe(1,0)}}function a_(a,s,c,d,m,x){var A=$();try{Re(a)(s,c,d,m,x)}catch(P){if(ie(A),!(P instanceof F))throw P;Pe(1,0)}}function s_(a,s,c,d,m,x,A){var P=$();try{return Re(a)(s,c,d,m,x,A)}catch(z){if(ie(P),!(z instanceof F))throw z;Pe(1,0)}}function o_(a,s,c,d,m,x,A){var P=$();try{Re(a)(s,c,d,m,x,A)}catch(z){if(ie(P),!(z instanceof F))throw z;Pe(1,0)}}function l_(a,s,c,d,m){var x=$();try{Re(a)(s,c,d,m)}catch(A){if(ie(x),!(A instanceof F))throw A;Pe(1,0)}}function c_(a,s,c,d,m,x,A,P,z,ee,le,xe,we){var Me=$();try{Re(a)(s,c,d,m,x,A,P,z,ee,le,xe,we)}catch(Ce){if(ie(Me),!(Ce instanceof F))throw Ce;Pe(1,0)}}function u_(a,s,c,d,m,x,A,P,z,ee){var le=$();try{return Re(a)(s,c,d,m,x,A,P,z,ee)}catch(xe){if(ie(le),!(xe instanceof F))throw xe;Pe(1,0)}}function f_(a,s,c,d,m,x,A,P,z,ee,le,xe,we){var Me=$();try{return Re(a)(s,c,d,m,x,A,P,z,ee,le,xe,we)}catch(Ce){if(ie(Me),!(Ce instanceof F))throw Ce;Pe(1,0)}}function d_(a,s,c,d,m,x,A){var P=$();try{return Re(a)(s,c,d,m,x,A)}catch(z){if(ie(P),!(z instanceof F))throw z;Pe(1,0)}}function h_(a,s,c,d,m,x,A,P,z,ee,le,xe){var we=$();try{Re(a)(s,c,d,m,x,A,P,z,ee,le,xe)}catch(Me){if(ie(we),!(Me instanceof F))throw Me;Pe(1,0)}}function p_(a,s,c,d,m,x){var A=$();try{Re(a)(s,c,d,m,x)}catch(P){if(ie(A),!(P instanceof F))throw P;Pe(1,0)}}function m_(a,s,c,d,m,x,A,P,z){var ee=$();try{Re(a)(s,c,d,m,x,A,P,z)}catch(le){if(ie(ee),!(le instanceof F))throw le;Pe(1,0)}}function __(a,s,c,d,m,x,A,P,z,ee,le,xe,we,Me,Ce,st,Rt,bt,Jt,zt,Mn,dn){var Dn=$();try{return Re(a)(s,c,d,m,x,A,P,z,ee,le,xe,we,Me,Ce,st,Rt,bt,Jt,zt,Mn,dn)}catch(Kt){if(ie(Dn),!(Kt instanceof F))throw Kt;Pe(1,0)}}function g_(a,s,c,d,m,x,A,P,z,ee,le,xe){var we=$();try{return Re(a)(s,c,d,m,x,A,P,z,ee,le,xe)}catch(Me){if(ie(we),!(Me instanceof F))throw Me;Pe(1,0)}}function v_(a,s,c,d,m,x,A){var P=$();try{return Re(a)(s,c,d,m,x,A)}catch(z){if(ie(P),!(z instanceof F))throw z;Pe(1,0)}}function y_(a,s,c,d,m,x,A,P,z,ee,le,xe){var we=$();try{return Re(a)(s,c,d,m,x,A,P,z,ee,le,xe)}catch(Me){if(ie(we),!(Me instanceof F))throw Me;Pe(1,0)}}function x_(a,s,c,d,m,x){var A=$();try{return Re(a)(s,c,d,m,x)}catch(P){if(ie(A),!(P instanceof F))throw P;Pe(1,0)}}function S_(a,s,c,d,m,x,A,P,z,ee){var le=$();try{return Re(a)(s,c,d,m,x,A,P,z,ee)}catch(xe){if(ie(le),!(xe instanceof F))throw xe;Pe(1,0)}}function E_(a,s,c,d){var m=$();try{return Re(a)(s,c,d)}catch(x){if(ie(m),!(x instanceof F))throw x;Pe(1,0)}}function M_(a,s,c){var d=$();try{return Re(a)(s,c)}catch(m){if(ie(d),!(m instanceof F))throw m;Pe(1,0)}}function b_(a,s,c,d,m,x){var A=$();try{Re(a)(s,c,d,m,x)}catch(P){if(ie(A),!(P instanceof F))throw P;Pe(1,0)}}function w_(a,s,c,d,m){var x=$();try{Re(a)(s,c,d,m)}catch(A){if(ie(x),!(A instanceof F))throw A;Pe(1,0)}}function T_(a,s,c,d){var m=$();try{Re(a)(s,c,d)}catch(x){if(ie(m),!(x instanceof F))throw x;Pe(1,0)}}function A_(a,s,c,d,m,x,A,P,z){var ee=$();try{Re(a)(s,c,d,m,x,A,P,z)}catch(le){if(ie(ee),!(le instanceof F))throw le;Pe(1,0)}}function R_(a,s,c,d,m,x,A,P,z){var ee=$();try{return Re(a)(s,c,d,m,x,A,P,z)}catch(le){if(ie(ee),!(le instanceof F))throw le;Pe(1,0)}}function C_(a,s,c,d,m,x,A){var P=$();try{return Re(a)(s,c,d,m,x,A)}catch(z){if(ie(P),!(z instanceof F))throw z;Pe(1,0)}}function P_(a,s,c,d){var m=$();try{Re(a)(s,c,d)}catch(x){if(ie(m),!(x instanceof F))throw x;Pe(1,0)}}function D_(a,s,c,d,m){var x=$();try{return Re(a)(s,c,d,m)}catch(A){if(ie(x),!(A instanceof F))throw A;Pe(1,0)}}function L_(a,s,c,d,m){var x=$();try{return Re(a)(s,c,d,m)}catch(A){if(ie(x),!(A instanceof F))throw A;Pe(1,0)}}function I_(a,s,c,d){var m=$();try{return Re(a)(s,c,d)}catch(x){if(ie(m),!(x instanceof F))throw x;Pe(1,0)}}function U_(a,s,c,d,m,x){var A=$();try{return Re(a)(s,c,d,m,x)}catch(P){if(ie(A),!(P instanceof F))throw P;Pe(1,0)}}function F_(a,s){var c=$();try{return Re(a)(s)}catch(d){if(ie(c),!(d instanceof F))throw d;Pe(1,0)}}function N_(a,s,c,d,m,x,A,P){var z=$();try{return Re(a)(s,c,d,m,x,A,P)}catch(ee){if(ie(z),!(ee instanceof F))throw ee;Pe(1,0)}}function O_(a,s,c,d,m,x,A){var P=$();try{Re(a)(s,c,d,m,x,A)}catch(z){if(ie(P),!(z instanceof F))throw z;Pe(1,0)}}function B_(a,s,c,d,m,x,A,P,z,ee,le,xe){var we=$();try{return Re(a)(s,c,d,m,x,A,P,z,ee,le,xe)}catch(Me){if(ie(we),!(Me instanceof F))throw Me;Pe(1,0)}}function k_(a,s,c,d,m,x,A,P,z,ee,le,xe,we,Me,Ce,st,Rt,bt,Jt,zt,Mn,dn,Dn){var Kt=$();try{Re(a)(s,c,d,m,x,A,P,z,ee,le,xe,we,Me,Ce,st,Rt,bt,Jt,zt,Mn,dn,Dn)}catch(yr){if(ie(Kt),!(yr instanceof F))throw yr;Pe(1,0)}}function z_(a,s,c,d,m,x,A,P,z,ee,le,xe,we){var Me=$();try{Re(a)(s,c,d,m,x,A,P,z,ee,le,xe,we)}catch(Ce){if(ie(Me),!(Ce instanceof F))throw Ce;Pe(1,0)}}function G_(a,s,c,d,m,x,A,P){var z=$();try{Re(a)(s,c,d,m,x,A,P)}catch(ee){if(ie(z),!(ee instanceof F))throw ee;Pe(1,0)}}function H_(a,s,c,d,m,x,A,P,z,ee,le,xe,we){var Me=$();try{Re(a)(s,c,d,m,x,A,P,z,ee,le,xe,we)}catch(Ce){if(ie(Me),!(Ce instanceof F))throw Ce;Pe(1,0)}}function V_(a,s,c,d,m,x,A){var P=$();try{Re(a)(s,c,d,m,x,A)}catch(z){if(ie(P),!(z instanceof F))throw z;Pe(1,0)}}function W_(a,s,c,d,m,x,A,P,z,ee,le){var xe=$();try{Re(a)(s,c,d,m,x,A,P,z,ee,le)}catch(we){if(ie(xe),!(we instanceof F))throw we;Pe(1,0)}}function $_(a,s,c,d,m,x,A,P){var z=$();try{return Re(a)(s,c,d,m,x,A,P)}catch(ee){if(ie(z),!(ee instanceof F))throw ee;Pe(1,0)}}function X_(a,s,c){var d=$();try{return Re(a)(s,c)}catch(m){if(ie(d),!(m instanceof F))throw m;Pe(1,0)}}function q_(a,s,c){var d=$();try{Re(a)(s,c)}catch(m){if(ie(d),!(m instanceof F))throw m;Pe(1,0)}}function Y_(a,s,c,d,m,x,A){var P=$();try{return Re(a)(s,c,d,m,x,A)}catch(z){if(ie(P),!(z instanceof F))throw z;Pe(1,0)}}function j_(a,s){var c=$();try{return Re(a)(s)}catch(d){if(ie(c),!(d instanceof F))throw d;Pe(1,0)}}function K_(a,s,c,d,m,x,A,P,z,ee,le){var xe=$();try{return Re(a)(s,c,d,m,x,A,P,z,ee,le)}catch(we){if(ie(xe),!(we instanceof F))throw we;Pe(1,0)}}function Z_(a,s,c,d){var m=$();try{return Re(a)(s,c,d)}catch(x){if(ie(m),!(x instanceof F))throw x;Pe(1,0)}}function J_(a,s,c,d,m,x,A,P,z,ee){var le=$();try{return Re(a)(s,c,d,m,x,A,P,z,ee)}catch(xe){if(ie(le),!(xe instanceof F))throw xe;Pe(1,0)}}function Q_(a,s,c,d){var m=$();try{return Re(a)(s,c,d)}catch(x){if(ie(m),!(x instanceof F))throw x;Pe(1,0)}}function eg(a,s,c,d,m,x){var A=$();try{return Re(a)(s,c,d,m,x)}catch(P){if(ie(A),!(P instanceof F))throw P;Pe(1,0)}}function tg(a,s,c,d,m){var x=$();try{return Re(a)(s,c,d,m)}catch(A){if(ie(x),!(A instanceof F))throw A;return Pe(1,0),0n}}function ng(a,s,c,d,m,x,A,P,z,ee,le,xe,we,Me,Ce,st,Rt,bt,Jt,zt,Mn,dn,Dn,Kt,yr,Og,Bg,kg,zg,Gg,Hg,Vg,Wg,$g,Xg,qg,Yg,jg,Kg,Zg,Jg,Qg,e0,t0,n0,i0,r0,a0,s0,o0,l0,c0,u0,f0,d0,h0,p0,m0,_0,g0,v0,y0,x0,S0,E0,M0,b0,w0,T0,A0,R0,C0,P0,D0,L0,I0,U0,F0,N0,O0,B0,k0,z0,G0,H0,V0){var W0=$();try{Re(a)(s,c,d,m,x,A,P,z,ee,le,xe,we,Me,Ce,st,Rt,bt,Jt,zt,Mn,dn,Dn,Kt,yr,Og,Bg,kg,zg,Gg,Hg,Vg,Wg,$g,Xg,qg,Yg,jg,Kg,Zg,Jg,Qg,e0,t0,n0,i0,r0,a0,s0,o0,l0,c0,u0,f0,d0,h0,p0,m0,_0,g0,v0,y0,x0,S0,E0,M0,b0,w0,T0,A0,R0,C0,P0,D0,L0,I0,U0,F0,N0,O0,B0,k0,z0,G0,H0,V0)}catch(yf){if(ie(W0),!(yf instanceof F))throw yf;Pe(1,0)}}function ig(a,s,c,d,m){var x=$();try{Re(a)(s,c,d,m)}catch(A){if(ie(x),!(A instanceof F))throw A;Pe(1,0)}}function rg(a,s,c,d,m,x){var A=$();try{Re(a)(s,c,d,m,x)}catch(P){if(ie(A),!(P instanceof F))throw P;Pe(1,0)}}function ag(a,s,c,d,m,x,A,P){var z=$();try{Re(a)(s,c,d,m,x,A,P)}catch(ee){if(ie(z),!(ee instanceof F))throw ee;Pe(1,0)}}function sg(a,s,c,d,m,x){var A=$();try{Re(a)(s,c,d,m,x)}catch(P){if(ie(A),!(P instanceof F))throw P;Pe(1,0)}}function og(a,s,c,d,m,x,A,P){var z=$();try{Re(a)(s,c,d,m,x,A,P)}catch(ee){if(ie(z),!(ee instanceof F))throw ee;Pe(1,0)}}function lg(a,s,c,d,m,x){var A=$();try{Re(a)(s,c,d,m,x)}catch(P){if(ie(A),!(P instanceof F))throw P;Pe(1,0)}}function cg(a,s,c,d,m,x){var A=$();try{return Re(a)(s,c,d,m,x)}catch(P){if(ie(A),!(P instanceof F))throw P;Pe(1,0)}}function ug(a,s,c,d,m,x,A,P,z,ee){var le=$();try{return Re(a)(s,c,d,m,x,A,P,z,ee)}catch(xe){if(ie(le),!(xe instanceof F))throw xe;Pe(1,0)}}function fg(a,s,c,d,m,x,A,P,z,ee){var le=$();try{Re(a)(s,c,d,m,x,A,P,z,ee)}catch(xe){if(ie(le),!(xe instanceof F))throw xe;Pe(1,0)}}function dg(a,s,c,d){var m=$();try{return Re(a)(s,c,d)}catch(x){if(ie(m),!(x instanceof F))throw x;Pe(1,0)}}function hg(a,s,c,d,m,x,A,P,z,ee,le,xe,we){var Me=$();try{return Re(a)(s,c,d,m,x,A,P,z,ee,le,xe,we)}catch(Ce){if(ie(Me),!(Ce instanceof F))throw Ce;Pe(1,0)}}function pg(a,s,c){var d=$();try{return Re(a)(s,c)}catch(m){if(ie(d),!(m instanceof F))throw m;return Pe(1,0),0n}}function mg(a,s,c){var d=$();try{Re(a)(s,c)}catch(m){if(ie(d),!(m instanceof F))throw m;Pe(1,0)}}function _g(a,s,c,d,m,x,A,P,z,ee,le,xe,we,Me){var Ce=$();try{Re(a)(s,c,d,m,x,A,P,z,ee,le,xe,we,Me)}catch(st){if(ie(Ce),!(st instanceof F))throw st;Pe(1,0)}}function gg(a,s,c,d,m,x,A,P,z,ee,le,xe,we,Me,Ce){var st=$();try{Re(a)(s,c,d,m,x,A,P,z,ee,le,xe,we,Me,Ce)}catch(Rt){if(ie(st),!(Rt instanceof F))throw Rt;Pe(1,0)}}function vg(a,s,c,d,m,x,A,P,z,ee,le){var xe=$();try{Re(a)(s,c,d,m,x,A,P,z,ee,le)}catch(we){if(ie(xe),!(we instanceof F))throw we;Pe(1,0)}}function yg(a,s,c,d,m,x,A,P,z,ee,le,xe,we,Me,Ce,st,Rt,bt,Jt){var zt=$();try{Re(a)(s,c,d,m,x,A,P,z,ee,le,xe,we,Me,Ce,st,Rt,bt,Jt)}catch(Mn){if(ie(zt),!(Mn instanceof F))throw Mn;Pe(1,0)}}function xg(a,s){var c=$();try{return Re(a)(s)}catch(d){if(ie(c),!(d instanceof F))throw d;return Pe(1,0),0n}}function Sg(a,s,c,d,m,x,A,P,z,ee,le,xe){var we=$();try{Re(a)(s,c,d,m,x,A,P,z,ee,le,xe)}catch(Me){if(ie(we),!(Me instanceof F))throw Me;Pe(1,0)}}function Eg(a,s,c,d,m,x,A,P,z,ee){var le=$();try{return Re(a)(s,c,d,m,x,A,P,z,ee)}catch(xe){if(ie(le),!(xe instanceof F))throw xe;Pe(1,0)}}function Mg(a,s,c){var d=$();try{return Re(a)(s,c)}catch(m){if(ie(d),!(m instanceof F))throw m;Pe(1,0)}}function bg(a,s,c,d,m,x,A){var P=$();try{Re(a)(s,c,d,m,x,A)}catch(z){if(ie(P),!(z instanceof F))throw z;Pe(1,0)}}function wg(a,s,c,d,m,x,A){var P=$();try{Re(a)(s,c,d,m,x,A)}catch(z){if(ie(P),!(z instanceof F))throw z;Pe(1,0)}}function Tg(a,s,c){var d=$();try{Re(a)(s,c)}catch(m){if(ie(d),!(m instanceof F))throw m;Pe(1,0)}}function Ag(a,s,c,d,m,x){var A=$();try{Re(a)(s,c,d,m,x)}catch(P){if(ie(A),!(P instanceof F))throw P;Pe(1,0)}}function Rg(a,s,c,d){var m=$();try{Re(a)(s,c,d)}catch(x){if(ie(m),!(x instanceof F))throw x;Pe(1,0)}}function Cg(a){var s=$();try{return Re(a)()}catch(c){if(ie(s),!(c instanceof F))throw c;return Pe(1,0),0n}}function Pg(a,s,c,d,m,x){var A=$();try{Re(a)(s,c,d,m,x)}catch(P){if(ie(A),!(P instanceof F))throw P;Pe(1,0)}}function Dg(a,s,c,d){var m=$();try{return Re(a)(s,c,d)}catch(x){if(ie(m),!(x instanceof F))throw x;Pe(1,0)}}function Lg(a,s,c,d,m,x,A,P,z,ee,le,xe){var we=$();try{return Re(a)(s,c,d,m,x,A,P,z,ee,le,xe)}catch(Me){if(ie(we),!(Me instanceof F))throw Me;Pe(1,0)}}function Ig(a,s,c,d,m,x,A,P,z,ee,le,xe,we,Me,Ce,st){var Rt=$();try{Re(a)(s,c,d,m,x,A,P,z,ee,le,xe,we,Me,Ce,st)}catch(bt){if(ie(Rt),!(bt instanceof F))throw bt;Pe(1,0)}}var vf;function Ug(){uf(),R()}function fl(){if(Xt>0){sn=fl;return}if(Ug(),Wt(),Xt>0){sn=fl;return}function a(){M(!vf),vf=!0,t.calledRun=!0,!N&&(pt(),Se?.(t),t.onRuntimeInitialized?.(),ae("onRuntimeInitialized"),M(!t._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),$t())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),a()},1)):a(),B()}function Fg(){var a=U,s=O,c=!1;U=O=d=>{c=!0};try{ll(0),["stdout","stderr"].forEach(d=>{var m=w.analyzePath("/dev/"+d);if(m){var x=m.object,A=x.rdev,P=D.ttys[A];P?.output?.length&&(c=!0)}})}catch{}U=a,O=s,c&&Le("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}function Ng(){if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();ae("preInit")}Ng(),fl(),at?e=t:e=new Promise((a,s)=>{Se=a,je=s});for(const a of Object.keys(t))a in n||Object.defineProperty(n,a,{configurable:!0,get(){lt(`Access to module property ('${a}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return e});const Fb=""+new URL("mujoco-CGsuVDfV.wasm",import.meta.url).href;var wu=Object.defineProperty,Nb=Object.getOwnPropertyDescriptor,Ob=Object.getOwnPropertyNames,Bb=Object.prototype.hasOwnProperty,kb=(n=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(n,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):n)(function(n){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+n+'" is not supported')}),Ht=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(i){throw t=[i],i}},Bo=(n,e)=>{for(var t in e)wu(n,t,{get:e[t],enumerable:!0})},zb=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Ob(e))!Bb.call(n,r)&&r!==t&&wu(n,r,{get:()=>e[r],enumerable:!(i=Nb(e,r))||i.enumerable});return n},tu=n=>zb(wu({},"__esModule",{value:!0}),n),qa,ir,cs,Td,Nh,Oh=Ht(()=>{"use strict";qa=new Map,ir=[],cs=(n,e,t)=>{if(e&&typeof e.init=="function"&&typeof e.createInferenceSessionHandler=="function"){let i=qa.get(n);if(i===void 0)qa.set(n,{backend:e,priority:t});else{if(i.priority>t)return;if(i.priority===t&&i.backend!==e)throw new Error(`cannot register backend "${n}" using priority ${t}`)}if(t>=0){let r=ir.indexOf(n);r!==-1&&ir.splice(r,1);for(let o=0;o<ir.length;o++)if(qa.get(ir[o]).priority<=t){ir.splice(o,0,n);return}ir.push(n)}return}throw new TypeError("not a valid backend")},Td=async n=>{let e=qa.get(n);if(!e)return"backend not found.";if(e.initialized)return e.backend;if(e.aborted)return e.error;{let t=!!e.initPromise;try{return t||(e.initPromise=e.backend.init(n)),await e.initPromise,e.initialized=!0,e.backend}catch(i){return t||(e.error=`${i}`,e.aborted=!0),e.error}finally{delete e.initPromise}}},Nh=async n=>{let e=n.executionProviders||[],t=e.map(f=>typeof f=="string"?f:f.name),i=t.length===0?ir:t,r,o=[],l=new Set;for(let f of i){let h=await Td(f);typeof h=="string"?o.push({name:f,err:h}):(r||(r=h),r===h&&l.add(f))}if(!r)throw new Error(`no available backend found. ERR: ${o.map(f=>`[${f.name}] ${f.err}`).join(", ")}`);for(let{name:f,err:h}of o)t.includes(f)&&console.warn(`removing requested execution provider "${f}" from session options because it is not available: ${h}`);let u=e.filter(f=>l.has(typeof f=="string"?f:f.name));return[r,new Proxy(n,{get:(f,h)=>h==="executionProviders"?u:Reflect.get(f,h)})]}}),Gb=Ht(()=>{"use strict";Oh()}),Bh,Hb=Ht(()=>{"use strict";Bh="1.30.0"}),ql,gn,kh=Ht(()=>{"use strict";Hb(),ql="warning",gn={wasm:{},webgl:{},webgpu:{},versions:{common:Bh},set logLevel(n){if(n!==void 0){if(typeof n!="string"||["verbose","info","warning","error","fatal"].indexOf(n)===-1)throw new Error(`Unsupported logging level: ${n}`);ql=n}},get logLevel(){return ql}},Object.defineProperty(gn,"logLevel",{enumerable:!0})}),Qt,Vb=Ht(()=>{"use strict";kh(),Qt=gn}),zh,Gh,Wb=Ht(()=>{"use strict";zh=(n,e)=>{let t=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);t.width=n.dims[3],t.height=n.dims[2];let i=t.getContext("2d");if(i!=null){let r,o;e?.tensorLayout!==void 0&&e.tensorLayout==="NHWC"?(r=n.dims[2],o=n.dims[3]):(r=n.dims[3],o=n.dims[2]);let l=e?.format!==void 0?e.format:"RGB",u=e?.norm,f,h;u===void 0||u.mean===void 0?f=[255,255,255,255]:typeof u.mean=="number"?f=[u.mean,u.mean,u.mean,u.mean]:(f=[u.mean[0],u.mean[1],u.mean[2],0],u.mean[3]!==void 0&&(f[3]=u.mean[3])),u===void 0||u.bias===void 0?h=[0,0,0,0]:typeof u.bias=="number"?h=[u.bias,u.bias,u.bias,u.bias]:(h=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(h[3]=u.bias[3]));let _=o*r,g=0,p=_,y=_*2,T=-1;l==="RGBA"?(g=0,p=_,y=_*2,T=_*3):l==="RGB"?(g=0,p=_,y=_*2):l==="RBG"&&(g=0,y=_,p=_*2);for(let I=0;I<o;I++)for(let E=0;E<r;E++){let v=(n.data[g++]-h[0])*f[0],U=(n.data[p++]-h[1])*f[1],O=(n.data[y++]-h[2])*f[2],L=T===-1?255:(n.data[T++]-h[3])*f[3];i.fillStyle="rgba("+v+","+U+","+O+","+L+")",i.fillRect(E,I,1,1)}if("toDataURL"in t)return t.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Gh=(n,e)=>{let t=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(t!=null){let r,o,l;e?.tensorLayout!==void 0&&e.tensorLayout==="NHWC"?(r=n.dims[2],o=n.dims[1],l=n.dims[3]):(r=n.dims[3],o=n.dims[2],l=n.dims[1]);let u=e!==void 0&&e.format!==void 0?e.format:"RGB",f=e?.norm,h,_;f===void 0||f.mean===void 0?h=[255,255,255,255]:typeof f.mean=="number"?h=[f.mean,f.mean,f.mean,f.mean]:(h=[f.mean[0],f.mean[1],f.mean[2],255],f.mean[3]!==void 0&&(h[3]=f.mean[3])),f===void 0||f.bias===void 0?_=[0,0,0,0]:typeof f.bias=="number"?_=[f.bias,f.bias,f.bias,f.bias]:(_=[f.bias[0],f.bias[1],f.bias[2],0],f.bias[3]!==void 0&&(_[3]=f.bias[3]));let g=o*r;if(e!==void 0&&(e.format!==void 0&&l===4&&e.format!=="RGBA"||l===3&&e.format!=="RGB"&&e.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let p=4,y=0,T=1,I=2,E=3,v=0,U=g,O=g*2,L=-1;u==="RGBA"?(v=0,U=g,O=g*2,L=g*3):u==="RGB"?(v=0,U=g,O=g*2):u==="RBG"&&(v=0,O=g,U=g*2),i=t.createImageData(r,o);for(let N=0;N<o*r;y+=p,T+=p,I+=p,E+=p,N++)i.data[y]=(n.data[v++]-_[0])*h[0],i.data[T]=(n.data[U++]-_[1])*h[1],i.data[I]=(n.data[O++]-_[2])*h[2],i.data[E]=L===-1?255:(n.data[L++]-_[3])*h[3]}else throw new Error("Can not access image data");return i}}),lo,Hh,Vh,Wh,$h,Xh,$b=Ht(()=>{"use strict";Tu(),lo=(n,e)=>{if(n===void 0)throw new Error("Image buffer must be defined");if(e.height===void 0||e.width===void 0)throw new Error("Image height and width must be defined");if(e.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:t,width:i}=e,r=e.norm??{mean:255,bias:0},o,l;typeof r.mean=="number"?o=[r.mean,r.mean,r.mean,r.mean]:o=[r.mean[0],r.mean[1],r.mean[2],r.mean[3]??255],typeof r.bias=="number"?l=[r.bias,r.bias,r.bias,r.bias]:l=[r.bias[0],r.bias[1],r.bias[2],r.bias[3]??0];let u=e.format!==void 0?e.format:"RGBA",f=e.tensorFormat!==void 0&&e.tensorFormat!==void 0?e.tensorFormat:"RGB",h=t*i,_=f==="RGBA"?new Float32Array(h*4):new Float32Array(h*3),g=4,p=0,y=1,T=2,I=3,E=0,v=h,U=h*2,O=-1;u==="RGB"&&(g=3,p=0,y=1,T=2,I=-1),f==="RGBA"?O=h*3:f==="RBG"?(E=0,U=h,v=h*2):f==="BGR"&&(U=0,v=h,E=h*2);for(let L=0;L<h;L++,p+=g,T+=g,y+=g,I+=g)_[E++]=(n[p]+l[0])/o[0],_[v++]=(n[y]+l[1])/o[1],_[U++]=(n[T]+l[2])/o[2],O!==-1&&I!==-1&&(_[O++]=(n[I]+l[3])/o[3]);return f==="RGBA"?new $n("float32",_,[1,4,t,i]):new $n("float32",_,[1,3,t,i])},Hh=async(n,e)=>{let t=typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement,i=typeof ImageData<"u"&&n instanceof ImageData,r=typeof ImageBitmap<"u"&&n instanceof ImageBitmap,o=typeof n=="string",l,u=e??{},f=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},h=_=>typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||_ instanceof OffscreenCanvas?_.getContext("2d"):null;if(t){let _=f();_.width=n.width,_.height=n.height;let g=h(_);if(g!=null){let p=n.height,y=n.width;if(e!==void 0&&e.resizedHeight!==void 0&&e.resizedWidth!==void 0&&(p=e.resizedHeight,y=e.resizedWidth),e!==void 0){if(u=e,e.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");u.tensorFormat="RGBA",u.height=p,u.width=y}else u.tensorFormat="RGBA",u.height=p,u.width=y;g.drawImage(n,0,0),l=g.getImageData(0,0,y,p).data}else throw new Error("Can not access image data")}else if(i){let _,g;if(e!==void 0&&e.resizedWidth!==void 0&&e.resizedHeight!==void 0?(_=e.resizedHeight,g=e.resizedWidth):(_=n.height,g=n.width),e!==void 0&&(u=e),u.format="RGBA",u.height=_,u.width=g,e!==void 0){let p=f();p.width=g,p.height=_;let y=h(p);if(y!=null)y.putImageData(n,0,0),l=y.getImageData(0,0,g,_).data;else throw new Error("Can not access image data")}else l=n.data}else if(r){if(e===void 0)throw new Error("Please provide image config with format for Imagebitmap");let _=f();_.width=n.width,_.height=n.height;let g=h(_);if(g!=null){let p=n.height,y=n.width;return g.drawImage(n,0,0,y,p),l=g.getImageData(0,0,y,p).data,u.height=p,u.width=y,lo(l,u)}else throw new Error("Can not access image data")}else{if(o)return new Promise((_,g)=>{let p=f(),y=h(p);if(!n||!y)return g();let T=new Image;T.crossOrigin="Anonymous",T.src=n,T.onload=()=>{p.width=T.width,p.height=T.height,y.drawImage(T,0,0,p.width,p.height);let I=y.getImageData(0,0,p.width,p.height);u.height=p.height,u.width=p.width,_(lo(I.data,u))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(l!==void 0)return lo(l,u);throw new Error("Input data provided is not supported - aborted tensor creation")},Vh=(n,e)=>{let{width:t,height:i,download:r,dispose:o}=e,l=[1,i,t,4];return new $n({location:"texture",type:"float32",texture:n,dims:l,download:r,dispose:o})},Wh=(n,e)=>{let{dataType:t,dims:i,download:r,dispose:o}=e;return new $n({location:"gpu-buffer",type:t??"float32",gpuBuffer:n,dims:i,download:r,dispose:o})},$h=(n,e)=>{let{dataType:t,dims:i,download:r,dispose:o}=e;return new $n({location:"ml-tensor",type:t??"float32",mlTensor:n,dims:i,download:r,dispose:o})},Xh=(n,e,t)=>new $n({location:"cpu-pinned",type:n,data:e,dims:t??[e.length]})}),Cr,Qa,Yl,qh,Xb=Ht(()=>{"use strict";Cr=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Qa=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Yl=!1,qh=()=>{if(!Yl){Yl=!0;let n=typeof BigInt64Array<"u"&&BigInt64Array.from,e=typeof BigUint64Array<"u"&&BigUint64Array.from,t=globalThis.Float16Array,i=typeof t<"u"&&t.from;n&&(Cr.set("int64",BigInt64Array),Qa.set(BigInt64Array,"int64")),e&&(Cr.set("uint64",BigUint64Array),Qa.set(BigUint64Array,"uint64")),i?(Cr.set("float16",t),Qa.set(t,"float16")):Cr.set("float16",Uint16Array)}}}),Yh,jh,qb=Ht(()=>{"use strict";Tu(),Yh=n=>{let e=1;for(let t=0;t<n.length;t++){let i=n[t];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${t}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${t}] must be a non-negative integer, got: ${i}`);e*=i}return e},jh=(n,e)=>{switch(n.location){case"cpu":return new $n(n.type,n.data,e);case"cpu-pinned":return new $n({location:"cpu-pinned",data:n.data,type:n.type,dims:e});case"texture":return new $n({location:"texture",texture:n.texture,type:n.type,dims:e});case"gpu-buffer":return new $n({location:"gpu-buffer",gpuBuffer:n.gpuBuffer,type:n.type,dims:e});case"ml-tensor":return new $n({location:"ml-tensor",mlTensor:n.mlTensor,type:n.type,dims:e});default:throw new Error(`tensorReshape: tensor location ${n.location} is not supported`)}}}),$n,Tu=Ht(()=>{"use strict";Wb(),$b(),Xb(),qb(),$n=class{constructor(n,e,t){qh();let i,r;if(typeof n=="object"&&"location"in n)switch(this.dataLocation=n.location,i=n.type,r=n.dims,n.location){case"cpu-pinned":{let l=Cr.get(i);if(!l)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(n.data instanceof l))throw new TypeError(`buffer should be of type ${l.name}`);this.cpuData=n.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=n.texture,this.downloader=n.download,this.disposer=n.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=n.gpuBuffer,this.downloader=n.download,this.disposer=n.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=n.mlTensor,this.downloader=n.download,this.disposer=n.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let l,u;if(typeof n=="string")if(i=n,u=t,n==="string"){if(!Array.isArray(e))throw new TypeError("A string tensor's data must be a string array.");l=e}else{let f=Cr.get(n);if(f===void 0)throw new TypeError(`Unsupported tensor type: ${n}.`);if(Array.isArray(e)){if(n==="float16"&&f===Uint16Array||n==="uint4"||n==="int4")throw new TypeError(`Creating a ${n} tensor from number array is not supported. Please use ${f.name} as data.`);n==="uint64"||n==="int64"?l=f.from(e,BigInt):l=f.from(e)}else if(e instanceof f)l=e;else if(e instanceof Uint8ClampedArray)if(n==="uint8")l=Uint8Array.from(e);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(n==="float16"&&e instanceof Uint16Array&&f!==Uint16Array)l=new globalThis.Float16Array(e.buffer,e.byteOffset,e.length);else throw new TypeError(`A ${i} tensor's data must be type of ${f}`)}else if(u=e,Array.isArray(n)){if(n.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let f=typeof n[0];if(f==="string")i="string",l=n;else if(f==="boolean")i="bool",l=Uint8Array.from(n);else throw new TypeError(`Invalid element type of data array: ${f}.`)}else if(n instanceof Uint8ClampedArray)i="uint8",l=Uint8Array.from(n);else{let f=Qa.get(n.constructor);if(f===void 0)throw new TypeError(`Unsupported type for tensor data: ${n.constructor}.`);i=f,l=n}if(u===void 0)u=[l.length];else if(!Array.isArray(u))throw new TypeError("A tensor's dims must be a number array");r=u,this.cpuData=l,this.dataLocation="cpu"}let o=Yh(r);if(this.cpuData&&o!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(o/2)===this.cpuData.length))throw new Error(`Tensor's size(${o}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=r,this.size=o}static async fromImage(n,e){return Hh(n,e)}static fromTexture(n,e){return Vh(n,e)}static fromGpuBuffer(n,e){return Wh(n,e)}static fromMLTensor(n,e){return $h(n,e)}static fromPinnedBuffer(n,e,t){return Xh(n,e,t)}toDataURL(n){return zh(this,n)}toImageData(n){return Gh(this,n)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(n){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let e=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=e,n&&this.disposer&&(this.disposer(),this.disposer=void 0),e}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(n){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return jh(this,n)}}}),pi,Kh=Ht(()=>{"use strict";Tu(),pi=$n}),Co,jl,Fr,Nr,Or,Br,Zh=Ht(()=>{"use strict";kh(),Co=(n,e)=>{(typeof gn.trace>"u"?!gn.wasm.trace:!gn.trace)||console.timeStamp(`${n}::ORT::${e}`)},jl=(n,e)=>{let t=new Error().stack?.split(/\r\n|\r|\n/g)||[],i=!1;for(let r=0;r<t.length;r++){if(i&&!t[r].includes("TRACE_FUNC")){let o=`FUNC_${n}::${t[r].trim().split(" ")[1]}`;e&&(o+=`::${e}`),Co("CPU",o);return}t[r].includes("TRACE_FUNC")&&(i=!0)}},Fr=n=>{(typeof gn.trace>"u"?!gn.wasm.trace:!gn.trace)||jl("BEGIN",n)},Nr=n=>{(typeof gn.trace>"u"?!gn.wasm.trace:!gn.trace)||jl("END",n)},Or=n=>{(typeof gn.trace>"u"?!gn.wasm.trace:!gn.trace)||console.time(`ORT::${n}`)},Br=n=>{(typeof gn.trace>"u"?!gn.wasm.trace:!gn.trace)||console.timeEnd(`ORT::${n}`)}}),Jh,Yb=Ht(()=>{"use strict";Oh(),Kh(),Zh(),Jh=class Qh{constructor(e){this.handler=e}async run(e,t,i){Fr(),Or("InferenceSession.run");let r={},o={};if(typeof e!="object"||e===null||e instanceof pi||Array.isArray(e))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let l=!0;if(typeof t=="object"){if(t===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(t instanceof pi)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(t)){if(t.length===0)throw new TypeError("'fetches' cannot be an empty array.");l=!1;for(let h of t){if(typeof h!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(h)===-1)throw new RangeError(`'fetches' contains invalid output name: ${h}.`);r[h]=null}if(typeof i=="object"&&i!==null)o=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let h=!1,_=Object.getOwnPropertyNames(t);for(let g of this.outputNames)if(_.indexOf(g)!==-1){let p=t[g];(p===null||p instanceof pi)&&(h=!0,l=!1,r[g]=p)}if(h){if(typeof i=="object"&&i!==null)o=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else o=t}}else if(typeof t<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let h of this.inputNames)if(typeof e[h]>"u")throw new Error(`input '${h}' is missing in 'feeds'.`);if(l)for(let h of this.outputNames)r[h]=null;let u=await this.handler.run(e,r,o),f={};for(let h in u)if(Object.hasOwnProperty.call(u,h)){let _=u[h];_ instanceof pi?f[h]=_:f[h]=new pi(_.type,_.data,_.dims)}return Br("InferenceSession.run"),Nr(),f}async release(){return this.handler.dispose()}static async create(e,t,i,r){Fr(),Or("InferenceSession.create");let o,l={};if(typeof e=="string"){if(o=e,typeof t=="object"&&t!==null)l=t;else if(typeof t<"u")throw new TypeError("'options' must be an object.")}else if(e instanceof Uint8Array){if(o=e,typeof t=="object"&&t!==null)l=t;else if(typeof t<"u")throw new TypeError("'options' must be an object.")}else if(e instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer){let _=e,g=0,p=e.byteLength;if(typeof t=="object"&&t!==null)l=t;else if(typeof t=="number"){if(g=t,!Number.isSafeInteger(g))throw new RangeError("'byteOffset' must be an integer.");if(g<0||g>=_.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${_.byteLength}).`);if(p=e.byteLength-g,typeof i=="number"){if(p=i,!Number.isSafeInteger(p))throw new RangeError("'byteLength' must be an integer.");if(p<=0||g+p>_.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${_.byteLength-g}].`);if(typeof r=="object"&&r!==null)l=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof t<"u")throw new TypeError("'options' must be an object.");o=new Uint8Array(_,g,p)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[u,f]=await Nh(l),h=await u.createInferenceSessionHandler(o,f);return Br("InferenceSession.create"),Nr(),new Qh(h)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Au,jb=Ht(()=>{"use strict";Yb(),Au=Jh}),Kb=Ht(()=>{"use strict"}),Zb=Ht(()=>{"use strict"}),Jb=Ht(()=>{"use strict"}),Qb=Ht(()=>{"use strict"}),ep={};Bo(ep,{InferenceSession:()=>Au,TRACE:()=>Co,TRACE_EVENT_BEGIN:()=>Or,TRACE_EVENT_END:()=>Br,TRACE_FUNC_BEGIN:()=>Fr,TRACE_FUNC_END:()=>Nr,Tensor:()=>pi,env:()=>Qt,registerBackend:()=>cs});var kr=Ht(()=>{"use strict";Gb(),Vb(),jb(),Kh(),Kb(),Zb(),Zh(),Jb(),Qb()}),Ru=Ht(()=>{"use strict"}),tp={};Bo(tp,{default:()=>np});var Kl,Zl,np,ew=Ht(()=>{"use strict";mp(),Ra(),Cu(),Kl="ort-wasm-proxy-worker",Zl=globalThis.self?.name===Kl,Zl&&(self.onmessage=n=>{let{type:e,in:t}=n.data;try{switch(e){case"init-wasm":Pu(t.wasm).then(()=>{Fu(t).then(()=>{postMessage({type:e})},i=>{postMessage({type:e,err:i})})},i=>{postMessage({type:e,err:i})});break;case"init-ep":{let{epName:i,env:r}=t;Nu(r,i).then(()=>{postMessage({type:e})},o=>{postMessage({type:e,err:o})});break}case"copy-from":{let{buffer:i}=t,r=Do(i);postMessage({type:e,out:r});break}case"create":{let{model:i,options:r}=t;Ou(i,r).then(o=>{postMessage({type:e,out:o})},o=>{postMessage({type:e,err:o})});break}case"release":Bu(t),postMessage({type:e});break;case"run":{let{sessionId:i,inputIndices:r,inputs:o,outputIndices:l,options:u}=t;ku(i,r,o,l,new Array(l.length).fill(null),u).then(f=>{f.some(h=>h[3]!=="cpu")?postMessage({type:e,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:e,out:f},Gu([...o,...f]))},f=>{postMessage({type:e,err:f})});break}case"end-profiling":zu(t),postMessage({type:e});break;default:}}catch(i){postMessage({type:e,err:i})}}),np=Zl?null:n=>new Worker(n??Wn,{type:"module",name:Kl})}),ip={};Bo(ip,{default:()=>rp});async function Ad(n={}){var e=n,t=!!globalThis.window,i=!!globalThis.WorkerGlobalScope,r=i&&self.name?.startsWith("em-pthread");e.mountExternalData=(S,C)=>{S.startsWith("./")&&(S=S.substring(2)),(e.Tb||(e.Tb=new Map)).set(S,C)},e.unmountExternalData=()=>{delete e.Tb,delete e.mc,delete e.lc,delete e.nc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;var o,l,u=(S,C)=>{throw C},f=import.meta.url,h="";if(t||i){try{h=new URL(".",f).href}catch{}i&&(l=S=>{var C=new XMLHttpRequest;return C.open("GET",S,!1),C.responseType="arraybuffer",C.send(null),new Uint8Array(C.response)}),o=async S=>{if(N(S))return new Promise((H,G)=>{var J=new XMLHttpRequest;J.open("GET",S,!0),J.responseType="arraybuffer",J.onload=()=>{J.status==200||J.status==0&&J.response?H(J.response):G(J.status)},J.onerror=G,J.send(null)});var C=await fetch(S,{credentials:"same-origin"});if(C.ok)return C.arrayBuffer();throw Error(C.status+" : "+C.url)}}var _,g,p,y,T,I,E=console.log.bind(console),v=console.error.bind(console),U=E,O=v,L=!1,N=S=>S.startsWith("file://");function M(){Ut.buffer!=R.buffer&&Ee()}if(r){let S=function(C){try{var H=C.data,G=H.Rb;if(G==="load"){let J=[];self.onmessage=fe=>J.push(fe),I=()=>{postMessage({Rb:"loaded"});for(let fe of J)S(fe);self.onmessage=S};for(let fe of H.ac)e[fe]&&!e[fe].proxy||(e[fe]=(...Ie)=>{postMessage({Rb:"callHandler",$b:fe,args:Ie})},fe=="print"&&(U=e[fe]),fe=="printErr"&&(O=e[fe]));Ut=H.fc,Ee(),g=H.hc,je(),ea()}else if(G==="run"){(function(J){var fe=(M(),Y)[J+52>>>2>>>0];J=(M(),Y)[J+56>>>2>>>0],ys(fe,fe-J),dt(fe)})(H.Qb),pr(H.Qb,0,0,1,0,0),Xt(),Yi(H.Qb),V||=!0;try{lt(H.dc,H.Vb)}catch(J){if(J!="unwind")throw J}}else H.target!=="setimmediate"&&(G==="checkMailbox"?V&&si():G&&(O(`worker: received unknown command ${G}`),O(H)))}catch(J){throw Pa(),J}};var V=!1;self.onunhandledrejection=C=>{throw C.reason||C},self.onmessage=S}var R,B,F,W,Y,ae,X,q,de,_e=!1;function Ee(){var S=Ut.buffer;e.HEAP8=R=new Int8Array(S),F=new Int16Array(S),e.HEAPU8=B=new Uint8Array(S),new Uint16Array(S),e.HEAP32=W=new Int32Array(S),e.HEAPU32=Y=new Uint32Array(S),ae=new Float32Array(S),X=new Float64Array(S),q=new BigInt64Array(S),new BigUint64Array(S)}function pe(){_e=!0,r?I():Kn.Va()}function me(S){throw O(S="Aborted("+S+")"),L=!0,S=new WebAssembly.RuntimeError(S+". Build with -sASSERTIONS for more info."),T?.(S),S}function Se(){return{a:{T:zo,f:re,w:ve,e:Fe,k:Je,h:Be,L:Ne,b:Qe,G:it,ua:j,j:ie,M:Te,La:qe,qa:Ke,sa:Tt,Ma:Pt,Ja:Sn,Ca:An,Ia:Fn,Z:zr,ra:yi,oa:ai,Ka:cr,pa:ur,Ra:Gr,Fa:qn,ma:kt,va:fr,ja:oi,U:dr,Ea:Yi,Oa:Si,za:Vr,Aa:K,Ba:Q,xa:oe,ya:se,ka:ke,Ta:Ze,Qa:Et,W:w,V:ft,Pa:mt,F:qt,Na:Ot,na:en,u:$e,H:Xe,S:kn,la:Vt,ba:Yn,Ua:yt,Ga:Cn,Ha:Mt,ta:Ct,I:hs,wa:Pn,Y:Ca,Da:Ei,X:ms,$:As,N:tl,aa:ln,O:el,v:bs,d:Vo,m:Yr,n:Go,r:Xo,ca:Jo,E:Zo,o:$o,P:Qo,C:Ts,J:Fa,da:Qr,ea:Jr,z:Ms,fa:jo,Q:Ko,ga:Yo,y:qo,D:ws,c:Ho,q:jr,i:Wo,_:Rs,l:Ss,p:Es,s:Kr,t:Zr,x:Oi,R:Ua,A:Jn,K:zn,B:Na,ha:Zn,ia:Re,g:jn,a:Ut,Sa:Ae}}}async function je(){function S(G,J){return Kn=G.exports,Kn=(function(){var fe=Kn,Ie=St=>()=>St()>>>0,nt=St=>Lt=>St(Lt)>>>0;return(fe=Object.assign({},fe)).ub=Ie(fe.ub),fe.wb=nt(fe.wb),fe.Kb=nt(fe.Kb),fe.Lb=Ie(fe.Lb),fe.Pb=nt(fe.Pb),fe})(),Wt.push(Kn.xb),G=Kn,e._OrtInit=G.Wa,e._OrtGetLastError=G.Xa,e._OrtCreateSessionOptions=G.Ya,e._OrtAppendExecutionProvider=G.Za,e._OrtAddFreeDimensionOverride=G._a,e._OrtAddSessionConfigEntry=G.$a,e._OrtReleaseSessionOptions=G.ab,e._OrtCreateSession=G.bb,e._OrtReleaseSession=G.cb,e._OrtGetInputOutputCount=G.db,e._OrtGetInputOutputMetadata=G.eb,e._OrtFree=G.fb,e._OrtCreateTensor=G.gb,e._OrtGetTensorData=G.hb,e._OrtReleaseTensor=G.ib,e._OrtCreateRunOptions=G.jb,e._OrtAddRunConfigEntry=G.kb,e._OrtReleaseRunOptions=G.lb,e._OrtCreateBinding=G.mb,e._OrtBindInput=G.nb,e._OrtBindOutput=G.ob,e._OrtClearBoundOutputs=G.pb,e._OrtReleaseBinding=G.qb,e._OrtRunWithBinding=G.rb,e._OrtRun=G.sb,e._OrtEndProfiling=G.tb,Wr=G.ub,_s=e._free=G.vb,$r=e._malloc=G.wb,pr=G.zb,Pa=G.Ab,gs=G.Bb,Da=G.Cb,Xr=G.Db,La=G.Eb,vs=G.Fb,xt=G.Gb,mr=G.Hb,ys=G.Ib,dt=G.Jb,Ki=G.Kb,_t=G.Lb,Zi=G.Mb,Ia=G.Nb,_r=G.Ob,gr=G.Pb,qr=G.yb,g=J,Kn}var C,H=Se();return e.instantiateWasm?new Promise(G=>{e.instantiateWasm(H,(J,fe)=>{G(S(J,fe))})}):r?S(new WebAssembly.Instance(g,Se()),g):(de??=e.locateFile?e.locateFile?e.locateFile("ort-wasm-simd-threaded.wasm",h):h+"ort-wasm-simd-threaded.wasm":new URL(""+new URL("ort-wasm-simd-threaded-DcHrbrbl.wasm",import.meta.url).href,import.meta.url).href,C=await(async function(G){var J=de;if(!_&&!N(J))try{var fe=fetch(J,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(fe,G)}catch(Ie){O(`wasm streaming compile failed: ${Ie}`),O("falling back to ArrayBuffer instantiation")}return(async function(Ie,nt){try{var St=await(async function(Lt){if(!_)try{var nn=await o(Lt);return new Uint8Array(nn)}catch{}if(Lt==de&&_)Lt=new Uint8Array(_);else{if(!l)throw"both async and sync fetching of the wasm failed";Lt=l(Lt)}return Lt})(Ie);return await WebAssembly.instantiate(St,nt)}catch(Lt){O(`failed to asynchronously prepare wasm: ${Lt}`),me(Lt)}})(J,G)})(H),S(C.instance,C.module))}class He{name="ExitStatus";constructor(C){this.message=`Program terminated with exit(${C})`,this.status=C}}var ot=S=>{S.terminate(),S.onmessage=()=>{}},rt=[],tt=0,ue=null,te=S=>{at.length==0&&(Bt(),sn(at[0]));var C=at.pop();if(!C)return 6;vt.push(C),pt[S.Qb]=C,C.Qb=S.Qb;var H={Rb:"run",dc:S.cc,Vb:S.Vb,Qb:S.Qb};return C.postMessage(H,S.Zb),0},ge=0,he=(S,C,...H)=>{var G,J=16*H.length,fe=_t(),Ie=Ki(J),nt=Ie>>>3;for(G of H)typeof G=="bigint"?((M(),q)[nt++>>>0]=1n,(M(),q)[nt++>>>0]=G):((M(),q)[nt++>>>0]=0n,(M(),X)[nt++>>>0]=G);return S=gs(S,0,J,Ie,C),dt(fe),S};function Ae(S){if(r)return he(0,1,S);if(p=S,!(0<ge)){for(var C of vt)ot(C);for(C of at)ot(C);at=[],vt=[],pt={},L=!0}u(0,new He(S))}function Ge(S){if(r)return he(1,0,S);Ct(S)}var Ct=S=>{if(p=S,r)throw Ge(S),"unwind";Ae(S)},at=[],vt=[],Wt=[],pt={},$t=S=>{var C=S.Qb;delete pt[C],at.push(S),vt.splice(vt.indexOf(S),1),S.Qb=0,Da(C)};function Xt(){Wt.forEach(S=>S())}var sn=S=>new Promise(C=>{S.onmessage=J=>{var fe=J.data;if(J=fe.Rb,fe.Ub&&fe.Ub!=Wr()){var Ie=pt[fe.Ub];Ie?Ie.postMessage(fe,fe.Zb):O(`Internal error! Worker sent a message "${J}" to target pthread ${fe.Ub}, but that thread no longer exists!`)}else J==="checkMailbox"?si():J==="spawnThread"?te(fe):J==="cleanupThread"?Ni(()=>{$t(pt[fe.ec])}):J==="loaded"?(S.loaded=!0,C(S)):fe.target==="setimmediate"?S.postMessage(fe):J==="uncaughtException"?S.onerror(fe.error):J==="callHandler"?e[fe.$b](...fe.args):J&&O(`worker sent an unknown command ${J}`)},S.onerror=J=>{throw O(`worker sent an error! ${J.filename}:${J.lineno}: ${J.message}`),J};var H,G=[];for(H of[])e.propertyIsEnumerable(H)&&G.push(H);S.postMessage({Rb:"load",ac:G,fc:Ut,hc:g})});function Bt(){var S=new Worker((()=>{let C=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new C("ort.wasm.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});at.push(S)}var Ut,Z=[],et=S=>{var C=Z[S];return C||(Z[S]=C=qr.get(S)),C},lt=(S,C)=>{ge=0,S=et(S)(C),0<ge?p=S:Xr(S)},k=[],b=0;function re(S){var C=new ye(S>>>=0);return(M(),R)[C.Sb+12>>>0]==0&&(De(C,!0),b--),Ue(C,!1),k.push(C),gr(S)}var ce=0,ve=()=>{xt(0,0);var S=k.pop();Zi(S.Wb),ce=0};function De(S,C){C=C?1:0,(M(),R)[S.Sb+12>>>0]=C}function Ue(S,C){C=C?1:0,(M(),R)[S.Sb+13>>>0]=C}class ye{constructor(C){this.Wb=C,this.Sb=C-24}}var be=S=>{var C=ce;if(!C)return mr(0),0;var H=new ye(C);(M(),Y)[H.Sb+16>>>2>>>0]=C;var G=(M(),Y)[H.Sb+4>>>2>>>0];if(!G)return mr(0),C;for(var J of S){if(J===0||J===G)break;if(_r(J,G,H.Sb+16))return mr(J),C}return mr(G),C};function Fe(){return be([])}function Je(S){return be([S>>>0])}function Be(S,C,H,G){return be([S>>>0,C>>>0,H>>>0,G>>>0])}var Ne=()=>{var S=k.pop();S||me("no exception to throw");var C=S.Wb;throw(M(),R)[S.Sb+13>>>0]==0&&(k.push(S),Ue(S,!0),De(S,!1),b++),Ia(C),ce=C};function Qe(S,C,H){var G=new ye(S>>>=0);throw C>>>=0,H>>>=0,(M(),Y)[G.Sb+16>>>2>>>0]=0,(M(),Y)[G.Sb+4>>>2>>>0]=C,(M(),Y)[G.Sb+8>>>2>>>0]=H,Ia(S),b++,ce=S}var it=()=>b;function ct(S,C,H,G){return r?he(2,1,S,C,H,G):j(S,C,H,G)}function j(S,C,H,G){if(S>>>=0,C>>>=0,H>>>=0,G>>>=0,!globalThis.SharedArrayBuffer)return 6;var J=[];return r&&J.length===0?ct(S,C,H,G):(S={cc:H,Qb:S,Vb:G,Zb:J},r?(S.Rb="spawnThread",postMessage(S,J),0):te(S))}function ie(S){throw ce||=S>>>0,ce}var $=globalThis.TextDecoder&&new TextDecoder,Le=(S,C=0,H,G)=>{var J=C>>>=0;if(H=J+H,G)G=H;else{for(;S[J]&&!(J>=H);)++J;G=J}if(16<G-C&&S.buffer&&$)return $.decode(S.buffer instanceof ArrayBuffer?S.subarray(C,G):S.slice(C,G));for(J="";C<G;)if(128&(H=S[C++])){var fe=63&S[C++];if((224&H)==192)J+=String.fromCharCode((31&H)<<6|fe);else{var Ie=63&S[C++];65536>(H=(240&H)==224?(15&H)<<12|fe<<6|Ie:(7&H)<<18|fe<<12|Ie<<6|63&S[C++])?J+=String.fromCharCode(H):(H-=65536,J+=String.fromCharCode(55296|H>>10,56320|1023&H))}}else J+=String.fromCharCode(H);return J},ze=(S,C,H)=>(S>>>=0)?Le((M(),B),S,C,H):"";function Te(S,C,H){return r?he(3,1,S,C,H):0}function qe(S,C){if(r)return he(4,1,S,C)}function Ke(S,C){if(r)return he(5,1,S,C)}function Tt(S,C,H){if(r)return he(6,1,S,C,H)}function Pt(S,C,H){return r?he(7,1,S,C,H):0}function Sn(S,C){if(r)return he(8,1,S,C)}function An(S,C,H){if(r)return he(9,1,S,C,H)}function Fn(S,C,H,G){if(r)return he(10,1,S,C,H,G)}function zr(S,C,H,G){if(r)return he(11,1,S,C,H,G)}function yi(S,C,H,G){if(r)return he(12,1,S,C,H,G)}function ai(S){if(r)return he(13,1,S)}function cr(S,C){if(r)return he(14,1,S,C)}function ur(S,C,H){if(r)return he(15,1,S,C,H)}var Gr=()=>me("");function qn(S){pr(S>>>0,!i,1,!t,131072,!1),Xt()}var Ni=S=>{if(!L)try{if(S(),!(0<ge))try{r?Wr()&&Xr(p):Ct(p)}catch(C){C instanceof He||C=="unwind"||u(0,C)}}catch(C){C instanceof He||C=="unwind"||u(0,C)}},Hr=!Atomics.waitAsync||globalThis.navigator?.userAgent&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function Yi(S){S>>>=0,Hr||(Atomics.waitAsync((M(),W),S>>>2,S).value.then(si),S+=128,Atomics.store((M(),W),S>>>2,1))}var si=()=>Ni(()=>{var S=Wr();S&&(Yi(S),vs())});function kt(S,C){(S>>>=0)==C>>>0?setTimeout(si):r?postMessage({Ub:S,Rb:"checkMailbox"}):(S=pt[S])&&S.postMessage({Rb:"checkMailbox"})}var xi=[];function fr(S,C,H,G,J){for(C>>>=0,J>>>=0,xi.length=0,H=J>>>3,G=J+G>>>3;H<G;){var fe;fe=(M(),q)[H++>>>0]?(M(),q)[H++>>>0]:(M(),X)[H++>>>0],xi.push(fe)}return(C?xs[C]:ko[S])(...xi)}var oi=()=>{ge=0};function dr(S){S>>>=0,r?postMessage({Rb:"cleanupThread",ec:S}):$t(pt[S])}function Si(S){}function Vr(S,C){S=-9007199254740992>S||9007199254740992<S?NaN:Number(S),C>>>=0,S=new Date(1e3*S),(M(),W)[C>>>2>>>0]=S.getUTCSeconds(),(M(),W)[C+4>>>2>>>0]=S.getUTCMinutes(),(M(),W)[C+8>>>2>>>0]=S.getUTCHours(),(M(),W)[C+12>>>2>>>0]=S.getUTCDate(),(M(),W)[C+16>>>2>>>0]=S.getUTCMonth(),(M(),W)[C+20>>>2>>>0]=S.getUTCFullYear()-1900,(M(),W)[C+24>>>2>>>0]=S.getUTCDay(),S=(S.getTime()-Date.UTC(S.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(M(),W)[C+28>>>2>>>0]=S}var ji=S=>S%4==0&&(S%100!=0||S%400==0),hr=[0,31,60,91,121,152,182,213,244,274,305,335],D=[0,31,59,90,120,151,181,212,243,273,304,334];function K(S,C){S=-9007199254740992>S||9007199254740992<S?NaN:Number(S),C>>>=0,S=new Date(1e3*S),(M(),W)[C>>>2>>>0]=S.getSeconds(),(M(),W)[C+4>>>2>>>0]=S.getMinutes(),(M(),W)[C+8>>>2>>>0]=S.getHours(),(M(),W)[C+12>>>2>>>0]=S.getDate(),(M(),W)[C+16>>>2>>>0]=S.getMonth(),(M(),W)[C+20>>>2>>>0]=S.getFullYear()-1900,(M(),W)[C+24>>>2>>>0]=S.getDay();var H=(ji(S.getFullYear())?hr:D)[S.getMonth()]+S.getDate()-1|0;(M(),W)[C+28>>>2>>>0]=H,(M(),W)[C+36>>>2>>>0]=-60*S.getTimezoneOffset(),H=new Date(S.getFullYear(),6,1).getTimezoneOffset();var G=new Date(S.getFullYear(),0,1).getTimezoneOffset();S=0|(H!=G&&S.getTimezoneOffset()==Math.min(G,H)),(M(),W)[C+32>>>2>>>0]=S}function Q(S){S>>>=0;var C=new Date((M(),W)[S+20>>>2>>>0]+1900,(M(),W)[S+16>>>2>>>0],(M(),W)[S+12>>>2>>>0],(M(),W)[S+8>>>2>>>0],(M(),W)[S+4>>>2>>>0],(M(),W)[S>>>2>>>0],0),H=(M(),W)[S+32>>>2>>>0],G=C.getTimezoneOffset(),J=new Date(C.getFullYear(),6,1).getTimezoneOffset(),fe=new Date(C.getFullYear(),0,1).getTimezoneOffset(),Ie=Math.min(fe,J);return 0>H?(M(),W)[S+32>>>2>>>0]=+(J!=fe&&Ie==G):0<H!=(Ie==G)&&(J=Math.max(fe,J),C.setTime(C.getTime()+6e4*((0<H?Ie:J)-G))),(M(),W)[S+24>>>2>>>0]=C.getDay(),H=(ji(C.getFullYear())?hr:D)[C.getMonth()]+C.getDate()-1|0,(M(),W)[S+28>>>2>>>0]=H,(M(),W)[S>>>2>>>0]=C.getSeconds(),(M(),W)[S+4>>>2>>>0]=C.getMinutes(),(M(),W)[S+8>>>2>>>0]=C.getHours(),(M(),W)[S+12>>>2>>>0]=C.getDate(),(M(),W)[S+16>>>2>>>0]=C.getMonth(),(M(),W)[S+20>>>2>>>0]=C.getYear(),S=C.getTime(),BigInt(isNaN(S)?-1:S/1e3)}function oe(S,C,H,G,J,fe,Ie){return r?he(16,1,S,C,H,G,J,fe,Ie):-52}function se(S,C,H,G,J,fe){if(r)return he(17,1,S,C,H,G,J,fe)}var Oe={},$e=()=>performance.timeOrigin+performance.now();function ke(S,C){if(r)return he(18,1,S,C);if(Oe[S]&&(clearTimeout(Oe[S].id),delete Oe[S]),!C)return 0;var H=setTimeout(()=>{delete Oe[S],Ni(()=>La(S,performance.timeOrigin+performance.now()))},C);return Oe[S]={id:H,oc:C},0}var We=(S,C,H)=>{var G=(M(),B);if(C>>>=0,0<H){var J=C;H=C+H-1;for(var fe=0;fe<S.length;++fe){var Ie=S.codePointAt(fe);if(127>=Ie){if(C>=H)break;G[C++>>>0]=Ie}else if(2047>=Ie){if(C+1>=H)break;G[C++>>>0]=192|Ie>>6,G[C++>>>0]=128|63&Ie}else if(65535>=Ie){if(C+2>=H)break;G[C++>>>0]=224|Ie>>12,G[C++>>>0]=128|Ie>>6&63,G[C++>>>0]=128|63&Ie}else{if(C+3>=H)break;G[C++>>>0]=240|Ie>>18,G[C++>>>0]=128|Ie>>12&63,G[C++>>>0]=128|Ie>>6&63,G[C++>>>0]=128|63&Ie,fe++}}G[C>>>0]=0,S=C-J}else S=0;return S};function Ze(S,C,H,G){S>>>=0,C>>>=0,H>>>=0,G>>>=0;var J=new Date().getFullYear(),fe=new Date(J,0,1).getTimezoneOffset();J=new Date(J,6,1).getTimezoneOffset();var Ie=Math.max(fe,J);(M(),Y)[S>>>2>>>0]=60*Ie,(M(),W)[C>>>2>>>0]=+(fe!=J),S=(C=nt=>{var St=Math.abs(nt);return`UTC${0<=nt?"-":"+"}${String(Math.floor(St/60)).padStart(2,"0")}${String(St%60).padStart(2,"0")}`})(fe),C=C(J),J<fe?(We(S,H,17),We(C,G,17)):(We(S,G,17),We(C,H,17))}var mt=()=>Date.now();function Et(S,C,H){return H>>>=0,0<=S&&3>=S?(S===0?S=Date.now():S=performance.timeOrigin+performance.now(),S=Math.round(1e6*S),(M(),q)[H>>>3>>>0]=BigInt(S),0):28}var Ye=[];function w(S,C,H){S>>>=0,C>>>=0,H>>>=0,Ye.length=0;for(var G;G=(M(),B)[C++>>>0];){var J=G!=105;H+=(J&=G!=112)&&H%8?4:0,Ye.push(G==112?(M(),Y)[H>>>2>>>0]:G==106?(M(),q)[H>>>3>>>0]:G==105?(M(),W)[H>>>2>>>0]:(M(),X)[H>>>3>>>0]),H+=J?8:4}return xs[S](...Ye)}var ft=()=>{};function qt(S,C){return O(ze(S>>>0,C>>>0))}var Ot=()=>{throw ge+=1,"unwind"};function en(){return 4294901760}var Xe=()=>navigator.hardwareConcurrency,tn={},At=S=>{for(var C=0,H=0;H<S.length;++H){var G=S.charCodeAt(H);127>=G?C++:2047>=G?C+=2:55296<=G&&57343>=G?(C+=4,++H):C+=3}return C},un=S=>{var C;return(C=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(S))?+C[1]:(C=/:(\d+):\d+(?:\)|$)/.exec(S))?2147483648|+C[1]:0},Rn=S=>{for(var C of S)(S=un(C))&&(tn[S]=C)};function Yn(){var S=Error().stack.toString().split(`
`);return S[0]=="Error"&&S.shift(),Rn(S),tn.Xb=un(S[3]),tn.bc=S,tn.Xb}function kn(S){if(!(S=tn[S>>>0]))return 0;var C;if(C=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(S))S=C[1];else if(C=/^\s+at (.*) \(.*\)$/.exec(S))S=C[1];else{if(!(C=/^(.+?)@/.exec(S)))return 0;S=C[1]}_s(kn.Yb??0),C=At(S)+1;var H=$r(C);return H&&We(S,H,C),kn.Yb=H,kn.Yb}function Vt(S){S>>>=0;var C=(M(),B).length;if(S<=C||4294901760<S)return!1;for(var H=1;4>=H;H*=2){var G=C*(1+.2/H);G=Math.min(G,S+100663296);e:{G=(Math.min(4294901760,65536*Math.ceil(Math.max(S,G)/65536))-Ut.buffer.byteLength+65535)/65536|0;try{Ut.grow(G),Ee();var J=1;break e}catch{}J=void 0}if(J)return!0}return!1}function yt(S,C,H){if(S>>>=0,C>>>=0,tn.Xb==S)var G=tn.bc;else(G=Error().stack.toString().split(`
`))[0]=="Error"&&G.shift(),Rn(G);for(var J=3;G[J]&&un(G[J])!=S;)++J;for(S=0;S<H&&G[S+J];++S)(M(),W)[C+4*S>>>2>>>0]=un(G[S+J]);return S}var fn,Dt={},En=()=>{if(!fn){var S,C={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(S in Dt)Dt[S]===void 0?delete C[S]:C[S]=Dt[S];var H=[];for(S in C)H.push(`${S}=${C[S]}`);fn=H}return fn};function Cn(S,C){if(r)return he(19,1,S,C);S>>>=0,C>>>=0;var H,G=0,J=0;for(H of En()){var fe=C+G;(M(),Y)[S+J>>>2>>>0]=fe,G+=We(H,fe,1/0)+1,J+=4}return 0}function Mt(S,C){if(r)return he(20,1,S,C);S>>>=0,C>>>=0;var H=En();for(var G of((M(),Y)[S>>>2>>>0]=H.length,S=0,H))S+=At(G)+1;return(M(),Y)[C>>>2>>>0]=S,0}function hs(S){return r?he(21,1,S):52}function Pn(S,C,H,G,J){return r?he(22,1,S,C,H,G,J):52}function Ca(S,C,H,G){return r?he(23,1,S,C,H,G):52}function Ei(S,C,H,G){return r?he(24,1,S,C,H,G):70}var ps=[null,[],[]];function ms(S,C,H,G){if(r)return he(25,1,S,C,H,G);C>>>=0,H>>>=0,G>>>=0;for(var J=0,fe=0;fe<H;fe++){var Ie=(M(),Y)[C>>>2>>>0],nt=(M(),Y)[C+4>>>2>>>0];C+=8;for(var St=0;St<nt;St++){var Lt=S,nn=(M(),B)[Ie+St>>>0],Gn=ps[Lt];nn===0||nn===10?((Lt===1?U:O)(Le(Gn)),Gn.length=0):Gn.push(nn)}J+=nt}return(M(),Y)[G>>>2>>>0]=J,0}function jn(S){return S>>>0}r||(function(){for(var S=e.numThreads-1;S--;)Bt();rt.push(async()=>{var C=(async function(){if(!r)return Promise.all(at.map(sn))})();tt++,await C,--tt==0&&ue&&(C=ue,ue=null,C())})})(),r||(Ut=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),Ee()),e.wasmBinary&&(_=e.wasmBinary),e.stackSave=()=>_t(),e.stackRestore=S=>dt(S),e.stackAlloc=S=>Ki(S),e.setValue=function(S,C,H="i8"){switch(H.endsWith("*")&&(H="*"),H){case"i1":case"i8":(M(),R)[S>>>0]=C;break;case"i16":(M(),F)[S>>>1>>>0]=C;break;case"i32":(M(),W)[S>>>2>>>0]=C;break;case"i64":(M(),q)[S>>>3>>>0]=BigInt(C);break;case"float":(M(),ae)[S>>>2>>>0]=C;break;case"double":(M(),X)[S>>>3>>>0]=C;break;case"*":(M(),Y)[S>>>2>>>0]=C;break;default:me(`invalid type for setValue: ${H}`)}},e.getValue=function(S,C="i8"){switch(C.endsWith("*")&&(C="*"),C){case"i1":case"i8":return(M(),R)[S>>>0];case"i16":return(M(),F)[S>>>1>>>0];case"i32":return(M(),W)[S>>>2>>>0];case"i64":return(M(),q)[S>>>3>>>0];case"float":return(M(),ae)[S>>>2>>>0];case"double":return(M(),X)[S>>>3>>>0];case"*":return(M(),Y)[S>>>2>>>0];default:me(`invalid type for getValue: ${C}`)}},e.UTF8ToString=ze,e.stringToUTF8=We,e.lengthBytesUTF8=At;var Wr,_s,$r,pr,Pa,gs,Da,Xr,La,vs,xt,mr,ys,dt,Ki,_t,Zi,Ia,_r,gr,qr,Kn,ko=[Ae,Ge,ct,Te,qe,Ke,Tt,Pt,Sn,An,Fn,zr,yi,ai,cr,ur,oe,se,ke,Cn,Mt,hs,Pn,Ca,Ei,ms],xs={1042604:(S,C,H,G,J)=>{if(e===void 0||!e.Tb)return 1;if((S=ze(Number(S>>>0))).startsWith("./")&&(S=S.substring(2)),!(S=e.Tb.get(S)))return 2;if(C=Number(C>>>0),H=Number(H>>>0),G=Number(G>>>0),C+H>S.byteLength)return 3;try{let fe=S.subarray(C,C+H);switch(J){case 0:(M(),B).set(fe,G>>>0);break;case 1:e.ic?e.ic(G,fe):e.kc(G,fe);break;default:return 4}return 0}catch{return 4}},1043428:()=>typeof wasmOffsetConverter<"u"};function zo(){return typeof wasmOffsetConverter<"u"}function Go(S,C,H,G){var J=_t();try{return et(S)(C,H,G)}catch(fe){if(dt(J),fe!==fe+0)throw fe;xt(1,0)}}function Yr(S,C,H){var G=_t();try{return et(S)(C,H)}catch(J){if(dt(G),J!==J+0)throw J;xt(1,0)}}function Ho(S){var C=_t();try{et(S)()}catch(H){if(dt(C),H!==H+0)throw H;xt(1,0)}}function Vo(S,C){var H=_t();try{return et(S)(C)}catch(G){if(dt(H),G!==G+0)throw G;xt(1,0)}}function Wo(S,C,H){var G=_t();try{et(S)(C,H)}catch(J){if(dt(G),J!==J+0)throw J;xt(1,0)}}function jr(S,C){var H=_t();try{et(S)(C)}catch(G){if(dt(H),G!==G+0)throw G;xt(1,0)}}function $o(S,C,H,G,J,fe,Ie){var nt=_t();try{return et(S)(C,H,G,J,fe,Ie)}catch(St){if(dt(nt),St!==St+0)throw St;xt(1,0)}}function Kr(S,C,H,G,J,fe){var Ie=_t();try{et(S)(C,H,G,J,fe)}catch(nt){if(dt(Ie),nt!==nt+0)throw nt;xt(1,0)}}function Ss(S,C,H,G){var J=_t();try{et(S)(C,H,G)}catch(fe){if(dt(J),fe!==fe+0)throw fe;xt(1,0)}}function Es(S,C,H,G,J){var fe=_t();try{et(S)(C,H,G,J)}catch(Ie){if(dt(fe),Ie!==Ie+0)throw Ie;xt(1,0)}}function Zr(S,C,H,G,J,fe,Ie){var nt=_t();try{et(S)(C,H,G,J,fe,Ie)}catch(St){if(dt(nt),St!==St+0)throw St;xt(1,0)}}function Re(S,C,H,G,J,fe,Ie){var nt=_t();try{et(S)(C,H,G,J,fe,Ie)}catch(St){if(dt(nt),St!==St+0)throw St;xt(1,0)}}function Zn(S,C,H,G,J,fe,Ie,nt){var St=_t();try{et(S)(C,H,G,J,fe,Ie,nt)}catch(Lt){if(dt(St),Lt!==Lt+0)throw Lt;xt(1,0)}}function Xo(S,C,H,G,J){var fe=_t();try{return et(S)(C,H,G,J)}catch(Ie){if(dt(fe),Ie!==Ie+0)throw Ie;xt(1,0)}}function Ms(S,C,H){var G=_t();try{return et(S)(C,H)}catch(J){if(dt(G),J!==J+0)throw J;xt(1,0)}}function Oi(S,C,H,G,J,fe,Ie,nt){var St=_t();try{et(S)(C,H,G,J,fe,Ie,nt)}catch(Lt){if(dt(St),Lt!==Lt+0)throw Lt;xt(1,0)}}function zn(S,C,H,G,J,fe,Ie,nt,St,Lt,nn,Gn){var Qn=_t();try{et(S)(C,H,G,J,fe,Ie,nt,St,Lt,nn,Gn)}catch(li){if(dt(Qn),li!==li+0)throw li;xt(1,0)}}function qo(S,C,H){var G=_t();try{return et(S)(C,H)}catch(J){if(dt(G),J!==J+0)throw J;return xt(1,0),0n}}function Ua(S,C,H,G,J,fe,Ie,nt,St){var Lt=_t();try{et(S)(C,H,G,J,fe,Ie,nt,St)}catch(nn){if(dt(Lt),nn!==nn+0)throw nn;xt(1,0)}}function bs(S){var C=_t();try{return et(S)()}catch(H){if(dt(C),H!==H+0)throw H;xt(1,0)}}function Yo(S,C){var H=_t();try{return et(S)(C)}catch(G){if(dt(H),G!==G+0)throw G;return xt(1,0),0n}}function jo(S,C,H,G){var J=_t();try{return et(S)(C,H,G)}catch(fe){if(dt(J),fe!==fe+0)throw fe;xt(1,0)}}function Ko(S){var C=_t();try{return et(S)()}catch(H){if(dt(C),H!==H+0)throw H;return xt(1,0),0n}}function Jr(S,C,H,G){var J=_t();try{return et(S)(C,H,G)}catch(fe){if(dt(J),fe!==fe+0)throw fe;xt(1,0)}}function Qr(S,C,H,G,J){var fe=_t();try{return et(S)(C,H,G,J)}catch(Ie){if(dt(fe),Ie!==Ie+0)throw Ie;xt(1,0)}}function Fa(S,C,H,G,J,fe){var Ie=_t();try{return et(S)(C,H,G,J,fe)}catch(nt){if(dt(Ie),nt!==nt+0)throw nt;xt(1,0)}}function Zo(S,C,H,G,J,fe){var Ie=_t();try{return et(S)(C,H,G,J,fe)}catch(nt){if(dt(Ie),nt!==nt+0)throw nt;xt(1,0)}}function Jo(S,C,H,G,J,fe){var Ie=_t();try{return et(S)(C,H,G,J,fe)}catch(nt){if(dt(Ie),nt!==nt+0)throw nt;xt(1,0)}}function Qo(S,C,H,G,J,fe,Ie,nt){var St=_t();try{return et(S)(C,H,G,J,fe,Ie,nt)}catch(Lt){if(dt(St),Lt!==Lt+0)throw Lt;xt(1,0)}}function ws(S,C,H,G,J){var fe=_t();try{return et(S)(C,H,G,J)}catch(Ie){if(dt(fe),Ie!==Ie+0)throw Ie;return xt(1,0),0n}}function el(S,C,H,G){var J=_t();try{return et(S)(C,H,G)}catch(fe){if(dt(J),fe!==fe+0)throw fe;xt(1,0)}}function tl(S,C,H,G){var J=_t();try{return et(S)(C,H,G)}catch(fe){if(dt(J),fe!==fe+0)throw fe;xt(1,0)}}function Ts(S,C,H,G,J,fe,Ie,nt,St,Lt,nn,Gn){var Qn=_t();try{return et(S)(C,H,G,J,fe,Ie,nt,St,Lt,nn,Gn)}catch(li){if(dt(Qn),li!==li+0)throw li;xt(1,0)}}function Jn(S,C,H,G,J,fe,Ie,nt,St,Lt,nn){var Gn=_t();try{et(S)(C,H,G,J,fe,Ie,nt,St,Lt,nn)}catch(Qn){if(dt(Gn),Qn!==Qn+0)throw Qn;xt(1,0)}}function Na(S,C,H,G,J,fe,Ie,nt,St,Lt,nn,Gn,Qn,li,nl,il){var rl=_t();try{et(S)(C,H,G,J,fe,Ie,nt,St,Lt,nn,Gn,Qn,li,nl,il)}catch(Oa){if(dt(rl),Oa!==Oa+0)throw Oa;xt(1,0)}}function ln(S,C,H){var G=_t();try{return et(S)(C,H)}catch(J){if(dt(G),J!==J+0)throw J;xt(1,0)}}function As(S,C,H){var G=_t();try{return et(S)(C,H)}catch(J){if(dt(G),J!==J+0)throw J;xt(1,0)}}function Rs(S,C,H,G){var J=_t();try{et(S)(C,H,G)}catch(fe){if(dt(J),fe!==fe+0)throw fe;xt(1,0)}}function ea(){if(0<tt)ue=ea;else if(r)y?.(e),pe();else{for(var S=rt;0<S.length;)S.shift()(e);0<tt?ue=ea:(e.calledRun=!0,L||(pe(),y?.(e)))}}return r||(Kn=await je(),ea()),e.PTR_SIZE=4,_e?e:new Promise((S,C)=>{y=S,T=C})}var rp,Rd,tw=Ht(()=>{"use strict";rp=Ad,Rd=globalThis.self?.name?.startsWith("em-pthread"),Rd&&Ad()}),Jl,nu,Cd,Wn,ap,co,Pd,Dd,Ql,Ld,ec,sp,tc,op,Cu=Ht(()=>{"use strict";Ru(),Jl=typeof location>"u"?void 0:location.origin,nu=import.meta.url>"file:"&&import.meta.url<"file;",Cd=()=>{if(nu){let n=URL;return new URL(new n("ort.wasm.bundle.min.mjs",import.meta.url).href,Jl).href}return import.meta.url},Wn=Cd(),ap=()=>{if(Wn&&!Wn.startsWith("blob:"))return Wn.substring(0,Wn.lastIndexOf("/")+1)},co=(n,e)=>{try{let t=e??Wn;return(t?new URL(n,t):new URL(n)).origin===Jl}catch{return!1}},Pd=(n,e)=>{let t=e??Wn;try{return(t?new URL(n,t):new URL(n)).href}catch{return}},Dd=(n,e)=>`${e??"./"}${n}`,Ql=async n=>{let e=await(await fetch(n,{credentials:"same-origin"})).blob();return URL.createObjectURL(e)},Ld=async n=>(await import(n)).default,ec=(ew(),tu(tp)).default,sp=async()=>{if(!Wn)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(co(Wn))return[void 0,ec()];let n=await Ql(Wn);return[n,ec(n)]},tc=(tw(),tu(ip)).default,op=async(n,e,t,i)=>{let r=tc&&!(n||e);if(r)if(Wn)r=co(Wn)||i&&!t;else if(i&&!t)r=!0;else throw new Error("cannot determine the script source URL.");if(r)return[void 0,tc];{let o="ort-wasm-simd-threaded.mjs",l=n??Pd(o,e),u=t&&l&&!co(l,e),f=u?await Ql(l):l??Dd(o,e);return[u?f:void 0,await Ld(f)]}}}),nc,uo,Ya,ic,Id,Ud,Fd,Pu,rn,Ra=Ht(()=>{"use strict";Cu(),uo=!1,Ya=!1,ic=!1,Id=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Ud=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Fd=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Pu=async n=>{if(uo)return Promise.resolve();if(Ya)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(ic)throw new Error("previous call to 'initializeWebAssembly()' failed.");Ya=!0;let e=n.initTimeout,t=n.numThreads;if(n.simd!==!1){if(n.simd==="relaxed"){if(!Fd())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Ud())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=Id();t>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+t+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),n.numThreads=t=1);let r=n.wasmPaths,o=typeof r=="string"?r:void 0,l=r?.mjs,u=l?.href??l,f=r?.wasm,h=f?.href??f,_=n.wasmBinary,[g,p]=await op(u,o,t>1,!!_||!!h),y=!1,T=[];if(e>0&&T.push(new Promise(I=>{setTimeout(()=>{y=!0,I()},e)})),T.push(new Promise((I,E)=>{let v={numThreads:t};if(_)v.wasmBinary=_,v.locateFile=U=>U;else if(h||o)v.locateFile=U=>h??o+U;else if(u&&u.indexOf("blob:")!==0)v.locateFile=U=>new URL(U,u).href;else if(g){let U=ap();U&&(v.locateFile=O=>U+O)}p(v).then(U=>{Ya=!1,uo=!0,nc=U,I(),g&&URL.revokeObjectURL(g)},U=>{Ya=!1,ic=!0,E(U)})})),await Promise.race(T),y)throw new Error(`WebAssembly backend initializing failed due to timeout: ${e}ms`)},rn=()=>{if(uo&&nc)return nc;throw new Error("WebAssembly is not initialized yet.")}}),hi,Po,Zt,Du=Ht(()=>{"use strict";Ra(),hi=(n,e)=>{let t=rn(),i=t.lengthBytesUTF8(n)+1,r=t._malloc(i);return t.stringToUTF8(n,r,i),e.push(r),r},Po=(n,e,t,i)=>{if(typeof n=="object"&&n!==null){if(t.has(n))throw new Error("Circular reference in options");t.add(n)}Object.entries(n).forEach(([r,o])=>{let l=e?e+r:r;if(typeof o=="object")Po(o,l+".",t,i);else if(typeof o=="string"||typeof o=="number")i(l,o.toString());else if(typeof o=="boolean")i(l,o?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof o}`)})},Zt=n=>{let e=rn(),t=e.stackSave();try{let i=e.PTR_SIZE,r=e.stackAlloc(2*i);e._OrtGetLastError(r,r+i);let o=Number(e.getValue(r,i===4?"i32":"i64")),l=e.getValue(r+i,"*"),u=l?e.UTF8ToString(l):"";throw new Error(`${n} ERROR_CODE: ${o}, ERROR_MESSAGE: ${u}`)}finally{e.stackRestore(t)}}}),lp,nw=Ht(()=>{"use strict";Ra(),Du(),lp=n=>{let e=rn(),t=0,i=[],r=n||{};try{if(n?.logSeverityLevel===void 0)r.logSeverityLevel=2;else if(typeof n.logSeverityLevel!="number"||!Number.isInteger(n.logSeverityLevel)||n.logSeverityLevel<0||n.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${n.logSeverityLevel}`);if(n?.logVerbosityLevel===void 0)r.logVerbosityLevel=0;else if(typeof n.logVerbosityLevel!="number"||!Number.isInteger(n.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${n.logVerbosityLevel}`);n?.terminate===void 0&&(r.terminate=!1);let o=0;return n?.tag!==void 0&&(o=hi(n.tag,i)),t=e._OrtCreateRunOptions(r.logSeverityLevel,r.logVerbosityLevel,!!r.terminate,o),t===0&&Zt("Can't create run options."),n?.extra!==void 0&&Po(n.extra,"",new WeakSet,(l,u)=>{let f=hi(l,i),h=hi(u,i);e._OrtAddRunConfigEntry(t,f,h)!==0&&Zt(`Can't set a run config entry: ${l} - ${u}.`)}),[t,i]}catch(o){throw t!==0&&e._OrtReleaseRunOptions(t),i.forEach(l=>e._free(l)),o}}}),Nd,Od,Bd,wr,kd,cp,iw=Ht(()=>{"use strict";Ra(),Du(),Nd=n=>{switch(n){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${n}`)}},Od=n=>{switch(n){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${n}`)}},Bd=n=>{n.extra||(n.extra={}),n.extra.session||(n.extra.session={});let e=n.extra.session;e.use_ort_model_bytes_directly||(e.use_ort_model_bytes_directly="1"),n.executionProviders&&n.executionProviders.some(t=>(typeof t=="string"?t:t.name)==="webgpu")&&(n.enableMemPattern=!1)},wr=(n,e,t,i)=>{let r=hi(e,i),o=hi(t,i);rn()._OrtAddSessionConfigEntry(n,r,o)!==0&&Zt(`Can't set a session config entry: ${e} - ${t}.`)},kd=async(n,e,t)=>{let i=e.executionProviders;for(let r of i){let o=typeof r=="string"?r:r.name,l=[];switch(o){case"webnn":if(o="WEBNN",wr(n,"session.disable_quant_qdq","1",t),wr(n,"session.disable_qdq_constant_folding","1",t),typeof r!="string"){let g=r?.deviceType;g&&wr(n,"deviceType",g,t)}break;case"webgpu":if(o="JS",typeof r!="string"){let g=r;if(g?.preferredLayout){if(g.preferredLayout!=="NCHW"&&g.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${g.preferredLayout}`);wr(n,"preferredLayout",g.preferredLayout,t)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${o}`)}let u=hi(o,t),f=l.length,h=0,_=0;if(f>0){h=rn()._malloc(f*rn().PTR_SIZE),t.push(h),_=rn()._malloc(f*rn().PTR_SIZE),t.push(_);for(let g=0;g<f;g++)rn().setValue(h+g*rn().PTR_SIZE,l[g][0],"*"),rn().setValue(_+g*rn().PTR_SIZE,l[g][1],"*")}await rn()._OrtAppendExecutionProvider(n,u,h,_,f)!==0&&Zt(`Can't append execution provider: ${o}.`)}},cp=async n=>{let e=rn(),t=0,i=[],r=n||{};Bd(r);try{let o=Nd(r.graphOptimizationLevel??"all"),l=Od(r.executionMode??"sequential"),u=typeof r.logId=="string"?hi(r.logId,i):0,f=r.logSeverityLevel??2;if(!Number.isInteger(f)||f<0||f>4)throw new Error(`log severity level is not valid: ${f}`);let h=r.logVerbosityLevel??0;if(!Number.isInteger(h)||h<0||h>4)throw new Error(`log verbosity level is not valid: ${h}`);let _=typeof r.optimizedModelFilePath=="string"?hi(r.optimizedModelFilePath,i):0;if(t=e._OrtCreateSessionOptions(o,!!r.enableCpuMemArena,!!r.enableMemPattern,l,!!r.enableProfiling,0,u,f,h,_),t===0&&Zt("Can't create session options."),r.executionProviders&&await kd(t,r,i),r.enableGraphCapture!==void 0){if(typeof r.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${r.enableGraphCapture}`);wr(t,"enableGraphCapture",r.enableGraphCapture.toString(),i)}if(r.freeDimensionOverrides)for(let[g,p]of Object.entries(r.freeDimensionOverrides)){if(typeof g!="string")throw new Error(`free dimension override name must be a string: ${g}`);if(typeof p!="number"||!Number.isInteger(p)||p<0)throw new Error(`free dimension override value must be a non-negative integer: ${p}`);let y=hi(g,i);e._OrtAddFreeDimensionOverride(t,y,p)!==0&&Zt(`Can't set a free dimension override: ${g} - ${p}.`)}return r.extra!==void 0&&Po(r.extra,"",new WeakSet,(g,p)=>{wr(t,g,p,i)}),[t,i]}catch(o){throw t!==0&&e._OrtReleaseSessionOptions(t)!==0&&Zt("Can't release session options."),i.forEach(l=>e._free(l)),o}}}),_a,xo,ga,up,fp,Lu,Iu,dp,hp=Ht(()=>{"use strict";_a=n=>{switch(n){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${n}`)}},xo=n=>{switch(n){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${n}`)}},ga=(n,e)=>{let t=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][n],i=typeof e=="number"?e:e.reduce((r,o)=>r*o,1);return t>0?Math.ceil(i*t):void 0},up=n=>{switch(n){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${n}`)}},fp=n=>{switch(n){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${n}`)}},Lu=n=>n==="float32"||n==="float16"||n==="int32"||n==="int64"||n==="uint32"||n==="uint8"||n==="bool"||n==="uint4"||n==="int4",Iu=n=>n==="float32"||n==="float16"||n==="int32"||n==="int64"||n==="uint32"||n==="uint64"||n==="int8"||n==="uint8"||n==="bool"||n==="uint4"||n==="int4",dp=n=>{switch(n){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${n}`)}}}),Uu,pp=Ht(()=>{"use strict";Ru(),Uu=async n=>{if(typeof n=="string"){let e=await fetch(n);if(!e.ok)throw new Error(`failed to load external data file: ${n}`);let t=e.headers.get("Content-Length"),i=t?parseInt(t,10):0;if(i<1073741824)return new Uint8Array(await e.arrayBuffer());{if(!e.body)throw new Error(`failed to load external data file: ${n}, no response body.`);let r=e.body.getReader(),o;try{o=new ArrayBuffer(i)}catch(u){if(u instanceof RangeError){let f=Math.ceil(i/65536);o=new WebAssembly.Memory({initial:f,maximum:f}).buffer}else throw u}let l=0;for(;;){let{done:u,value:f}=await r.read();if(u)break;let h=f.byteLength;new Uint8Array(o,l,h).set(f),l+=h}return new Uint8Array(o,0,i)}}else return n instanceof Blob?new Uint8Array(await n.arrayBuffer()):n instanceof Uint8Array?n:new Uint8Array(n)}}),zd,Fu,Nu,Tr,Gd,rc,Do,Ou,Bu,ac,ku,zu,Gu,mp=Ht(()=>{"use strict";kr(),nw(),iw(),hp(),Ra(),Du(),pp(),zd=(n,e)=>{rn()._OrtInit(n,e)!==0&&Zt("Can't initialize onnxruntime.")},Fu=async n=>{zd(n.wasm.numThreads,fp(n.logLevel))},Nu=async(n,e)=>{rn().asyncInit?.();let t=n.webgpu.adapter;if(e==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(t){if(typeof t.limits!="object"||typeof t.features!="object"||typeof t.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=n.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);let r=n.webgpu.forceFallbackAdapter;if(r!==void 0&&typeof r!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${r}"`);if(t=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:r}),!t)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(e==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment")},Tr=new Map,Gd=n=>{let e=rn(),t=e.stackSave();try{let i=e.PTR_SIZE,r=e.stackAlloc(2*i);e._OrtGetInputOutputCount(n,r,r+i)!==0&&Zt("Can't get session input/output count.");let o=i===4?"i32":"i64";return[Number(e.getValue(r,o)),Number(e.getValue(r+i,o))]}finally{e.stackRestore(t)}},rc=(n,e)=>{let t=rn(),i=t.stackSave(),r=0;try{let o=t.PTR_SIZE,l=t.stackAlloc(2*o);t._OrtGetInputOutputMetadata(n,e,l,l+o)!==0&&Zt("Can't get session input/output metadata.");let u=Number(t.getValue(l,"*"));r=Number(t.getValue(l+o,"*"));let f=t.HEAP32[r/4];if(f===0)return[u,0];let h=t.HEAPU32[r/4+1],_=[];for(let g=0;g<h;g++){let p=Number(t.getValue(r+8+g*o,"*"));_.push(p!==0?t.UTF8ToString(p):Number(t.getValue(r+8+(g+h)*o,"*")))}return[u,f,_]}finally{t.stackRestore(i),r!==0&&t._OrtFree(r)}},Do=n=>{let e=rn(),t=e._malloc(n.byteLength);if(t===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${n.byteLength}.`);return e.HEAPU8.set(n,t),[t,n.byteLength]},Ou=async(n,e)=>{let t,i,r=rn();Array.isArray(n)?[t,i]=n:n.buffer===r.HEAPU8.buffer?[t,i]=[n.byteOffset,n.byteLength]:[t,i]=Do(n);let o=0,l=0,u=0,f=[],h=[],_=[];try{if([l,f]=await cp(e),e?.externalData&&r.mountExternalData){let O=[];for(let L of e.externalData){let N=typeof L=="string"?L:L.path,M=typeof L=="string"?L:L.data;O.push(Uu(M).then(V=>{r.mountExternalData(N,V)}))}await Promise.all(O)}for(let O of e?.executionProviders??[])if((typeof O=="string"?O:O.name)==="webnn"){if(r.shouldTransferToMLTensor=!1,typeof O!="string"){let L=O,N=L?.context,M=L?.gpuDevice,V=L?.deviceType,R=L?.powerPreference;N?r.currentContext=N:M?r.currentContext=await r.webnnCreateMLContext(M):r.currentContext=await r.webnnCreateMLContext({deviceType:V,powerPreference:R})}else r.currentContext=await r.webnnCreateMLContext();break}o=await r._OrtCreateSession(t,i,l),r.webgpuOnCreateSession?.(o),o===0&&Zt("Can't create a session."),r.jsepOnCreateSession?.(),r.currentContext&&(r.webnnRegisterMLContext(o,r.currentContext),r.currentContext=void 0,r.shouldTransferToMLTensor=!0);let[g,p]=Gd(o),y=!!e?.enableGraphCapture,T=[],I=[],E=[],v=[],U=[];for(let O=0;O<g;O++){let[L,N,M]=rc(o,O);L===0&&Zt("Can't get an input name."),h.push(L);let V=r.UTF8ToString(L);T.push(V),E.push(N===0?{name:V,isTensor:!1}:{name:V,isTensor:!0,type:xo(N),shape:M})}for(let O=0;O<p;O++){let[L,N,M]=rc(o,O+g);L===0&&Zt("Can't get an output name."),_.push(L);let V=r.UTF8ToString(L);I.push(V),v.push(N===0?{name:V,isTensor:!1}:{name:V,isTensor:!0,type:xo(N),shape:M})}return Tr.set(o,[o,h,_,null,y,!1]),[o,T,I,E,v]}catch(g){throw h.forEach(p=>r._OrtFree(p)),_.forEach(p=>r._OrtFree(p)),u!==0&&r._OrtReleaseBinding(u)!==0&&Zt("Can't release IO binding."),o!==0&&r._OrtReleaseSession(o)!==0&&Zt("Can't release session."),g}finally{r._free(t),l!==0&&r._OrtReleaseSessionOptions(l)!==0&&Zt("Can't release session options."),f.forEach(g=>r._free(g)),r.unmountExternalData?.()}},Bu=n=>{let e=rn(),t=Tr.get(n);if(!t)throw new Error(`cannot release session. invalid session id: ${n}`);let[i,r,o,l,u]=t;l&&(u&&e._OrtClearBoundOutputs(l.handle)!==0&&Zt("Can't clear bound outputs."),e._OrtReleaseBinding(l.handle)!==0&&Zt("Can't release IO binding.")),e.jsepOnReleaseSession?.(n),e.webnnOnReleaseSession?.(n),e.webgpuOnReleaseSession?.(n),r.forEach(f=>e._OrtFree(f)),o.forEach(f=>e._OrtFree(f)),e._OrtReleaseSession(i)!==0&&Zt("Can't release session."),Tr.delete(n)},ac=async(n,e,t,i,r,o,l=!1)=>{if(!n){e.push(0);return}let u=rn(),f=u.PTR_SIZE,h=n[0],_=n[1],g=n[3],p=g,y,T;if(h==="string"&&(g==="gpu-buffer"||g==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(l&&g!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${o} when enableGraphCapture is true.`);if(g==="gpu-buffer"){let v=n[2].gpuBuffer;T=ga(_a(h),_);{let U=u.jsepRegisterBuffer;if(!U)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');y=U(i,o,v,T)}}else if(g==="ml-tensor"){let v=n[2].mlTensor;T=ga(_a(h),_);let U=u.webnnRegisterMLTensor;if(!U)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');y=U(i,v,_a(h),_)}else{let v=n[2];if(Array.isArray(v)){T=f*v.length,y=u._malloc(T),t.push(y);for(let U=0;U<v.length;U++){if(typeof v[U]!="string")throw new TypeError(`tensor data at index ${U} is not a string`);u.setValue(y+U*f,hi(v[U],t),"*")}}else{let U=u.webnnIsGraphInput,O=u.webnnIsGraphOutput;if(h!=="string"&&U&&O){let L=u.UTF8ToString(r);if(U(i,L)||O(i,L)){let N=_a(h);T=ga(N,_),p="ml-tensor";let M=u.webnnCreateTemporaryTensor,V=u.webnnUploadTensor;if(!M||!V)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let R=await M(i,N,_);V(R,new Uint8Array(v.buffer,v.byteOffset,v.byteLength)),y=R}else T=v.byteLength,y=u._malloc(T),t.push(y),u.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,T),y)}else T=v.byteLength,y=u._malloc(T),t.push(y),u.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,T),y)}}let I=u.stackSave(),E=u.stackAlloc(4*_.length);try{_.forEach((U,O)=>u.setValue(E+O*f,U,f===4?"i32":"i64"));let v=u._OrtCreateTensor(_a(h),y,T,E,_.length,dp(p));v===0&&Zt(`Can't create tensor for input/output. session=${i}, index=${o}.`),e.push(v)}finally{u.stackRestore(I)}},ku=async(n,e,t,i,r,o)=>{let l=rn(),u=l.PTR_SIZE,f=Tr.get(n);if(!f)throw new Error(`cannot run inference. invalid session id: ${n}`);let h=f[0],_=f[1],g=f[2],p=f[3],y=f[4],T=f[5],I=e.length,E=i.length,v=0,U=[],O=[],L=[],N=[],M=[],V=l.stackSave(),R=l.stackAlloc(I*u),B=l.stackAlloc(I*u),F=l.stackAlloc(E*u),W=l.stackAlloc(E*u);try{[v,U]=lp(o),Or("wasm prepareInputOutputTensor");for(let q=0;q<I;q++)await ac(t[q],O,N,n,_[e[q]],e[q],y);for(let q=0;q<E;q++)await ac(r[q],L,N,n,g[i[q]],I+i[q],y);Br("wasm prepareInputOutputTensor");for(let q=0;q<I;q++)l.setValue(R+q*u,O[q],"*"),l.setValue(B+q*u,_[e[q]],"*");for(let q=0;q<E;q++)l.setValue(F+q*u,L[q],"*"),l.setValue(W+q*u,g[i[q]],"*");l.jsepOnRunStart?.(h),l.webnnOnRunStart?.(h);let Y;Y=await l._OrtRun(h,B,R,I,W,E,F,v),Y!==0&&Zt("failed to call OrtRun().");let ae=[],X=[];Or("wasm ProcessOutputTensor");for(let q=0;q<E;q++){let de=Number(l.getValue(F+q*u,"*"));if(de===L[q]||M.includes(L[q])){ae.push(r[q]),de!==L[q]&&l._OrtReleaseTensor(de)!==0&&Zt("Can't release tensor.");continue}let _e=l.stackSave(),Ee=l.stackAlloc(4*u),pe=!1,me,Se=0;try{l._OrtGetTensorData(de,Ee,Ee+u,Ee+2*u,Ee+3*u)!==0&&Zt(`Can't access output tensor data on index ${q}.`);let je=u===4?"i32":"i64",He=Number(l.getValue(Ee,je));Se=l.getValue(Ee+u,"*");let ot=l.getValue(Ee+u*2,"*"),rt=Number(l.getValue(Ee+u*3,je)),tt=[];for(let ge=0;ge<rt;ge++)tt.push(Number(l.getValue(ot+ge*u,je)));l._OrtFree(ot)!==0&&Zt("Can't free memory for tensor dims.");let ue=tt.reduce((ge,he)=>ge*he,1);me=xo(He);let te=p?.outputPreferredLocations[i[q]];if(me==="string"){if(te==="gpu-buffer"||te==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let ge=[];for(let he=0;he<ue;he++){let Ae=l.getValue(Se+he*u,"*"),Ge=l.getValue(Se+(he+1)*u,"*"),Ct=he===ue-1?void 0:Ge-Ae;ge.push(l.UTF8ToString(Ae,Ct))}ae.push([me,tt,ge,"cpu"])}else if(te==="gpu-buffer"&&ue>0){let ge=l.jsepGetBuffer;if(!ge)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let he=ge(Se),Ae=ga(He,ue);if(Ae===void 0||!Lu(me))throw new Error(`Unsupported data type: ${me}`);pe=!0,ae.push([me,tt,{gpuBuffer:he,download:l.jsepCreateDownloader(he,Ae,me),dispose:()=>{l._OrtReleaseTensor(de)!==0&&Zt("Can't release tensor.")}},"gpu-buffer"])}else if(te==="ml-tensor"&&ue>0){let ge=l.webnnEnsureTensor,he=l.webnnIsGraphInputOutputTypeSupported;if(!ge||!he)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(ga(He,ue)===void 0||!Iu(me))throw new Error(`Unsupported data type: ${me}`);if(!he(n,me,!1))throw new Error(`preferredLocation "ml-tensor" for ${me} output is not supported by current WebNN Context.`);let Ae=await ge(n,Se,He,tt,!1);pe=!0,ae.push([me,tt,{mlTensor:Ae,download:l.webnnCreateMLTensorDownloader(Se,me),dispose:()=>{l.webnnReleaseTensorId(Se),l._OrtReleaseTensor(de)}},"ml-tensor"])}else if(te==="ml-tensor-cpu-output"&&ue>0){let ge=l.webnnCreateMLTensorDownloader(Se,me)(),he=ae.length;pe=!0,X.push((async()=>{let Ae=[he,await ge];return l.webnnReleaseTensorId(Se),l._OrtReleaseTensor(de),Ae})()),ae.push([me,tt,[],"cpu"])}else{let ge=up(me),he=new ge(ue);new Uint8Array(he.buffer,he.byteOffset,he.byteLength).set(l.HEAPU8.subarray(Se,Se+he.byteLength)),ae.push([me,tt,he,"cpu"])}}finally{l.stackRestore(_e),me==="string"&&Se&&l._free(Se),pe||l._OrtReleaseTensor(de)}}p&&!y&&(l._OrtClearBoundOutputs(p.handle)!==0&&Zt("Can't clear bound outputs."),Tr.set(n,[h,_,g,p,y,!1]));for(let[q,de]of await Promise.all(X))ae[q][2]=de;return Br("wasm ProcessOutputTensor"),ae}finally{l.webnnOnRunEnd?.(h),l.stackRestore(V),O.forEach(Y=>l._OrtReleaseTensor(Y)),L.forEach(Y=>l._OrtReleaseTensor(Y)),N.forEach(Y=>l._free(Y)),v!==0&&l._OrtReleaseRunOptions(v),U.forEach(Y=>l._free(Y))}},zu=n=>{let e=rn(),t=Tr.get(n);if(!t)throw new Error("invalid session id");let i=t[0],r=e._OrtEndProfiling(i);r===0&&Zt("Can't get an profile file name."),e._OrtFree(r)},Gu=n=>{let e=[];for(let t of n){let i=t[2];!Array.isArray(i)&&"buffer"in i&&e.push(i.buffer)}return e}}),rr,ti,pa,ja,Ka,fo,sc,ho,Ar,Rr,Hd,_p,gp,vp,yp,xp,Sp,Ep,Mp=Ht(()=>{"use strict";kr(),mp(),Ra(),Cu(),rr=()=>!!Qt.wasm.proxy&&typeof document<"u",pa=!1,ja=!1,Ka=!1,ho=new Map,Ar=(n,e)=>{let t=ho.get(n);t?t.push(e):ho.set(n,[e])},Rr=()=>{if(pa||!ja||Ka||!ti)throw new Error("worker not ready")},Hd=n=>{switch(n.data.type){case"init-wasm":pa=!1,n.data.err?(Ka=!0,sc[1](n.data.err)):(ja=!0,sc[0]()),fo&&(URL.revokeObjectURL(fo),fo=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let e=ho.get(n.data.type);n.data.err?e.shift()[1](n.data.err):e.shift()[0](n.data.out);break}default:}},_p=async()=>{if(!ja){if(pa)throw new Error("multiple calls to 'initWasm()' detected.");if(Ka)throw new Error("previous call to 'initWasm()' failed.");if(pa=!0,rr())return new Promise((n,e)=>{ti?.terminate(),sp().then(([t,i])=>{try{ti=i,ti.onerror=o=>e(o),ti.onmessage=Hd,sc=[n,e];let r={type:"init-wasm",in:Qt};!r.in.wasm.wasmPaths&&(t||nu)&&(r.in.wasm.wasmPaths={wasm:new URL(""+new URL("ort-wasm-simd-threaded-DcHrbrbl.wasm",import.meta.url).href,import.meta.url).href}),ti.postMessage(r),fo=t}catch(r){e(r)}},e)});try{await Pu(Qt.wasm),await Fu(Qt),ja=!0}catch(n){throw Ka=!0,n}finally{pa=!1}}},gp=async n=>{if(rr())return Rr(),new Promise((e,t)=>{Ar("init-ep",[e,t]);let i={type:"init-ep",in:{epName:n,env:Qt}};ti.postMessage(i)});await Nu(Qt,n)},vp=async n=>rr()?(Rr(),new Promise((e,t)=>{Ar("copy-from",[e,t]);let i={type:"copy-from",in:{buffer:n}};ti.postMessage(i,[n.buffer])})):Do(n),yp=async(n,e)=>{if(rr()){if(e?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Rr(),new Promise((t,i)=>{Ar("create",[t,i]);let r={type:"create",in:{model:n,options:{...e}}},o=[];n instanceof Uint8Array&&o.push(n.buffer),ti.postMessage(r,o)})}else return Ou(n,e)},xp=async n=>{if(rr())return Rr(),new Promise((e,t)=>{Ar("release",[e,t]);let i={type:"release",in:n};ti.postMessage(i)});Bu(n)},Sp=async(n,e,t,i,r,o)=>{if(rr()){if(t.some(l=>l[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(r.some(l=>l))throw new Error("pre-allocated output tensor is not supported for proxy.");return Rr(),new Promise((l,u)=>{Ar("run",[l,u]);let f=t,h={type:"run",in:{sessionId:n,inputIndices:e,inputs:f,outputIndices:i,options:o}};ti.postMessage(h,Gu(f))})}else return ku(n,e,t,i,r,o)},Ep=async n=>{if(rr())return Rr(),new Promise((e,t)=>{Ar("end-profiling",[e,t]);let i={type:"end-profiling",in:n};ti.postMessage(i)});zu(n)}}),oc,Vd,bp,rw=Ht(()=>{"use strict";kr(),Mp(),hp(),Ru(),pp(),oc=(n,e)=>{switch(n.location){case"cpu":return[n.type,n.dims,n.data,"cpu"];case"gpu-buffer":return[n.type,n.dims,{gpuBuffer:n.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[n.type,n.dims,{mlTensor:n.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${n.location} for ${e()}`)}},Vd=n=>{switch(n[3]){case"cpu":return new pi(n[0],n[2],n[1]);case"gpu-buffer":{let e=n[0];if(!Lu(e))throw new Error(`not supported data type: ${e} for deserializing GPU tensor`);let{gpuBuffer:t,download:i,dispose:r}=n[2];return pi.fromGpuBuffer(t,{dataType:e,dims:n[1],download:i,dispose:r})}case"ml-tensor":{let e=n[0];if(!Iu(e))throw new Error(`not supported data type: ${e} for deserializing MLTensor tensor`);let{mlTensor:t,download:i,dispose:r}=n[2];return pi.fromMLTensor(t,{dataType:e,dims:n[1],download:i,dispose:r})}default:throw new Error(`invalid data location: ${n[3]}`)}},bp=class{async fetchModelAndCopyToWasmMemory(n){return vp(await Uu(n))}async loadModel(n,e){Fr();let t;typeof n=="string"?t=await this.fetchModelAndCopyToWasmMemory(n):t=n,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await yp(t,e),Nr()}async dispose(){return xp(this.sessionId)}async run(n,e,t){Fr();let i=[],r=[];Object.entries(n).forEach(g=>{let p=g[0],y=g[1],T=this.inputNames.indexOf(p);if(T===-1)throw new Error(`invalid input '${p}'`);i.push(y),r.push(T)});let o=[],l=[];Object.entries(e).forEach(g=>{let p=g[0],y=g[1],T=this.outputNames.indexOf(p);if(T===-1)throw new Error(`invalid output '${p}'`);o.push(y),l.push(T)});let u=i.map((g,p)=>oc(g,()=>`input "${this.inputNames[r[p]]}"`)),f=o.map((g,p)=>g?oc(g,()=>`output "${this.outputNames[l[p]]}"`):null),h=await Sp(this.sessionId,r,u,l,f,t),_={};for(let g=0;g<h.length;g++)_[this.outputNames[l[g]]]=o[g]??Vd(h[g]);return Nr(),_}startProfiling(){}endProfiling(){Ep(this.sessionId)}}}),wp={};Bo(wp,{OnnxruntimeWebAssemblyBackend:()=>ru,initializeFlags:()=>iu,wasmBackend:()=>Tp});var iu,ru,Tp,aw=Ht(()=>{"use strict";kr(),Mp(),rw(),iu=()=>{(typeof Qt.wasm.initTimeout!="number"||Qt.wasm.initTimeout<0)&&(Qt.wasm.initTimeout=0);let n=Qt.wasm.simd;if(typeof n!="boolean"&&n!==void 0&&n!=="fixed"&&n!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${n}". Reset it to \`false\` and ignore SIMD feature checking.`),Qt.wasm.simd=!1),typeof Qt.wasm.proxy!="boolean"&&(Qt.wasm.proxy=!1),typeof Qt.wasm.trace!="boolean"&&(Qt.wasm.trace=!1),typeof Qt.wasm.numThreads!="number"||!Number.isInteger(Qt.wasm.numThreads)||Qt.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Qt.wasm.numThreads=1;else{let e=typeof navigator>"u"?kb("node:os").cpus().length:navigator.hardwareConcurrency;Qt.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},ru=class{async init(n){iu(),await _p(),await gp(n)}async createInferenceSessionHandler(n,e){let t=new bp;return await t.loadModel(n,e),t}},Tp=new ru});kr();kr();kr();var sw="1.30.0",ow=ep;{let n=(aw(),tu(wp)).wasmBackend;cs("cpu",n,10),cs("wasm",n,10)}Object.defineProperty(Qt.versions,"web",{value:sw,enumerable:!0});const lw=Object.freeze(Object.defineProperty({__proto__:null,get InferenceSession(){return Au},get TRACE(){return Co},get TRACE_EVENT_BEGIN(){return Or},get TRACE_EVENT_END(){return Br},get TRACE_FUNC_BEGIN(){return Fr},get TRACE_FUNC_END(){return Nr},get Tensor(){return pi},default:ow,get env(){return Qt},get registerBackend(){return cs}},Symbol.toStringTag,{value:"Module"})),cw=""+new URL("ort-wasm-simd-threaded-DcHrbrbl.wasm",import.meta.url).href,lc=["FL_hip","FR_hip","RL_hip","RR_hip","FL_thigh","FR_thigh","RL_thigh","RR_thigh","FL_calf","FR_calf","RL_calf","RR_calf"],po=[-.107,.0991,-.0958,.0925,.793,.809,.81,.808,-1.5,-1.49,-1.5,-1.51],uw=118,fw=7.54,dw=.25,au=.02,hw=.002,pw=Math.round(au/hw),Ap=.8,mw=1,Wd=1.2,mi=64,Pi=48,So=2,_w=3,$d=3,gw=[1,1,1,0,0,0],vw=[{pos:[.42324,.0173,.08412],quat:[.9848078,0,.1736482,0],focalMm:11.041,hApertureMm:21.594,vApertureMm:12.2217},{pos:[.39787,.0173,.04541],quat:[.819152,0,.5735764,0],focalMm:11.041,hApertureMm:21.6571,vApertureMm:12.2523}],Xd=[2,1,256],qd=45;function yw(n){const[e,t,i,r]=n;return[1-2*(i*i+r*r),2*(t*i-e*r),2*(t*r+e*i),2*(t*i+e*r),1-2*(t*t+r*r),2*(i*r-e*t),2*(t*r-e*i),2*(i*r+e*t),1-2*(t*t+i*i)]}class xw{constructor(e,t){this.mj=e,this.posB=t.pos,this.Rbc=yw(t.quat);const i=mi*Pi,r=t.focalMm/t.hApertureMm*mi,o=t.focalMm/t.vApertureMm*Pi,l=mi/2,u=Pi/2;this.dirs=new Float64Array(3*i),this.cos=new Float64Array(i);for(let f=0;f<Pi;f++)for(let h=0;h<mi;h++){const _=f*mi+h,g=(h+.5-l)/r,p=(f+.5-u)/o;let y=1,T=-g,I=-p;const E=Math.hypot(y,T,I);y/=E,T/=E,I/=E,this.dirs.set([y,T,I],3*_),this.cos[_]=y}this.vecW=new Array(3*i).fill(0),this.dist=new e.DoubleBuffer(i),this.geomid=new e.IntBuffer(i),this.n=i}render(e,t,i,r,o=0){const l=t.xpos,u=t.xmat,f=3*i,h=9*i,_=u.subarray(h,h+9),g=this.posB,p=[l[f]+_[0]*g[0]+_[1]*g[1]+_[2]*g[2],l[f+1]+_[3]*g[0]+_[4]*g[1]+_[5]*g[2],l[f+2]+_[6]*g[0]+_[7]*g[1]+_[8]*g[2]],y=this.Rbc,T=new Array(9);for(let U=0;U<3;U++)for(let O=0;O<3;O++)T[3*U+O]=_[3*U]*y[O]+_[3*U+1]*y[3+O]+_[3*U+2]*y[6+O];const I=this.dirs,E=this.vecW;for(let U=0;U<3*this.n;U+=3){const O=I[U],L=I[U+1],N=I[U+2];E[U]=T[0]*O+T[1]*L+T[2]*N,E[U+1]=T[3]*O+T[4]*L+T[5]*N,E[U+2]=T[6]*O+T[7]*L+T[8]*N}this.mj.mj_multiRay(e,t,p,E,gw,!0,i,this.geomid,this.dist,null,this.n,So);const v=this.dist.GetView();for(let U=0;U<this.n;U++){const O=v[U];r[o+U]=O<0||O>So?So:O*this.cos[U]}}dispose(){this.dist.delete(),this.geomid.delete()}}const cc=mi*Pi,Sw=n=>Math.atan2(Math.sin(n),Math.cos(n));class Hu{static async create({mujoco:e,ort:t,files:i,policy:r,sessionOptions:o}){const l=new e.MjVFS;for(const[h,_]of Object.entries(i))l.addBuffer(h,_);const u=e.MjModel.from_xml_path("course.xml",l);l.delete();const f=await t.InferenceSession.create(r,o??{});return new Hu(e,t,u,f)}constructor(e,t,i,r){this.mj=e,this.ort=t,this.model=i,this.data=new e.MjData(i),this.session=r;const o=(f,h)=>{const _=e.mj_name2id(i,f,h);if(_<0)throw new Error(`missing ${h}`);return _},l=e.mjtObj.mjOBJ_JOINT.value,u=e.mjtObj.mjOBJ_ACTUATOR.value;this.baseId=o(e.mjtObj.mjOBJ_BODY.value,"base_link"),this.qadr=lc.map(f=>i.jnt_qposadr[o(l,`${f}_joint`)]),this.vadr=lc.map(f=>i.jnt_dofadr[o(l,`${f}_joint`)]),this.act=lc.map(f=>o(u,f)),this.ctrlRange=this.act.map(f=>[i.actuator_ctrlrange[2*f],i.actuator_ctrlrange[2*f+1]]),this.cameras=vw.map(f=>new xw(e,f)),this.footGeoms=[];for(let f=0;f<i.ngeom;f++)i.geom_type[f]===e.mjtGeom.mjGEOM_SPHERE.value&&i.geom_group[f]===3&&this.footGeoms.push(f);this.proprio=new Float32Array(qd),this.depth=new Float32Array(2*cc),this.depthObs=new Float32Array(2*cc),this.headingTarget=0,this.cmdVx=Ap,this.reset()}reset(e=0,t=0){const{mj:i,model:r,data:o}=this;i.mj_resetData(r,o),o.qpos.set([e,t,.6,1,0,0,0],0),this.qadr.forEach((u,f)=>{o.qpos[u]=po[f]}),i.mj_kinematics(r,o);let l=1/0;for(const u of this.footGeoms)l=Math.min(l,o.geom_xpos[3*u+2]-r.geom_size[3*u]);o.qpos[2]=.6-l+.002,i.mj_forward(r,o),this.lastAction=new Float32Array(12),this.target=Float64Array.from(po),this.h=new Float32Array(Xd.reduce((u,f)=>u*f)),this.stepCount=0,this.tiltSteps=0,this.ring=null,this.headingTarget=0,this.renderDepth()}renderDepth(){this.cameras.forEach((e,t)=>e.render(this.model,this.data,this.baseId,this.depth,t*cc))}delayedDepth(){const e=$d+1;return this.ring||(this.ring=Array.from({length:e},()=>Float32Array.from(this.depth)),this.head=0),this.head=(this.head+1)%e,this.ring[this.head].set(this.depth),this.ring[(this.head+e-$d)%e]}heading(){const e=this.data.xmat,t=9*this.baseId;return Math.atan2(e[t+3],e[t])}yawRateCommand(){const e=mw*Sw(this.headingTarget-this.heading());return Math.max(-Wd,Math.min(Wd,e))}buildProprio(){const e=this.data,t=this.proprio,i=9*this.baseId,r=e.xmat;t.set([e.qvel[3],e.qvel[4],e.qvel[5]],0),t.set([-r[i+6],-r[i+7],-r[i+8]],3),t.set([this.cmdVx,0,this.yawRateCommand()],6);for(let o=0;o<12;o++)t[9+o]=e.qpos[this.qadr[o]]-po[o],t[21+o]=e.qvel[this.vadr[o]],t[33+o]=this.lastAction[o];return t}async step(){const{mj:e,model:t,data:i,ort:r}=this;this.stepCount%_w===0&&this.renderDepth(),this.depthObs.set(this.delayedDepth());const o={proprio:new r.Tensor("float32",Float32Array.from(this.buildProprio()),[1,qd]),depth:new r.Tensor("float32",Float32Array.from(this.depthObs),[1,2,Pi,mi]),h_in:new r.Tensor("float32",this.h,Xd)},l=await this.session.run(o),u=l.actions.data;this.h=Float32Array.from(l.h_out.data);for(let f=0;f<12;f++)this.lastAction[f]=u[f],this.target[f]=po[f]+dw*u[f];for(let f=0;f<pw;f++){for(let h=0;h<12;h++){const _=uw*(this.target[h]-i.qpos[this.qadr[h]])-fw*i.qvel[this.vadr[h]],[g,p]=this.ctrlRange[h];i.ctrl[this.act[h]]=Math.max(g,Math.min(p,_))}e.mj_step(t,i)}this.stepCount++,this.tiltSteps=this.upright()<.5?this.tiltSteps+1:0}upright(){return this.data.xmat[9*this.baseId+8]}basePos(){const e=3*this.baseId,t=this.data.xpos;return[t[e],t[e+1],t[e+2]]}fallen(){return this.tiltSteps>50||this.upright()<-.2||this.basePos()[2]<-.3}}const Ew=[218,188,166,54,142,242,186,161,91,201,65,173,184,56,42,21,69,169,235,139,152,183,108,175,249,147,4,104,116,148,86,18],Mw=[252,124,244,86,8,195,159,109,193,76,247,5,70,146,235,181,35,159,243,220,253,200,164,56,25,200,241,157,141,111,96,133],su="./data/",uc="Hold W / ↑ to walk",bw=1,Yd=1,ww=4,Tw=150,jd=150,di=n=>document.getElementById(n);async function Aw(n,e){let t=0;const i={};return await Promise.all(n.map(async r=>{const o=await fetch(su+r);if(!o.ok)throw new Error(`failed to load ${r}`);i[r]=new Uint8Array(await o.arrayBuffer()),e(++t/n.length)})),i}async function Rw(n){const e=Uint8Array.from(Ew,(r,o)=>r^Mw[o]),t=await crypto.subtle.importKey("raw",e,"AES-GCM",!1,["decrypt"]),i=await crypto.subtle.decrypt({name:"AES-GCM",iv:n.subarray(0,12)},t,n.subarray(12));return new Uint8Array(i)}function es(n,e){di("loading-text").textContent=n,e!==void 0&&(di("loading-bar").style.width=`${Math.round(e*100)}%`)}async function Cw(){es("Loading physics and policy…",.02),Qt.wasm.numThreads=1,Qt.wasm.wasmPaths={wasm:cw};const n=Ub({locateFile:()=>Fb}),t=[...(await(await fetch(`${su}a2/a2.xml`)).text()).matchAll(/file="([^"]+)"/g)].map(f=>`a2/meshes/${f[1]}`),i=await(await fetch(`${su}a2/course.json`)).json(),r=await Aw(["a2/course.xml","a2/a2.xml",...t,"policy/policy.bin"],f=>es("Loading robot, course and policy…",.05+.8*f)),o={};for(const[f,h]of Object.entries(r))f.startsWith("a2/")&&(o[f.slice(3)]=h);es("Starting simulation…",.9);const l=await n,u=await Hu.create({mujoco:l,ort:lw,files:o,policy:await Rw(r["policy/policy.bin"]),sessionOptions:{executionProviders:["wasm"],graphOptimizationLevel:"all"}});return es("Ready",1),{sim:u,course:i}}function Rp(n,e,t){const i=n.geom_xpos,r=n.geom_xmat,o=3*e,l=9*e;t.set(r[l],r[l+1],r[l+2],i[o],r[l+3],r[l+4],r[l+5],i[o+1],r[l+6],r[l+7],r[l+8],i[o+2],0,0,0,1)}function Pw(n,e){const t=n.mesh_vertadr[e],i=n.mesh_vertnum[e],r=n.mesh_faceadr[e],o=n.mesh_facenum[e],l=new Un;l.setAttribute("position",new vi(Float32Array.from(n.mesh_vert.subarray(3*t,3*(t+i))),3)),l.setIndex(new vi(Uint32Array.from(n.mesh_face.subarray(3*r,3*(r+o))),1));const u=l.toNonIndexed();return u.computeVertexNormals(),l.dispose(),u}function Dw(n,e,t,i){const r=n.mjtGeom,o=[],l=[],u=new xu({color:3817287,transparent:!0,opacity:.35});for(let f=0;f<e.ngeom;f++){if(e.geom_group[f]===3)continue;const h=e.geom_type[f],_=e.geom_size.subarray(3*f,3*f+3),g=e.geom_rgba.subarray(4*f,4*f+4);let p;if(h===r.mjGEOM_PLANE.value)p=new ds(400,400);else if(h===r.mjGEOM_BOX.value)p=new Ta(2*_[0],2*_[1],2*_[2]);else if(h===r.mjGEOM_SPHERE.value)p=new Eu(_[0],20,14);else if(h===r.mjGEOM_CYLINDER.value)p=new Su(_[0],_[0],2*_[1],24).rotateX(Math.PI/2);else if(h===r.mjGEOM_MESH.value)p=Pw(e,e.geom_dataid[f]);else continue;const y=e.geom_bodyid[f]!==0,T=new ly({color:new It(g[0],g[1],g[2]),roughness:y?.45:.85,metalness:y?.15:0}),I=new Ui(p,T);I.matrixAutoUpdate=!1,I.castShadow=h!==r.mjGEOM_PLANE.value,I.receiveShadow=!0,Rp(t,f,I.matrix),h===r.mjGEOM_BOX.value&&!y&&e.geom_group[f]!==5&&I.add(new ey(new ny(p),u)),i.add(I),y&&(o.push([f,I]),l.push(I))}return{dynamic:o,robotMeshes:l}}function Lw(n){const e=Math.min(1,Math.max(0,1-n/So)),t=Math.max(0,Math.min(1,.13+e*(4.6-e*3.9))),i=Math.max(0,Math.min(1,.09+e*(2.6-e*2.4))),r=Math.max(0,Math.min(1,.35+e*(1.6-e*2.6)));return[t*255,i*255,r*255]}function Kd(n,e,t,i){const r=e.data;for(let o=0;o<mi*Pi;o++){const[l,u,f]=Lw(t[i+o]);r[4*o]=l,r[4*o+1]=u,r[4*o+2]=f,r[4*o+3]=255}n.putImageData(e,0,0)}async function Iw(){const{sim:n,course:e}=await Cw(),{mj:t,model:i,data:r}=n,o=di("view"),l=new _b({canvas:o,antialias:!0});l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.shadowMap.enabled=!0,l.shadowMap.type=ts;const u=new Wv;u.background=new It(14673388),u.fog=new vu(14673388,12,30),u.add(new fy(16777215,9080985,1.6));const f=new py(16777215,1.8);f.castShadow=!0,f.shadow.mapSize.set(2048,2048),Object.assign(f.shadow.camera,{left:-4,right:4,top:4,bottom:-4,near:.5,far:20}),u.add(f,f.target);const h=new ii(45,1,.05,100);h.up.set(0,0,1),h.position.set(-2.6,-1.5,1.3);const _=new vb(h,o);_.target.set(0,0,.35),_.enableDamping=!0,_.maxPolarAngle=Math.PI*.49,_.minDistance=.8,_.maxDistance=10;const{dynamic:g,robotMeshes:p}=Dw(t,i,r,u),y=()=>{const he=o.clientWidth,Ae=o.clientHeight;l.setSize(he,Ae,!1),h.aspect=he/Ae,h.updateProjectionMatrix()};window.addEventListener("resize",y),y();const T=di("depth-fwd").getContext("2d"),I=di("depth-down").getContext("2d"),E=T.createImageData(mi,Pi),v=I.createImageData(mi,Pi),U=new Set,O=new Set;let L=!1;const N=he=>U.has(he)||O.has(he),M=()=>(N("left")?1:0)-(N("right")?1:0),V={ArrowUp:"forward",KeyW:"forward",ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right"};window.addEventListener("keydown",he=>{V[he.code]&&(U.add(V[he.code]),he.preventDefault()),he.code==="Space"&&(L=!L,he.preventDefault()),(he.code==="KeyR"||he.key==="r"||he.key==="R")&&!he.ctrlKey&&!he.metaKey&&je()}),window.addEventListener("keyup",he=>{V[he.code]&&U.delete(V[he.code])}),window.addEventListener("blur",()=>{U.clear(),O.clear()});for(const he of document.querySelectorAll("#touch [data-key]")){const Ae=he.dataset.key;he.addEventListener("pointerdown",Ge=>{O.add(Ae),he.setPointerCapture(Ge.pointerId)});for(const Ge of["pointerup","pointercancel"])he.addEventListener(Ge,()=>O.delete(Ae))}di("btn-pause").addEventListener("click",()=>{L=!L}),di("btn-reset").addEventListener("click",()=>je());const R=new gy,B=new ht;let F=null;const W=new Sh(new Un().setFromPoints([new ne,new ne]),new xu({color:14173755}));W.visible=!1,u.add(W);const Y=he=>{const Ae=o.getBoundingClientRect();B.set((he.clientX-Ae.left)/Ae.width*2-1,-((he.clientY-Ae.top)/Ae.height)*2+1),R.setFromCamera(B,h)};o.addEventListener("pointerdown",he=>{Y(he);const Ae=R.intersectObjects(p,!1)[0];Ae&&(F={plane:new Ti(new ne(0,0,1),-Ae.point.z),to:Ae.point.clone()},_.enabled=!1,o.setPointerCapture(he.pointerId))}),o.addEventListener("pointermove",he=>{F&&(Y(he),R.ray.intersectPlane(F.plane,F.to))});const ae=()=>{F=null,_.enabled=!0,W.visible=!1,r.xfrc_applied.fill(0)};o.addEventListener("pointerup",ae),o.addEventListener("pointercancel",ae);function X(){if(!F)return;const he=n.baseId,Ae=r.xipos,Ge=new ne(Ae[3*he],Ae[3*he+1],Ae[3*he+2]),Ct=new ne(F.to.x-Ge.x,F.to.y-Ge.y,0).multiplyScalar(Tw);Ct.length()>jd&&Ct.setLength(jd),r.xfrc_applied.set([Ct.x,Ct.y,0,0,0,0],6*he),W.geometry.setFromPoints([Ge,new ne(F.to.x,F.to.y,Ge.z)]),W.visible=!0}let q=0,de=0,_e=null;const Ee=di("status");Ee.textContent=uc;const pe=new ne(...n.basePos());let me=!1,Se=!1;function je(){me=!0,Se||He()}function He(){me=!1,n.reset(),r.xfrc_applied.fill(0),_e=null,Ee.textContent=uc;const he=new ne(...n.basePos());h.position.add(he.clone().sub(pe)),_.target.add(he.clone().sub(pe)),pe.copy(he)}function ot(){const[he]=n.basePos();if(_e){q>=_e&&je();return}n.fallen()?(Ee.textContent="Fell — restarting…",_e=q+1.2):he>e.finish_x&&(Ee.textContent="Course complete!",_e=q+2)}const rt=e.finish_x;function tt(){const[he]=n.basePos(),Ae=e.sections.find(Ge=>he<Ge.x1+.5);di("section").textContent=Ae?he<Ae.x0-.8?`Next: ${Ae.name}`:Ae.name:"Finish",di("progress").style.width=`${Math.max(0,Math.min(100,he/rt*100))}%`,L&&!_e?Ee.textContent="Paused":!_e&&Ee.textContent==="Paused"&&(Ee.textContent="")}let ue=performance.now();async function te(he){if(Se||L)return;Se=!0,de+=he;let Ae=0;for(;q<de&&Ae<ww;){n.cmdVx=N("forward")?Ap:0,n.cmdVx&&Ee.textContent===uc&&(Ee.textContent="");const Ge=n.heading(),Ct=Math.atan2(Math.sin(n.headingTarget-Ge),Math.cos(n.headingTarget-Ge));n.headingTarget=Ge+Math.max(-Yd,Math.min(Yd,Ct+M()*bw*au)),X(),await n.step(),q+=au,Ae++,me?He():ot()}de-q>.1&&(de=q),me&&He(),Se=!1}function ge(he){requestAnimationFrame(ge);const Ae=Math.min(.1,(he-ue)/1e3);ue=he,te(Ae);for(const[at,vt]of g)Rp(r,at,vt.matrix);const Ge=new ne(...n.basePos()),Ct=Ge.clone().sub(pe);h.position.add(Ct),_.target.add(Ct),pe.copy(Ge),f.position.set(Ge.x+2,Ge.y-2,Ge.z+5),f.target.position.copy(Ge),_.update(),Kd(T,E,n.depthObs,0),Kd(I,v,n.depthObs,mi*Pi),tt(),l.render(u,h)}di("loading").style.display="none",requestAnimationFrame(ge)}Iw().catch(n=>{console.error(n),es(`Could not start the demo: ${n.message}`)});const Uw=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));
