webpackJsonp([4],{EtJx:function(n,e,t){e=n.exports=t("UTlt")(!0),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*动画*/\n.slides-right-enter-active[data-v-f22e0546],\n.slides-right-leave-active[data-v-f22e0546],\n.slides-left-enter-active[data-v-f22e0546],\n.slides-left-leave-active[data-v-f22e0546] {\n    will-change: transform;\n    -webkit-transition: all 500ms;\n    transition: all 500ms;\n    position: absolute;\n\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n\n    -webkit-perspective: 1000;\n    -ms-perspective: 1000;\n    perspective: 1000;\n}\n.slides-right-enter[data-v-f22e0546] {\n\n    -webkit-transform: translate3d(-100%, 0, 0);\n\n            transform: translate3d(-100%, 0, 0);\n}\n.slides-right-leave-active[data-v-f22e0546] {\n\n    -webkit-transform: translate3d(100%, 0, 0);\n\n            transform: translate3d(100%, 0, 0);\n}\n.slides-left-enter[data-v-f22e0546] {\n\n    -webkit-transform: translate3d(100%, 0, 0);\n\n            transform: translate3d(100%, 0, 0);\n}\n.slides-left-leave-active[data-v-f22e0546] {\n\n    -webkit-transform: translate3d(-100%, 0, 0);\n\n            transform: translate3d(-100%, 0, 0);\n}\n.cui-flex-wrap[data-v-f22e0546]\n{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n}\n.cui-flex-con[data-v-f22e0546]\n{\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n    flex: 1;\n}\n.cui-flex-vertical[data-v-f22e0546]\n{\n    -webkit-box-orient: vertical;\n    -webkit-flex-flow: column;\n    flex-flow: column;\n}\n.cui-vue-tab[data-v-f22e0546]\n{\n    height:100%;\n    color:#6f6e6e;\n}\n.cui-vue-tab-header[data-v-f22e0546]::-webkit-scrollbar\n{\n    display: none;\n}\n.cui-vue-tab-header[data-v-f22e0546]\n{\n    margin:0 auto;\n    height:1.5rem;\n    width:100%;\n    text-align: center;\n    overflow-y:hidden;\n    background-color:white;\n}\n.cui-vue-tab-header-item[data-v-f22e0546]\n{\n    border-bottom:2px solid white;\n    -webkit-transition: all .3s;\n    transition: all .3s;\n\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n\n    -webkit-perspective: 1000;\n    -ms-perspective: 1000;\n    perspective: 1000;\n}\n.cui-vue-tab-header-item.active[data-v-f22e0546]\n{\n    border-bottom:2px solid #61d7ff;\n    color:#616161;\n    font-weight: bold;\n}\n/*可滚动*/\n.cui-vue-tab-scroll .cui-vue-tab-header[data-v-f22e0546]\n{\n    white-space: nowrap;\n    overflow-x:auto;\n    /*解决ios上滑动不流畅*/\n    -webkit-overflow-scrolling: touch;\n    padding-bottom:30px;\n    position:relative;\n    line-height: 1.3rem;\n    font-size:0;\n}\n.cui-vue-tab-scroll .cui-vue-tab-header-item[data-v-f22e0546]\n{\n    display:inline-block;\n    font-size:.6rem;\n    margin:0 1rem;\n}\n/*按钮胶囊*/\n.cui-vue-tab-button .cui-vue-tab-header[data-v-f22e0546]\n{\n    white-space: nowrap;\n    overflow-x:auto;\n    /*解决ios上滑动不流畅*/\n    -webkit-overflow-scrolling: touch;\n    padding-bottom:30px;\n    position:relative;\n    font-size:0;\n}\n.cui-vue-tab-button .cui-vue-tab-header-item[data-v-f22e0546]\n{\n    display:inline-block;\n    height:1.2rem;\n    line-height: 1.2rem;\n    font-size:.6rem;\n    margin:.15rem auto;\n    min-width:3rem;\n    border:1px solid #e2e2e2;\n    border-right:none;\n}\n.cui-vue-tab-button .cui-vue-tab-header-item[data-v-f22e0546]:first-child\n{\n    border-top-left-radius:.6rem;\n    border-bottom-left-radius:.6rem;\n    border:1px solid #e2e2e2;\n    border-right:none;\n}\n.cui-vue-tab-button .cui-vue-tab-header-item[data-v-f22e0546]:last-child\n{\n    border-top-right-radius:.6rem;\n    border-bottom-right-radius:.6rem;\n    border:1px solid #e2e2e2;\n}\n.cui-vue-tab-button .cui-vue-tab-header-item.active[data-v-f22e0546]\n{\n    color:white;\n    background-color:#61d7ff;\n    border:1px solid #61d7ff;\n    font-weight: bold;\n}\n/*平分*/\n.cui-vue-tab-flex .cui-vue-tab-header[data-v-f22e0546]\n{\n    width:100%;\n    display:-webkit-box;\n    display:-webkit-flex;\n    display:flex;\n    overflow:hidden;\n    line-height: 1.5rem;\n}\n.cui-vue-tab-flex .cui-vue-tab-header-item[data-v-f22e0546]\n{\n    font-size:.6rem;\n    -webkit-box-flex: 1;\n    -webkit-flex:1;\n    flex:1;\n}\n.cui-vue-tab-header-tip[data-v-f22e0546]\n{\n    height:2px;\n    width:1rem;\n    /*background-color:#61d7ff;*/\n    position:absolute;\n    bottom:0;\n}\n.cui-vue-tab-content-item[data-v-f22e0546]\n{\n    height:100%;\n    width:100%;\n    display:inline-block;\n}\n.cui-vue-tab-content[data-v-f22e0546]\n{\n    white-space: nowrap;\n}\n","",{version:3,sources:["/Applications/vue-app-new/src/components/cui-vue/cui-tab/CuiTab.vue"],names:[],mappings:";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA6HA,MAAM;AACN;;;;IAII,uBAAuB;IACvB,8BAA8B;IAC9B,sBAAsB;IACtB,mBAAmB;;IAEnB,oCAAoC;IACpC,4BAA4B;;IAE5B,0BAA0B;IAC1B,sBAAsB;IACtB,kBAAkB;CACrB;AACD;;IAEI,4CAA4C;;YAEpC,oCAAoC;CAC/C;AACD;;IAEI,2CAA2C;;YAEnC,mCAAmC;CAC9C;AACD;;IAEI,2CAA2C;;YAEnC,mCAAmC;CAC9C;AACD;;IAEI,4CAA4C;;YAEpC,oCAAoC;CAC/C;AACD;;IAEI,qBAAqB;IACrB,sBAAsB;IACtB,cAAc;CACjB;AACD;;IAEI,oBAAoB;IACpB,gBAAgB;IAChB,QAAQ;CACX;AACD;;IAEI,6BAA6B;IAC7B,0BAA0B;IAC1B,kBAAkB;CACrB;AACD;;IAEI,YAAY;IACZ,cAAc;CACjB;AACD;;IAEI,cAAc;CACjB;AACD;;IAEI,cAAc;IACd,cAAc;IACd,WAAW;IACX,mBAAmB;IACnB,kBAAkB;IAClB,uBAAuB;CAC1B;AACD;;IAEI,8BAA8B;IAC9B,4BAA4B;IAC5B,oBAAoB;;IAEpB,iCAAiC;IACjC,yBAAyB;IACzB,oCAAoC;IACpC,4BAA4B;;IAE5B,0BAA0B;IAC1B,sBAAsB;IACtB,kBAAkB;CACrB;AACD;;IAEI,gCAAgC;IAChC,cAAc;IACd,kBAAkB;CACrB;AACD,OAAO;AACP;;IAEI,oBAAoB;IACpB,gBAAgB;IAChB,eAAe;IACf,kCAAkC;IAClC,oBAAoB;IACpB,kBAAkB;IAClB,oBAAoB;IACpB,YAAY;CACf;AACD;;IAEI,qBAAqB;IACrB,gBAAgB;IAChB,cAAc;CACjB;AACD,QAAQ;AACR;;IAEI,oBAAoB;IACpB,gBAAgB;IAChB,eAAe;IACf,kCAAkC;IAClC,oBAAoB;IACpB,kBAAkB;IAClB,YAAY;CACf;AACD;;IAEI,qBAAqB;IACrB,cAAc;IACd,oBAAoB;IACpB,gBAAgB;IAChB,mBAAmB;IACnB,eAAe;IACf,yBAAyB;IACzB,kBAAkB;CACrB;AACD;;IAEI,6BAA6B;IAC7B,gCAAgC;IAChC,yBAAyB;IACzB,kBAAkB;CACrB;AACD;;IAEI,8BAA8B;IAC9B,iCAAiC;IACjC,yBAAyB;CAC5B;AACD;;IAEI,YAAY;IACZ,yBAAyB;IACzB,yBAAyB;IACzB,kBAAkB;CACrB;AACD,MAAM;AACN;;IAEI,WAAW;IACX,oBAAoB;IACpB,qBAAqB;IACrB,aAAa;IACb,gBAAgB;IAChB,oBAAoB;CACvB;AACD;;IAEI,gBAAgB;IAChB,oBAAoB;IACpB,eAAe;IACf,OAAO;CACV;AACD;;IAEI,WAAW;IACX,WAAW;IACX,6BAA6B;IAC7B,kBAAkB;IAClB,SAAS;CACZ;AACD;;IAEI,YAAY;IACZ,WAAW;IACX,qBAAqB;CACxB;AACD;;IAEI,oBAAoB;CACvB",file:"CuiTab.vue",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*动画*/\n.slides-right-enter-active[data-v-f22e0546],\n.slides-right-leave-active[data-v-f22e0546],\n.slides-left-enter-active[data-v-f22e0546],\n.slides-left-leave-active[data-v-f22e0546] {\n    will-change: transform;\n    -webkit-transition: all 500ms;\n    transition: all 500ms;\n    position: absolute;\n\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n\n    -webkit-perspective: 1000;\n    -ms-perspective: 1000;\n    perspective: 1000;\n}\n.slides-right-enter[data-v-f22e0546] {\n\n    -webkit-transform: translate3d(-100%, 0, 0);\n\n            transform: translate3d(-100%, 0, 0);\n}\n.slides-right-leave-active[data-v-f22e0546] {\n\n    -webkit-transform: translate3d(100%, 0, 0);\n\n            transform: translate3d(100%, 0, 0);\n}\n.slides-left-enter[data-v-f22e0546] {\n\n    -webkit-transform: translate3d(100%, 0, 0);\n\n            transform: translate3d(100%, 0, 0);\n}\n.slides-left-leave-active[data-v-f22e0546] {\n\n    -webkit-transform: translate3d(-100%, 0, 0);\n\n            transform: translate3d(-100%, 0, 0);\n}\n.cui-flex-wrap[data-v-f22e0546]\n{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n}\n.cui-flex-con[data-v-f22e0546]\n{\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n    flex: 1;\n}\n.cui-flex-vertical[data-v-f22e0546]\n{\n    -webkit-box-orient: vertical;\n    -webkit-flex-flow: column;\n    flex-flow: column;\n}\n.cui-vue-tab[data-v-f22e0546]\n{\n    height:100%;\n    color:#6f6e6e;\n}\n.cui-vue-tab-header[data-v-f22e0546]::-webkit-scrollbar\n{\n    display: none;\n}\n.cui-vue-tab-header[data-v-f22e0546]\n{\n    margin:0 auto;\n    height:1.5rem;\n    width:100%;\n    text-align: center;\n    overflow-y:hidden;\n    background-color:white;\n}\n.cui-vue-tab-header-item[data-v-f22e0546]\n{\n    border-bottom:2px solid white;\n    -webkit-transition: all .3s;\n    transition: all .3s;\n\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n\n    -webkit-perspective: 1000;\n    -ms-perspective: 1000;\n    perspective: 1000;\n}\n.cui-vue-tab-header-item.active[data-v-f22e0546]\n{\n    border-bottom:2px solid #61d7ff;\n    color:#616161;\n    font-weight: bold;\n}\n/*可滚动*/\n.cui-vue-tab-scroll .cui-vue-tab-header[data-v-f22e0546]\n{\n    white-space: nowrap;\n    overflow-x:auto;\n    /*解决ios上滑动不流畅*/\n    -webkit-overflow-scrolling: touch;\n    padding-bottom:30px;\n    position:relative;\n    line-height: 1.3rem;\n    font-size:0;\n}\n.cui-vue-tab-scroll .cui-vue-tab-header-item[data-v-f22e0546]\n{\n    display:inline-block;\n    font-size:.6rem;\n    margin:0 1rem;\n}\n/*按钮胶囊*/\n.cui-vue-tab-button .cui-vue-tab-header[data-v-f22e0546]\n{\n    white-space: nowrap;\n    overflow-x:auto;\n    /*解决ios上滑动不流畅*/\n    -webkit-overflow-scrolling: touch;\n    padding-bottom:30px;\n    position:relative;\n    font-size:0;\n}\n.cui-vue-tab-button .cui-vue-tab-header-item[data-v-f22e0546]\n{\n    display:inline-block;\n    height:1.2rem;\n    line-height: 1.2rem;\n    font-size:.6rem;\n    margin:.15rem auto;\n    min-width:3rem;\n    border:1px solid #e2e2e2;\n    border-right:none;\n}\n.cui-vue-tab-button .cui-vue-tab-header-item[data-v-f22e0546]:first-child\n{\n    border-top-left-radius:.6rem;\n    border-bottom-left-radius:.6rem;\n    border:1px solid #e2e2e2;\n    border-right:none;\n}\n.cui-vue-tab-button .cui-vue-tab-header-item[data-v-f22e0546]:last-child\n{\n    border-top-right-radius:.6rem;\n    border-bottom-right-radius:.6rem;\n    border:1px solid #e2e2e2;\n}\n.cui-vue-tab-button .cui-vue-tab-header-item.active[data-v-f22e0546]\n{\n    color:white;\n    background-color:#61d7ff;\n    border:1px solid #61d7ff;\n    font-weight: bold;\n}\n/*平分*/\n.cui-vue-tab-flex .cui-vue-tab-header[data-v-f22e0546]\n{\n    width:100%;\n    display:-webkit-box;\n    display:-webkit-flex;\n    display:flex;\n    overflow:hidden;\n    line-height: 1.5rem;\n}\n.cui-vue-tab-flex .cui-vue-tab-header-item[data-v-f22e0546]\n{\n    font-size:.6rem;\n    -webkit-box-flex: 1;\n    -webkit-flex:1;\n    flex:1;\n}\n.cui-vue-tab-header-tip[data-v-f22e0546]\n{\n    height:2px;\n    width:1rem;\n    /*background-color:#61d7ff;*/\n    position:absolute;\n    bottom:0;\n}\n.cui-vue-tab-content-item[data-v-f22e0546]\n{\n    height:100%;\n    width:100%;\n    display:inline-block;\n}\n.cui-vue-tab-content[data-v-f22e0546]\n{\n    white-space: nowrap;\n}\n"],sourceRoot:""}])},"OgP/":function(n,e,t){"use strict";function i(n){t("jOjZ")}Object.defineProperty(e,"__esModule",{value:!0});var a={name:"CuiTab",data:function(){return{startX:0,startY:0,endX:0,endY:0,lock:!1,activeIndex:this.active,transitionName:this.animate?"slides-right":""}},props:{active:{default:function(){return 0}},animate:{default:function(){return!0}},data:{default:function(){return[]}},paddingTop:{default:function(){return"0"}},type:{default:function(){return"scroll"}}},created:function(){},methods:{start:function(n){var e=n.changedTouches[0];this.startX=e.clientX,this.startY=e.clientY,this.lock=!0},end:function(n){if(this.lock){var e=n.changedTouches[0],t=0;this.lock=!1,this.endX=e.clientX,this.endY=e.clientY,t=this.endX-this.startX;var i=this.endX>this.startX&&Math.abs((this.endY-this.startY)/(this.endX-this.startX))<1;Math.abs(t)>100&&(this.activeIndex=i?this.activeIndex-1>=0?this.activeIndex-1:0:this.activeIndex+1<=this.data.length-1?this.activeIndex+1:this.data.length-1,this.animate&&(this.transitionName=i?"slides-right":"slides-left"))}},switchTab:function(n){var e=n,t=this.activeIndex;this.animate&&(this.transitionName=e<t?"slides-right":"slides-left"),this.activeIndex=n,this.$emit("onchange",this.activeIndex)}}},A=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{class:"cui-vue-tab cui-flex-wrap cui-flex-vertical cui-vue-tab-"+n.type},[t("div",{staticClass:"cui-vue-tab-header",style:{paddingTop:n.paddingTop}},n._l(n.data,function(e,i){return t("div",{class:{"cui-vue-tab-header-item":!0,active:parseInt(n.activeIndex)===i},on:{click:function(e){return n.switchTab(i)}}},[n._v("\n            "+n._s(e)+"\n        ")])}),0),n._v(" "),t("div",{staticClass:"cui-vue-tab-content cui-flex-con",on:{touchstart:function(e){return n.start(e)},touchend:function(e){return n.end(e)}}},n._l(n.data,function(e,i){return t("transition",{key:i,attrs:{name:n.transitionName}},[t("div",{directives:[{name:"show",rawName:"v-show",value:parseInt(n.activeIndex)===i,expression:"parseInt(activeIndex)===dataindex"}],key:i,staticClass:"cui-vue-tab-content-item"},[n._t(i)],2)])}),1)])},r=[],o={render:A,staticRenderFns:r},s=o,d=t("C7Lr"),l=i,c=d(a,s,!1,l,"data-v-f22e0546",null);e.default=c.exports},jOjZ:function(n,e,t){var i=t("EtJx");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t("FIqI")("606dd4dc",i,!0,{})}});
//# sourceMappingURL=4.36c1eb7cc4464ef925d6.js.map