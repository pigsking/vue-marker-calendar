(function(e){function t(t){for(var a,s,o=t[0],c=t[1],u=t[2],h=0,d=[];h<o.length;h++)s=o[h],r[s]&&d.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/calendar/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("c21b"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"calendar"}},[n("Calendar",{attrs:{english:e.english,markers:e.markers,disabledFuture:e.disabledFuture},on:{month:function(t){e.handleMonthChange(t)},day:function(t){e.handleDayChange(t)}}})],1),n("p",{staticClass:"current-date"},[e._v(e._s(e.currentDate))]),n("ul",{staticClass:"options"},[n("li",[n("label",{attrs:{for:"english"}},[e._v("English")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.english,expression:"english"}],attrs:{type:"checkbox",id:"english"},domProps:{checked:Array.isArray(e.english)?e._i(e.english,null)>-1:e.english},on:{change:function(t){var n=e.english,a=t.target,r=!!a.checked;if(Array.isArray(n)){var i=null,s=e._i(n,i);a.checked?s<0&&(e.english=n.concat([i])):s>-1&&(e.english=n.slice(0,s).concat(n.slice(s+1)))}else e.english=r}}})]),n("li",[n("label",{attrs:{for:"disabledFuture"}},[e._v("Disabled Future")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.disabledFuture,expression:"disabledFuture"}],attrs:{type:"checkbox",id:"disabledFuture"},domProps:{checked:Array.isArray(e.disabledFuture)?e._i(e.disabledFuture,null)>-1:e.disabledFuture},on:{change:function(t){var n=e.disabledFuture,a=t.target,r=!!a.checked;if(Array.isArray(n)){var i=null,s=e._i(n,i);a.checked?s<0&&(e.disabledFuture=n.concat([i])):s>-1&&(e.disabledFuture=n.slice(0,s).concat(n.slice(s+1)))}else e.disabledFuture=r}}})])])])},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"calendar"}},[n("div",{staticClass:"month-switch"},[n("span",{on:{click:function(t){e.handleMonthSwitch("prev")}}},[e._v("Prev")]),e._v("\n    "+e._s(e.currentYear)+" / "+e._s(e.currentMonth<10?"0"+e.currentMonth:e.currentMonth)+" "),n("span",{on:{click:function(t){e.handleMonthSwitch("next")}}},[e._v("Next")])]),n("ul",{staticClass:"week"},e._l(e.week,function(t,a){return n("li",{key:a},[e._v(e._s(t))])})),n("ul",{staticClass:"month"},e._l(e.days,function(t,a){return n("li",{class:[t.className,{"choose-day":t.date===e.chooseDate,"disabled-day":e.disabledFuture&&t.isFutureDay,"other-month":t.day>7&&a<7||t.day<7&&a>28}],on:{click:function(n){e.handleDayChoose(t,a)}}},[n("span",[e._v(e._s(t.day))])])}))])},o=[],c=(n("6762"),n("2fdb"),n("8afe")),u={props:{markers:Array,disabledFuture:{type:Boolean,default:!1},english:{type:Boolean,default:!1}},data:function(){return{minMonths:[4,6,9,11],currentYear:(new Date).getFullYear(),currentMonth:(new Date).getMonth()+1,days:null,chooseDate:null,chooseDay:null,todayDate:null}},computed:{week:function(){return this.english?["SUN","MON","TUE","WED","THU","FRI","SAT"]:["日","一","二","三","四","五","六"]}},created:function(){this.getTodayDate(),this.initMonth(this.currentYear,this.currentMonth)},methods:{isLeapYear:function(e){return e%4==0&&e%100!=0||e%400==0},getTodayDate:function(){var e=new Date;this.todayDate="".concat(this.currentYear,"/").concat(this.currentMonth,"/").concat(e.getDate()),this.chooseDay=e.getDate(),this.chooseDate=this.todayDate,this.$emit("day",this.chooseDate)},initMonth:function(e,t){var n=this.getTotalDays(e,t),a=this.getTotalDays(e,1===t?t=12:t-1),r=this.getTotalDays(e,12===t?t=1:t+1),i=new Date(n[0].date).getDay(),s=new Date(n[n.length-1].date).getDay(),o=a.splice(a.length-i,a.length-1),u=r.splice(0,7-(s+1));this.days=Object(c["a"])(o).concat(Object(c["a"])(n),Object(c["a"])(u))},getTotalDays:function(e,t){var n,a=this,r=[];n=2===t?this.isLeapYear(e)?29:28:this.minMonths.includes(t)?30:31;for(var i=function(n){var i=n+1,s="".concat(e,"/").concat(t,"/").concat(i),o={day:i,date:s,timeStamp:new Date(s).getTime()};o.isFutureDay=new Date(a.todayDate).getTime()<o.timeStamp,a.markers.map(function(e){o.date===e.date&&(o.className=e.className)}),r.push(o)},s=0;s<n;s++)i(s);return r},handleMonthSwitch:function(e){"prev"===e&&(this.currentMonth>1?this.currentMonth--:(this.currentYear--,this.currentMonth=12)),"next"===e&&(this.currentMonth<12?this.currentMonth++:(this.currentYear++,this.currentMonth=1));var t="".concat(this.currentYear,"/").concat(this.currentMonth,"/").concat(this.chooseDay);this.$emit("month",t),this.initMonth(this.currentYear,this.currentMonth)},handleDayChoose:function(e,t){this.chooseDay=e.day;var n="".concat(this.currentYear,"/").concat(this.currentMonth,"/").concat(e.day);this.$emit("day",n),e.day>7&&t<7&&this.handleMonthSwitch("prev"),e.day<7&&t>28&&this.handleMonthSwitch("next"),this.disabledFuture&&e.isFutureDay||(this.chooseDate=e.date)}}},l=u,h=(n("b59f"),n("2877")),d=Object(h["a"])(l,s,o,!1,null,"19532e34",null);d.options.__file="Calendar.vue";var f=d.exports,p={name:"app",components:{Calendar:f},data:function(){return{markers:[{date:"2018/10/20",className:"love"},{date:"2018/10/30",className:"miss"},{date:"2018/10/1",className:"dream"}],disabledFuture:!1,english:!1,currentDate:""}},methods:{handleDayChange:function(e){this.currentDate=e},handleMonthChange:function(e){this.currentDate=e}}},y=p,v=(n("034f"),Object(h["a"])(y,r,i,!1,null,null,null));v.options.__file="App.vue";var g=v.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(g)}}).$mount("#app")},ae92:function(e,t,n){},b59f:function(e,t,n){"use strict";var a=n("ae92"),r=n.n(a);r.a},c21b:function(e,t,n){}});
//# sourceMappingURL=app.ebfaf1f0.js.map