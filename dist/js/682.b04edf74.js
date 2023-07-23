(self["webpackChunkassignment_3_3"]=self["webpackChunkassignment_3_3"]||[]).push([[682],{1682:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>g});r(2707);var n=function(){var e=this,t=e._self._c;return t("div",[t("b-form",{staticClass:"d-flex justify-content-around align-items-center mt-5",on:{submit:function(t){return t.preventDefault(),e.loadResult.apply(null,arguments)}}},[t("b-col",{attrs:{md:"2"}}),e._v(" "),t("b-col",{attrs:{cols:"12",md:"8"}},[t("div",{staticClass:"d-flex justify-content-around align-items-center"},[t("b-form-input",{staticClass:"flex-grow-1",attrs:{placeholder:"Search for recipes"},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),t("b-form-select",{staticClass:"ml-1 w-auto",attrs:{options:["5","10","15"],default:"5"},model:{value:e.number,callback:function(t){e.number=t},expression:"number"}}),t("b-button",{staticClass:"ml-1 search-btn",staticStyle:{"margin-top":"0"},attrs:{type:"submit"}},[e._v("Search")]),t("b-dropdown",{staticClass:"ml-4",attrs:{id:"dropdown-diet",text:"Diet",variant:"warning"}},[t("div",{staticClass:"checkbox-columns"},[t("b-form-checkbox-group",{attrs:{options:e.diets,stacked:""},model:{value:e.diet,callback:function(t){e.diet=t},expression:"diet"}})],1)]),t("b-dropdown",{staticClass:"ml-1",attrs:{id:"dropdown-cuisine",text:"Cuisine",variant:"warning"}},[t("b-dropdown-group",[t("div",{staticClass:"checkbox-columns"},e._l(e.cuisines,(function(r,n){return t("b-form-checkbox",{key:n,attrs:{value:r},model:{value:e.cuisine,callback:function(t){e.cuisine=t},expression:"cuisine"}},[e._v(e._s(r))])})),1)])],1),t("b-dropdown",{staticClass:"ml-1",attrs:{id:"dropdown-intolerance",text:"Intolerance",variant:"warning"}},[t("div",{staticClass:"checkbox-columns"},[t("b-form-checkbox-group",{attrs:{options:e.intolerances,stacked:""},model:{value:e.intolerance,callback:function(t){e.intolerance=t},expression:"intolerance"}})],1)])],1)]),t("b-col",{attrs:{md:"2"}})],1),t("b-row",{staticClass:"mt-4 mb-3"},[t("b-col",{attrs:{md:"2"}}),e._v(" "),t("b-col",{staticClass:"d-flex flex-wrap",attrs:{cols:"12",md:"6"}},[e._l(e.cuisine,(function(r,n){return t("b-badge",{key:"cuisine-"+n,staticClass:"mr-2 mb-2",attrs:{variant:"info"}},[e._v(" "+e._s(r)+" "),t("b-button-close",{on:{click:function(t){return e.removeCuisine(n)}}})],1)})),e._l(e.diet,(function(r,n){return t("b-badge",{key:"diet-"+n,staticClass:"mr-2 mb-2",attrs:{variant:"success"}},[e._v(" "+e._s(r)+" "),t("b-button-close",{on:{click:function(t){return e.removeDiet(n)}}})],1)})),e._l(e.intolerance,(function(r,n){return t("b-badge",{key:"intolerance-"+n,staticClass:"mr-2 mb-2",attrs:{variant:"danger"}},[e._v(" "+e._s(r)+" "),t("b-button-close",{on:{click:function(t){return e.removeIntolerance(n)}}})],1)}))],2),t("b-col",{attrs:{md:"4"}})],1),t("div",{staticClass:"d-flex justify-content-around align-items-center mt-3"},[t("b-button-group",[t("b-button",{staticClass:"search-btn",attrs:{disabled:!e.recipes.length},on:{click:function(t){return e.sort("readyInMinutes")}}},[e._v(" Sort by preparation time "),"readyInMinutes"===e.sortKey&&e.sortAsc?t("b-icon-arrow-up"):e._e(),"readyInMinutes"!==e.sortKey||e.sortAsc?e._e():t("b-icon-arrow-down")],1),t("b-button",{staticClass:"ml-2 search-btn",attrs:{disabled:!e.recipes.length},on:{click:function(t){return e.sort("aggregateLikes")}}},[e._v(" Sort by popularity "),"aggregateLikes"===e.sortKey&&e.sortAsc?t("b-icon-arrow-up"):e._e(),"aggregateLikes"!==e.sortKey||e.sortAsc?e._e():t("b-icon-arrow-down")],1)],1)],1),e.loading?t("div",{staticClass:"d-flex justify-content-around align-items-center mt-5"},[t("div",{staticClass:"d-flex align-items-center"},[t("h4",{staticStyle:{"font-size":"3rem"}},[e._v("searching...")]),t("b-spinner",{staticClass:"ml-4",staticStyle:{width:"3rem",height:"3rem"}})],1)]):e.recipes.length?t("div",{staticClass:"d-flex align-items-center mt-5"},[t("RecipePreviewList",{attrs:{imgSide:"left",title:"Search Result",recipes:e.recipes}})],1):e.searched?t("div",{staticClass:"d-flex justify-content-around align-items-center mt-5"},[t("h4",[e._v("No results found")])]):e._e()],1)},s=[],i=r(124),a=r(8534),o=r(5957),c=(r(7658),r(9600),r(8862),r(561),r(7022));const l=[" Gluten Free","Ketogenic","Vegetarian","Lacto-Vegetarian","Ovo-Vegetarian","Vegan","Pescetarian","Paleo","Primal","Low FODMAP","Whole30"],u=["African","Asian","American","British","Cajun","Caribbean","Chinese","Eastern European","European","French","German","Greek","Indian","Irish","Italian","Japanese","Jewish","Korean","Latin American","Mediterranean","Mexican","Middle Eastern","Nordic","Southern","Spanish","Thai","Vietnamese"],d=["Dairy","Egg","Gluten","Grain","Peanut","Seafood","Sesame","Shellfish","Soy","Sulfite","Tree Nut","Wheat"],f={components:{RecipePreviewList:c.Z},data:function(){return{query:"",cuisine:[],diet:[],intolerance:[],number:"5",recipes:[],cuisines:[],diets:[],intolerances:[],sortKey:null,sortAsc:!1,searched:!1,loading:!1}},mounted:function(){var e,t,r;(e=this.cuisines).push.apply(e,(0,o.Z)(u)),(t=this.diets).push.apply(t,(0,o.Z)(l)),(r=this.intolerances).push.apply(r,(0,o.Z)(d));var n=localStorage.getItem("lastSearch");n&&(this.recipes=JSON.parse(n),this.searched=!0)},methods:{loadResult:function(){var e=this;return(0,a.Z)((0,i.Z)().mark((function t(){return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,e.searched=!1,console.log("search.."),t.next=5,e.searchRecipes();case 5:e.loading=!1,console.log("done..");case 7:case"end":return t.stop()}}),t)})))()},searchRecipes:function(){var e=this;return(0,a.Z)((0,i.Z)().mark((function t(){var r,n;return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r={query:e.query,number:e.number},e.diet.length>0&&(r.diet=e.diet.join(",")),e.cuisine.length>0&&(r.cuisines=e.cuisine.join(",")),e.intolerance.length>0&&(r.intolerances=e.intolerance.join(",")),t.next=7,e.axios.get(e.$root.store.state.server_domain+"/recipes/search",{params:r});case 7:n=t.sent,e.recipes=n.data,localStorage.setItem("lastSearch",JSON.stringify(e.recipes)),console.log(e.recipes),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),console.log(t.t0);case 16:return t.prev=16,e.searched=!0,t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[0,13,16,19]])})))()},sort:function(e){var t=this;this.sortKey===e?this.sortAsc=!this.sortAsc:(this.sortKey=e,this.sortAsc=!1),this.recipes.sort((function(r,n){return(r[e]-n[e])*(t.sortAsc?1:-1)}))},removeCuisine:function(e){this.cuisine.splice(e,1)},removeDiet:function(e){this.diet.splice(e,1)},removeIntolerance:function(e){this.intolerance.splice(e,1)}}},p=f;var h=r(1001),v=(0,h.Z)(p,n,s,!1,null,null,null);const g=v.exports},8457:(e,t,r)=>{"use strict";var n=r(9974),s=r(6916),i=r(7908),a=r(3411),o=r(7659),c=r(4411),l=r(6244),u=r(6135),d=r(4121),f=r(1246),p=Array;e.exports=function(e){var t=i(e),r=c(this),h=arguments.length,v=h>1?arguments[1]:void 0,g=void 0!==v;g&&(v=n(v,h>2?arguments[2]:void 0));var m,b,x,y,w,C,k=f(t),A=0;if(!k||this===p&&o(k))for(m=l(t),b=r?new this(m):p(m);m>A;A++)C=g?v(t[A],A):t[A],u(b,A,C);else for(y=d(t,k),w=y.next,b=r?new this:[];!(x=s(w,y)).done;A++)C=g?a(y,v,[x.value,A],!0):x.value,u(b,A,C);return b.length=A,b}},4362:(e,t,r)=>{var n=r(1589),s=Math.floor,i=function(e,t){var r=e.length,c=s(r/2);return r<8?a(e,t):o(e,i(n(e,0,c),t),i(n(e,c),t),t)},a=function(e,t){var r,n,s=e.length,i=1;while(i<s){n=i,r=e[i];while(n&&t(e[n-1],r)>0)e[n]=e[--n];n!==i++&&(e[n]=r)}return e},o=function(e,t,r,n){var s=t.length,i=r.length,a=0,o=0;while(a<s||o<i)e[a+o]=a<s&&o<i?n(t[a],r[o])<=0?t[a++]:r[o++]:a<s?t[a++]:r[o++];return e};e.exports=i},3411:(e,t,r)=>{var n=r(9670),s=r(9212);e.exports=function(e,t,r,i){try{return i?t(n(r)[0],r[1]):t(r)}catch(a){s(e,"throw",a)}}},5117:(e,t,r)=>{"use strict";var n=r(6330),s=TypeError;e.exports=function(e,t){if(!delete e[t])throw s("Cannot delete property "+n(t)+" of "+n(e))}},8886:(e,t,r)=>{var n=r(8113),s=n.match(/firefox\/(\d+)/i);e.exports=!!s&&+s[1]},256:(e,t,r)=>{var n=r(8113);e.exports=/MSIE|Trident/.test(n)},8008:(e,t,r)=>{var n=r(8113),s=n.match(/AppleWebKit\/(\d+)\./);e.exports=!!s&&+s[1]},2261:(e,t,r)=>{"use strict";var n=r(6916),s=r(1702),i=r(1340),a=r(7066),o=r(2999),c=r(2309),l=r(30),u=r(9909).get,d=r(9441),f=r(7168),p=c("native-string-replace",String.prototype.replace),h=RegExp.prototype.exec,v=h,g=s("".charAt),m=s("".indexOf),b=s("".replace),x=s("".slice),y=function(){var e=/a/,t=/b*/g;return n(h,e,"a"),n(h,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),w=o.BROKEN_CARET,C=void 0!==/()??/.exec("")[1],k=y||C||w||d||f;k&&(v=function(e){var t,r,s,o,c,d,f,k=this,A=u(k),I=i(e),S=A.raw;if(S)return S.lastIndex=k.lastIndex,t=n(v,S,I),k.lastIndex=S.lastIndex,t;var _=A.groups,E=w&&k.sticky,R=n(a,k),j=k.source,K=0,M=I;if(E&&(R=b(R,"y",""),-1===m(R,"g")&&(R+="g"),M=x(I,k.lastIndex),k.lastIndex>0&&(!k.multiline||k.multiline&&"\n"!==g(I,k.lastIndex-1))&&(j="(?: "+j+")",M=" "+M,K++),r=new RegExp("^(?:"+j+")",R)),C&&(r=new RegExp("^"+j+"$(?!\\s)",R)),y&&(s=k.lastIndex),o=n(h,E?r:k,M),E?o?(o.input=x(o.input,K),o[0]=x(o[0],K),o.index=k.lastIndex,k.lastIndex+=o[0].length):k.lastIndex=0:y&&o&&(k.lastIndex=k.global?o.index+o[0].length:s),C&&o&&o.length>1&&n(p,o[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(o[c]=void 0)})),o&&_)for(o.groups=d=l(null),c=0;c<_.length;c++)f=_[c],d[f[0]]=o[f[1]];return o}),e.exports=v},7066:(e,t,r)=>{"use strict";var n=r(9670);e.exports=function(){var e=n(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},2999:(e,t,r)=>{var n=r(7293),s=r(7854),i=s.RegExp,a=n((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),o=a||n((function(){return!i("a","y").sticky})),c=a||n((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:c,MISSED_STICKY:o,UNSUPPORTED_Y:a}},9441:(e,t,r)=>{var n=r(7293),s=r(7854),i=s.RegExp;e.exports=n((function(){var e=i(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},7168:(e,t,r)=>{var n=r(7293),s=r(7854),i=s.RegExp;e.exports=n((function(){var e=i("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1038:(e,t,r)=>{var n=r(2109),s=r(8457),i=r(7072),a=!i((function(e){Array.from(e)}));n({target:"Array",stat:!0,forced:a},{from:s})},9753:(e,t,r)=>{var n=r(2109),s=r(3157);n({target:"Array",stat:!0},{isArray:s})},9600:(e,t,r)=>{"use strict";var n=r(2109),s=r(1702),i=r(8361),a=r(5656),o=r(9341),c=s([].join),l=i!=Object,u=l||!o("join",",");n({target:"Array",proto:!0,forced:u},{join:function(e){return c(a(this),void 0===e?",":e)}})},2707:(e,t,r)=>{"use strict";var n=r(2109),s=r(1702),i=r(9662),a=r(7908),o=r(6244),c=r(5117),l=r(1340),u=r(7293),d=r(4362),f=r(9341),p=r(8886),h=r(256),v=r(7392),g=r(8008),m=[],b=s(m.sort),x=s(m.push),y=u((function(){m.sort(void 0)})),w=u((function(){m.sort(null)})),C=f("sort"),k=!u((function(){if(v)return v<70;if(!(p&&p>3)){if(h)return!0;if(g)return g<603;var e,t,r,n,s="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(n=0;n<47;n++)m.push({k:t+n,v:r})}for(m.sort((function(e,t){return t.v-e.v})),n=0;n<m.length;n++)t=m[n].k.charAt(0),s.charAt(s.length-1)!==t&&(s+=t);return"DGBEFHACIJK"!==s}})),A=y||!w||!C||!k,I=function(e){return function(t,r){return void 0===r?-1:void 0===t?1:void 0!==e?+e(t,r)||0:l(t)>l(r)?1:-1}};n({target:"Array",proto:!0,forced:A},{sort:function(e){void 0!==e&&i(e);var t=a(this);if(k)return void 0===e?b(t):b(t,e);var r,n,s=[],l=o(t);for(n=0;n<l;n++)n in t&&x(s,t[n]);d(s,I(e)),r=o(s),n=0;while(n<r)t[n]=s[n++];while(n<l)c(t,n++);return t}})},561:(e,t,r)=>{"use strict";var n=r(2109),s=r(7908),i=r(1400),a=r(9303),o=r(6244),c=r(3658),l=r(7207),u=r(5417),d=r(6135),f=r(5117),p=r(1194),h=p("splice"),v=Math.max,g=Math.min;n({target:"Array",proto:!0,forced:!h},{splice:function(e,t){var r,n,p,h,m,b,x=s(this),y=o(x),w=i(e,y),C=arguments.length;for(0===C?r=n=0:1===C?(r=0,n=y-w):(r=C-2,n=g(v(a(t),0),y-w)),l(y+r-n),p=u(x,n),h=0;h<n;h++)m=w+h,m in x&&d(p,h,x[m]);if(p.length=n,r<n){for(h=w;h<y-n;h++)m=h+n,b=h+r,m in x?x[b]=x[m]:f(x,b);for(h=y;h>y-n+r;h--)f(x,h-1)}else if(r>n)for(h=y-n;h>w;h--)m=h+n-1,b=h+r-1,m in x?x[b]=x[m]:f(x,b);for(h=0;h<r;h++)x[h+w]=arguments[h+2];return c(x,y-n+r),p}})},4916:(e,t,r)=>{"use strict";var n=r(2109),s=r(2261);n({target:"RegExp",proto:!0,forced:/./.exec!==s},{exec:s})},7601:(e,t,r)=>{"use strict";r(4916);var n=r(2109),s=r(6916),i=r(614),a=r(9670),o=r(1340),c=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),l=/./.test;n({target:"RegExp",proto:!0,forced:!c},{test:function(e){var t=a(this),r=o(e),n=t.exec;if(!i(n))return s(l,t,r);var c=s(n,t,r);return null!==c&&(a(c),!0)}})},5957:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});r(9753);function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e){if(Array.isArray(e))return n(e)}r(2526),r(1817),r(1539),r(2165),r(8783),r(3948),r(1038);function i(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}r(7042),r(8309),r(4916),r(7601);function a(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}r(1703),r(6647);function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e){return s(e)||i(e)||a(e)||o()}}}]);
//# sourceMappingURL=682.b04edf74.js.map