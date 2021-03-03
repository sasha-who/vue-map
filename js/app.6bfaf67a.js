(function(t){function n(n){for(var o,s,a=n[0],l=n[1],u=n[2],c=0,d=[];c<a.length;c++)s=a[c],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);p&&p(n);while(d.length)d.shift()();return r.push.apply(r,u||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],o=!0,a=1;a<e.length;a++){var l=e[a];0!==i[l]&&(o=!1)}o&&(r.splice(n--,1),t=s(s.s=e[0]))}return t}var o={},i={app:0},r=[];function s(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=o,s.d=function(t,n,e){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)s.d(e,o,function(n){return t[n]}.bind(null,o));return e},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/vue-map/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=n,a=a.slice();for(var u=0;u<a.length;u++)n(a[u]);var p=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";e("85ec")},"213b":function(t,n,e){"use strict";e("6b47")},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container",attrs:{id:"app"}},[e("RouteList",{attrs:{points:t.points},on:{"remove-point":t.removePoint,"add-point":t.addPoint}}),e("GmapMap",{ref:"map",staticStyle:{width:"75%",height:"100vh"},attrs:{center:t.$getConst("INITIAL_CENTER_LOCATION"),zoom:t.$getConst("ZOOM")}},[t._l(t.points,(function(n,o){return e("GmapMarker",{key:n.id,attrs:{position:n.position,clickable:!0,draggable:!0},on:{click:function(e){return t.toggleInfoWindow(n)},dragstart:function(e){return t.removeInfoWindowWhileDragging(n)},drag:function(n){return t.redrawPath(n.latLng,o)},dragend:function(e){t.redrawPath(e.latLng,o),t.updateCoordinates(e.latLng,n),t.setAddress(e.latLng.lat(),e.latLng.lng(),n)}}})})),e("gmap-info-window",{attrs:{options:t.infoOptions,position:t.infoWindowPosition,opened:t.isInfoWindowOpen},on:{closeclick:function(n){t.isInfoWindowOpen=!1}}}),e("gmap-polyline",{attrs:{path:t.path,options:{strokeColor:"#896e99"}},on:{"update:path":function(n){t.path=n}}})],2)],1)},r=[],s=(e("99af"),e("4de4"),e("d81d"),e("a434"),e("bc3a")),a=e.n(s),l=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"route-list"},[e("h1",{staticClass:"route-list__title"},[t._v("Route editor")]),e("RouteForm",{on:{"add-point":t.addPoint}}),t.points.length?e("ul",{staticClass:"route-list__list"},[e("draggable",{attrs:{list:t.points}},t._l(t.points,(function(n){return e("RouteListItem",{key:n.id,attrs:{point:n},on:{"remove-point":t.removePoint}})})),1)],1):e("p",{staticClass:"route-list__notice"},[t._v("No points yet")])],1)},u=[],p=e("b76a"),c=e.n(p),d=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("form",{staticClass:"route-form",on:{submit:function(t){t.preventDefault()}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"route-form__input",attrs:{type:"text",name:"point",placeholder:"Enter the name of the new point"},domProps:{value:t.title},on:{keyup:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.addPoint(n)},input:function(n){n.target.composing||(t.title=n.target.value)}}})])},f=[],h=(e("498a"),{data:function(){return{title:""}},methods:{addPoint:function(){if(this.title.trim()){var t={id:Date.now(),title:this.title,address:""};this.$emit("add-point",t),this.title=""}}}}),m=h,g=(e("213b"),e("2877")),O=Object(g["a"])(m,d,f,!1,null,null,null),v=O.exports,_=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",{staticClass:"route-list__item"},[e("span",{staticClass:"route-list__title"},[t._v(t._s(t.point.title))]),e("button",{staticClass:"route-list__delete-btn",attrs:{type:"button","aria-label":"Delete point"},on:{click:function(n){return t.$emit("remove-point",t.point.id)}}})])},b=[],w={props:{point:{type:Object,required:!0}}},y=w,I=(e("920e"),Object(g["a"])(y,_,b,!1,null,null,null)),W=I.exports,C={props:{points:{type:Array,required:!0}},components:{draggable:c.a,RouteForm:v,RouteListItem:W},methods:{removePoint:function(t){this.$emit("remove-point",t)},addPoint:function(t){this.$emit("add-point",t)}}},P=C,k=(e("d89b"),Object(g["a"])(P,l,u,!1,null,null,null)),E=k.exports,j={name:"App",data:function(){return{points:[],path:[],pointWithOpenWindowId:null,infoWindowPosition:null,isInfoWindowOpen:!1,infoOptions:{content:"",pixelOffset:this.$getConst("INFO_WINDOW_OFFSET")}}},components:{RouteList:E},watch:{points:function(t){this.path=t.map((function(t){return t.position}))}},methods:{removePoint:function(t){this.points=this.points.filter((function(n){return n.id!==t}))},addPoint:function(t){var n=this.$refs.map.$mapObject.getCenter(),e=n.lat(),o=n.lng();t.position={lat:e,lng:o},this.points.push(t),this.setAddress(e,o,t)},updateCoordinates:function(t,n){n.position={lat:t.lat(),lng:t.lng()}},redrawPath:function(t,n){this.path.splice(n,1,{lat:t.lat(),lng:t.lng()})},setAddress:function(t,n,e){a.a.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(t,",").concat(n,"&key=AIzaSyC0m6cM1EYezpN9-QyEQEO8BRAxWQah9UM")).then((function(t){e.address="".concat(t.data.results[0].formatted_address)})).catch((function(t){console.log(t),e.address="failed to recognize"}))},toggleInfoWindow:function(t){this.infoWindowPosition=t.position,this.infoOptions.content="".concat(t.title,". Address: ").concat(t.address),this.pointWithOpenWindowId===t.id?this.isInfoWindowOpen=!this.isInfoWindowOpen:(this.isInfoWindowOpen=!0,this.pointWithOpenWindowId=t.id)},removeInfoWindowWhileDragging:function(t){this.pointWithOpenWindowId===t.id&&this.isInfoWindowOpen&&(this.isInfoWindowOpen=!1)}}},x=j,$=(e("034f"),Object(g["a"])(x,i,r,!1,null,null,null)),A=$.exports,N={INITIAL_CENTER_LOCATION:{lat:55.95048267534379,lng:-3.186657634388129},ZOOM:14,INFO_WINDOW_OFFSET:{width:0,height:-35},install:function(t){t.prototype.$getConst=function(t){return N[t]}}},L=N,M=e("755e");o["a"].config.productionTip=!1,o["a"].use(L),o["a"].use(M,{load:{key:"AIzaSyC0m6cM1EYezpN9-QyEQEO8BRAxWQah9UM"},installComponents:!0}),new o["a"]({render:function(t){return t(A)}}).$mount("#app")},"6b47":function(t,n,e){},"85ec":function(t,n,e){},"920e":function(t,n,e){"use strict";e("e2c9")},d89b:function(t,n,e){"use strict";e("e893")},e2c9:function(t,n,e){},e893:function(t,n,e){}});
//# sourceMappingURL=app.6bfaf67a.js.map