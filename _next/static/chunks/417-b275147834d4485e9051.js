(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[417],{28699:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(85893),a=r(809),c=r.n(a),s=r(92447),i=r(80711),o=r(67294),u=r(11163),l=r(49422),d=r(96365),p=(r(46066),r(96630)),v=r(96463),m=r(65004),x=r(56732),f=r(65863),_=r(86644);function h(e){var t=(0,d.I0)(),r=e.is_show_star,a=e.products,h=e.setProductInfo,b=e.screen,k=void 0===b?"":b,Z=e.indexP,N=void 0===Z?"":Z,y=(0,u.useRouter)(),P=(0,d.v9)((function(e){return e.storeReducer})),E=(0,d.v9)((function(e){return e.defaultReducer})),j=(0,o.useMemo)((function(){return E.pathType||_.ZP.PATH_TYPE.PAGE_STORE}),[E.pathType]),S=(0,o.useMemo)((function(){return E.pathRoot||""}),[E.pathRoot]),g=(0,o.useMemo)((function(){return P.info_store||{}}),[P.info_store]),T=function(e,r){t(p.Z.setShowLoading(!0));var n="".concat(S,"/detail/").concat(x.Z.getSlug(e,r)),a=y.query;j==_.ZP.PATH_TYPE.PRODUCT&&(n="/".concat(r)),delete a.page_checkout_path,delete a.keyword,delete a.product,delete a.cart_token,delete a.checkout_token,delete a.product,y.push({pathname:n,query:a})},R=function(){var e=(0,s.Z)(c().mark((function e(r,n){var a,s,o,u,l,d,p,b,k,Z,N,P,E,j,S,g,T,R,w,O,A,C,D,q;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),r.stopPropagation(),"true"!=y.query.isPreview){e.next=4;break}return e.abrupt("return");case 4:if(!h){e.next=122;break}a=n.variants,s=n.up_sell_variants,o=!0,u=!1,e.prev=9,d=(0,i.Z)(a);case 11:return e.next=13,d.next();case 13:return p=e.sent,o=p.done,e.next=17,p.value;case 17:if(b=e.sent,o){e.next=105;break}if(k=b,!f.Z.isAvailable(k)){e.next=102;break}Z=[],k.optionSelects=[],N=!0,P=!1,e.prev=25,j=(0,i.Z)(s);case 27:return e.next=29,j.next();case 29:return S=e.sent,N=S.done,e.next=33,S.value;case 33:if(g=e.sent,N){e.next=40;break}g.isCheck=!1;case 37:N=!0,e.next=27;break;case 40:e.next=46;break;case 42:e.prev=42,e.t0=e.catch(25),P=!0,E=e.t0;case 46:if(e.prev=46,e.prev=47,N||null==j.return){e.next=51;break}return e.next=51,j.return();case 51:if(e.prev=51,!P){e.next=54;break}throw E;case 54:return e.finish(51);case 55:return e.finish(46);case 56:if(k.up_sell_variants=s,k.quantitySelect=1,k.min_buy&&(k.quantitySelect=k.min_buy),!_.ZP.listTypeService.includes(k.type)){e.next=62;break}return t(v.Z.setData(m.PX,k)),e.abrupt("return");case 62:if(!k.options){e.next=97;break}T=!0,R=!1,e.prev=65,O=(0,i.Z)(k.options);case 67:return e.next=69,O.next();case 69:return A=e.sent,T=A.done,e.next=73,A.value;case 73:if(C=e.sent,T){e.next=81;break}q={name:(D=C).option_name,option_id:D.option_id,value:D.option_value_value.name,option_value_id:D.option_value_id},Z.push(q);case 78:T=!0,e.next=67;break;case 81:e.next=87;break;case 83:e.prev=83,e.t1=e.catch(65),R=!0,w=e.t1;case 87:if(e.prev=87,e.prev=88,T||null==O.return){e.next=92;break}return e.next=92,O.return();case 92:if(e.prev=92,!R){e.next=95;break}throw w;case 95:return e.finish(92);case 96:return e.finish(87);case 97:return k.optionSelects=Z,t(v.Z.setData(m.PX,k)),t(v.Z.setData(m.qO,!0)),x.Z.hideOverFlow(),e.abrupt("break",105);case 102:o=!0,e.next=11;break;case 105:e.next=111;break;case 107:e.prev=107,e.t2=e.catch(9),u=!0,l=e.t2;case 111:if(e.prev=111,e.prev=112,o||null==d.return){e.next=116;break}return e.next=116,d.return();case 116:if(e.prev=116,!u){e.next=119;break}throw l;case 119:return e.finish(116);case 120:return e.finish(111);case 121:h(n);case 122:case"end":return e.stop()}}),e,null,[[9,107,111,121],[25,42,46,56],[47,,51,55],[65,83,87,97],[88,,92,96],[112,,116,120]])})));return function(t,r){return e.apply(this,arguments)}}();return(0,n.jsx)("div",{className:"container-product-grid",children:a.map((function(e,t){var a=x.Z.parseInt(e.average_point||0),c=f.Z.hasAtLeastOneVariantAvailable(e.variants);return"true"==y.query.isPreview&&(c=!0),(0,n.jsxs)("a",{id:"".concat(k,"-product-").concat(N,"-").concat(t,"-").concat(e.product_id),className:"product-grid-item  product-scroll",onClick:function(){T(e.name,e.product_id)},children:[r&&(0,n.jsx)("div",{className:"star",children:(0,n.jsx)("i",{className:"ldicon-none-colored-star-8"})}),!c&&(0,n.jsx)("div",{className:"product-sold-out-frame",children:(0,n.jsx)("div",{className:"content",children:(0,l.t)("MSG.SOLD_OUT")})}),(0,n.jsx)("div",{className:"thumb",children:(0,n.jsx)("img",{className:"product-image",src:x.Z.getImageUrl(e.src,!1,"s500"),alt:"product-image",onError:function(e){var t=e.currentTarget;t.onerror=null,t.src="".concat(x.Z.getImageUrl(""))}})}),(0,n.jsxs)("div",{className:"product-info",children:[(0,n.jsx)("div",{className:"product-name",children:e.name}),(a>0||e.quantity_sold>0)&&(0,n.jsx)("div",{className:"product-review flex-center-between mt-8",children:(0,n.jsxs)("div",{className:"flex-center-between",children:[a>0&&(0,n.jsxs)("div",{className:"mr-8 flex-center",children:[(0,n.jsx)("i",{className:"ladiui ldicon-colored-star icon-16 mr-4 mb-2"}),(0,n.jsxs)("span",{className:"average-point",children:[" ".concat(e.average_point)," "]})]}),e.quantity_sold>0&&(0,n.jsxs)("span",{className:"products-sold",children:["".concat((0,l.t)("PAGE_STORE.HEADER.SOLD_LABLE"))," ",x.Z.convertNumbertoString(e.quantity_sold)]})]})}),(0,n.jsxs)("div",{className:"laidui flex-center-between",children:[(0,n.jsxs)("div",{className:"product-price",children:[(0,n.jsx)("div",{className:"mr-6",children:e.min_price>0?x.Z.formatMoneyPostFix(e.min_price,g.currency_symbol):(0,l.t)("MSG.FREE")}),e.min_compare>0&&(0,n.jsx)("div",{className:"product-price-compare",children:x.Z.formatMoneyPostFix(e.min_compare,g.currency_symbol)})]}),c&&(0,n.jsx)("i",{className:"ldicon-circle-add",onClick:function(t){e.type==_.ZP.PRODUCT_TYPE.SERVICE?T(e.name,e.product_id):R(t,e)}})]})]})]},t)}))})}},19206:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(85893),a=r(809),c=r.n(a),s=r(92447),i=r(80711),o=r(67294),u=r(11163),l=r(49422),d=r(96365),p=r(96630),v=r(96463),m=r(65004),x=r(56732),f=r(65863),_=r(86644);function h(e){var t=e.is_show_star,r=e.products,a=e.setProductInfo,h=e.screen,b=void 0===h?"":h,k=e.indexP,Z=void 0===k?"":k,N=(0,d.I0)(),y=(0,u.useRouter)(),P=(0,d.v9)((function(e){return e.storeReducer})),E=(0,d.v9)((function(e){return e.defaultReducer})),j=(0,o.useMemo)((function(){return E.pathType||_.ZP.PATH_TYPE.PAGE_STORE}),[E.pathType]),S=(0,o.useMemo)((function(){return E.pathRoot||""}),[E.pathRoot]),g=(0,o.useMemo)((function(){return P.info_store||{}}),[P.info_store]),T=function(e,t){N(p.Z.setShowLoading(!0));var r="".concat(S,"/detail/").concat(x.Z.getSlug(e,t)),n=y.query;j==_.ZP.PATH_TYPE.PRODUCT&&(r="/".concat(t)),delete n.page_checkout_path,delete n.keyword,delete n.product,delete n.cart_token,delete n.checkout_token,delete n.product,y.push({pathname:r,query:n})},R=function(){var e=(0,s.Z)(c().mark((function e(t,r){var n,s,o,u,l,d,p,x,h,b,k,Z,y,P,E,j,S,g,T,R,w,O,A,C;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),t.stopPropagation(),!a){e.next=119;break}n=r.variants,s=r.up_sell_variants,o=!0,u=!1,e.prev=7,d=(0,i.Z)(n);case 9:return e.next=11,d.next();case 11:return p=e.sent,o=p.done,e.next=15,p.value;case 15:if(x=e.sent,o){e.next=102;break}if(h=x,!f.Z.isAvailable(h)){e.next=99;break}b=[],h.optionSelects=[],k=!0,Z=!1,e.prev=23,P=(0,i.Z)(s);case 25:return e.next=27,P.next();case 27:return E=e.sent,k=E.done,e.next=31,E.value;case 31:if(j=e.sent,k){e.next=38;break}j.isCheck=!1;case 35:k=!0,e.next=25;break;case 38:e.next=44;break;case 40:e.prev=40,e.t0=e.catch(23),Z=!0,y=e.t0;case 44:if(e.prev=44,e.prev=45,k||null==P.return){e.next=49;break}return e.next=49,P.return();case 49:if(e.prev=49,!Z){e.next=52;break}throw y;case 52:return e.finish(49);case 53:return e.finish(44);case 54:if(h.up_sell_variants=s,h.quantitySelect=1,h.min_buy&&(h.quantitySelect=h.min_buy),!_.ZP.listTypeService.includes(h.type)){e.next=60;break}return N(v.Z.setData(m.PX,h)),e.abrupt("return");case 60:if(!h.options){e.next=95;break}S=!0,g=!1,e.prev=63,R=(0,i.Z)(h.options);case 65:return e.next=67,R.next();case 67:return w=e.sent,S=w.done,e.next=71,w.value;case 71:if(O=e.sent,S){e.next=79;break}C={name:(A=O).option_name,option_id:A.option_id,value:A.option_value_value.name,option_value_id:A.option_value_id},b.push(C);case 76:S=!0,e.next=65;break;case 79:e.next=85;break;case 81:e.prev=81,e.t1=e.catch(63),g=!0,T=e.t1;case 85:if(e.prev=85,e.prev=86,S||null==R.return){e.next=90;break}return e.next=90,R.return();case 90:if(e.prev=90,!g){e.next=93;break}throw T;case 93:return e.finish(90);case 94:return e.finish(85);case 95:return h.optionSelects=b,N(v.Z.setData(m.PX,h)),N(v.Z.setData(m.qO,!0)),e.abrupt("break",102);case 99:o=!0,e.next=9;break;case 102:e.next=108;break;case 104:e.prev=104,e.t2=e.catch(7),u=!0,l=e.t2;case 108:if(e.prev=108,e.prev=109,o||null==d.return){e.next=113;break}return e.next=113,d.return();case 113:if(e.prev=113,!u){e.next=116;break}throw l;case 116:return e.finish(113);case 117:return e.finish(108);case 118:a(r);case 119:case"end":return e.stop()}}),e,null,[[7,104,108,118],[23,40,44,54],[45,,49,53],[63,81,85,95],[86,,90,94],[109,,113,117]])})));return function(t,r){return e.apply(this,arguments)}}();return(0,n.jsx)("div",{className:"container-product-list",children:r.map((function(e,r){var a=x.Z.parseInt(e.average_point||0),c=f.Z.hasAtLeastOneVariantAvailable(e.variants);return(0,n.jsxs)("div",{id:"".concat(b,"-product-").concat(Z,"-").concat(r,"-").concat(e.product_id),className:"product-list-item product-scroll",onClick:function(){var t=_.ZP.COOKIE.LAST_ID_SCREEN_HOME;b==_.ZP.SCREEN_ID.SEARCH&&(t=_.ZP.COOKIE.LAST_ID_SCREEN_SEARCH),x.Z.setCookie(t,"".concat(b,"-product-").concat(Z,"-").concat(r,"-").concat(e.product_id)),T(e.name,e.product_id)},children:[t&&(0,n.jsx)("div",{className:"star",children:(0,n.jsx)("i",{className:"ldicon-none-colored-star-8"})}),!c&&(0,n.jsx)("div",{className:"product-sold-out-frame",children:(0,n.jsx)("div",{className:"content",children:(0,l.t)("MSG.SOLD_OUT")})}),(0,n.jsx)("img",{className:"product-image",src:x.Z.getImageUrl(e.src,!1,"s500"),alt:"product-image",onError:function(e){var t=e.currentTarget;t.onerror=null,t.src="".concat(x.Z.getImageUrl(""))}}),(0,n.jsxs)("div",{className:"product-info",children:[(0,n.jsx)("div",{className:"product-name",children:e.name}),(0,n.jsxs)("div",{className:"mt-4 flex-center reviews-sold",children:[a>0&&(0,n.jsxs)("div",{className:"mr-8 flex-center",children:[(0,n.jsx)("i",{className:"ldicon-colored-star-10 mr-4"}),(0,n.jsxs)("span",{className:"average-point",children:[" ".concat(e.average_point)," "]})]}),void 0!=e.quantity_sold&&e.quantity_sold>0&&(0,n.jsxs)("span",{className:"products-sold",children:["".concat((0,l.t)("PAGE_STORE.HEADER.SOLD_LABLE")," "),x.Z.convertNumbertoString(e.quantity_sold)]})]}),(0,n.jsxs)("div",{className:"product-review flex-center-between mt-8",children:[(0,n.jsxs)("div",{className:"product-price flex-center",children:[(0,n.jsx)("div",{className:"mr-6",children:e.min_price>0?x.Z.formatMoneyPostFix(e.min_price,g.currency_symbol):(0,l.t)("MSG.FREE")}),e.min_compare>0&&(0,n.jsx)("div",{className:"product-price-compare",children:x.Z.formatMoneyPostFix(e.min_compare,g.currency_symbol)})]}),f.Z.hasAtLeastOneVariantAvailable(e.variants)&&(0,n.jsx)("i",{className:"ldicon-circle-add",onClick:function(t){e.type==_.ZP.PRODUCT_TYPE.SERVICE?T(e.name,e.product_id):R(t,e)}})]})]})]},r)}))})}}}]);