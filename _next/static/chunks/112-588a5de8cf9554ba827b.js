(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[112],{20826:function(e,t,n){"use strict";n.d(t,{Z:function(){return I}});var r=n(85893),c=n(809),a=n.n(c),s=n(92447),i=n(26265),o=n(80711),u=n(67294),l=n(11163),d=n(49422),p=n(96365),_=n(46066),v=n(96630),f=n(96463),N=n(65004),x=n(56732),T=n(65863),h=n(86644);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function I(e){e.title;var t=e.discounts,n=e.index,c=e.productInfo,i=void 0===c?{}:c,m=i.variants||[],I=i.up_sell_variants||[],E=(0,p.v9)((function(e){return e.storeReducer})),b=(0,p.v9)((function(e){return e.defaultReducer})),P=(0,u.useMemo)((function(){return b.pathRoot||""}),[b.pathRoot]),S=(0,u.useMemo)((function(){return b.pathType||""}),[b.pathType]),R=(0,u.useMemo)((function(){return E.productVariantSelect||{}}),[E.productVariantSelect]),C=(0,u.useMemo)((function(){return E.info_store||{}}),[E.info_store]),j=(0,l.useRouter)(),k=(0,p.I0)(),D={dots:!1,infinite:!1,slidesToShow:1,slidesToScroll:1,autoplay:!1,centerMode:!1,centerPadding:"40px 0px 0px",nextArrow:(0,r.jsx)(r.Fragment,{}),prevArrow:(0,r.jsx)(r.Fragment,{})};t.length>=2&&(D=O(O({},D),{},{infinite:!0,centerMode:!0}));var A=function(){var e=(0,s.Z)(a().mark((function e(t,n){var r,c,s,i,u,l,d,p,_,x,O,E,b,C,D,A,M,U,Z,w,y,g,L,Y,F,Q=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=Q.length>2&&void 0!==Q[2]?Q[2]:-1,t.preventDefault(),{},c=-1,S&&(!S||S==h.ZP.PATH_TYPE.PRODUCT)){e.next=9;break}k(v.Z.setShowLoading(!0)),j.push("".concat(P,"/product-search?discountId=").concat(n.discount_id,"&discountCode=").concat(n.code)),e.next=128;break;case 9:if(s={discount_code:n.code||"",discount_price:n.value||""},k(f.Z.setData(N.oI,s)),R&&R.product_variant_id&&T.Z.isAvailable(R)&&R.product_id==m[0].product_id){e.next=127;break}i=!0,u=!1,e.prev=14,d=(0,o.Z)(m);case 16:return e.next=18,d.next();case 18:return p=e.sent,i=p.done,e.next=22,p.value;case 22:if(_=e.sent,i){e.next=111;break}if(x=_,c+=1,!T.Z.isAvailable(x)){e.next=108;break}O=[],x.optionSelects=[],E=!0,b=!1,e.prev=31,D=(0,o.Z)(I);case 33:return e.next=35,D.next();case 35:return A=e.sent,E=A.done,e.next=39,A.value;case 39:if(M=e.sent,E){e.next=46;break}M.isCheck=!1;case 43:E=!0,e.next=33;break;case 46:e.next=52;break;case 48:e.prev=48,e.t0=e.catch(31),b=!0,C=e.t0;case 52:if(e.prev=52,e.prev=53,E||null==D.return){e.next=57;break}return e.next=57,D.return();case 57:if(e.prev=57,!b){e.next=60;break}throw C;case 60:return e.finish(57);case 61:return e.finish(52);case 62:if(x.up_sell_variants=I,x.quantitySelect=1,x.min_buy&&(x.quantitySelect=x.min_buy),!h.ZP.listTypeService.includes(x.type)){e.next=68;break}return k(f.Z.setData(N.PX,x)),e.abrupt("return");case 68:if(!x.options){e.next=103;break}U=!0,Z=!1,e.prev=71,y=(0,o.Z)(x.options);case 73:return e.next=75,y.next();case 75:return g=e.sent,U=g.done,e.next=79,g.value;case 79:if(L=e.sent,U){e.next=87;break}F={name:(Y=L).option_name,option_id:Y.option_id,value:Y.option_value_value.name,option_value_id:Y.option_value_id},O.push(F);case 84:U=!0,e.next=73;break;case 87:e.next=93;break;case 89:e.prev=89,e.t1=e.catch(71),Z=!0,w=e.t1;case 93:if(e.prev=93,e.prev=94,U||null==y.return){e.next=98;break}return e.next=98,y.return();case 98:if(e.prev=98,!Z){e.next=101;break}throw w;case 101:return e.finish(98);case 102:return e.finish(93);case 103:if(x.optionSelects=O,-1!=r&&r!=c){e.next=108;break}return x,k(f.Z.setData(N.PX,x)),e.abrupt("break",111);case 108:i=!0,e.next=16;break;case 111:e.next=117;break;case 113:e.prev=113,e.t2=e.catch(14),u=!0,l=e.t2;case 117:if(e.prev=117,e.prev=118,i||null==d.return){e.next=122;break}return e.next=122,d.return();case 122:if(e.prev=122,!u){e.next=125;break}throw l;case 125:return e.finish(122);case 126:return e.finish(117);case 127:k(f.Z.setData(N.qO,!0));case 128:case"end":return e.stop()}}),e,null,[[14,113,117,127],[31,48,52,62],[53,,57,61],[71,89,93,103],[94,,98,102],[118,,122,126]])})));return function(t,n){return e.apply(this,arguments)}}();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"container-discount",id:"home-discount-".concat(n),children:(0,r.jsx)("div",{className:"discount-slider",children:(0,r.jsx)(_.Z,O(O({},D),{},{children:t.map((function(e,t){var n=e.type==h.ZP.DISCOUNT.TYPE.FIXED.value,c=C.currency_symbol||"\u0111",a="";a=e.apply_to[h.ZP.DISCOUNT.APPLY_TO.ENTIRE_ORDER_OR_PRODUCT]?(0,d.t)("DISCOUNTS.APPLY_TO_ENTIRE_ORDER"):e.apply_to[h.ZP.DISCOUNT.APPLY_TO.PRODUCT_TAGS]?(0,d.t)("DISCOUNTS.APPLY_TO_SPECIFIC_TAG",e.apply_to[h.ZP.DISCOUNT.APPLY_TO.PRODUCT_TAGS].length):(0,d.t)("DISCOUNTS.APPLY_TO_SPECIFIC_PRODUCTS");var s,i="".concat((0,d.t)("PAGE_STORE.MAIN_CONTAINER.DISCOUNT.REDUCED")," ").concat(n?x.Z.formatMoneyPostFix(e.value,c):"".concat(parseInt(e.value)," %")," ");return e.min_requirement[h.ZP.DISCOUNT.MIN_REQUIREMENT.MIN_AMOUNT]?s="".concat((0,d.t)("PAGE_STORE.MAIN_CONTAINER.DISCOUNT.MIN_REQUIREMENT_AMOUNT",x.Z.formatMoneyPostFix(e.min_requirement[h.ZP.DISCOUNT.MIN_REQUIREMENT.MIN_AMOUNT],c))):e.min_requirement[h.ZP.DISCOUNT.MIN_REQUIREMENT.MIN_QUANTITY]&&(s="".concat((0,d.t)("DISCOUNTS.OVERVIEW.MIN_REQUIREMENT_QUANTITY",parseInt(e.min_requirement[h.ZP.DISCOUNT.MIN_REQUIREMENT.MIN_QUANTITY])))),(0,r.jsxs)("div",{className:"discount-slider-item",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"coupon-value",children:i}),(0,r.jsx)("span",{className:"coupon-content",children:a||s})]}),(0,r.jsx)("div",{children:(0,r.jsx)("button",{className:"btn-discount ml-8",onClick:function(t){return A(t,e)},children:(0,d.t)("PAGE_STORE.MAIN_CONTAINER.DISCOUNT.BTN_TITLE")})})]},t)}))}))})})})}},73919:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(85893),c=n(67294),a=n(11163),s=n(49422),i=n(96365),o=n(96463),u=n(65004),l=n(56732),d=n(86644);function p(e){(0,a.useRouter)();var t=(0,i.I0)(),n=(0,i.v9)((function(e){return e.storeReducer})),p=(0,c.useMemo)((function(){return n.info_store||{}}),[n.info_store]),_=(0,c.useMemo)((function(){return n.is_show_contact||!1}),[n.is_show_contact]),v=p.interactive_channels||[],f=function(e){e.preventDefault(),t(o.Z.setData(u.yZ,!1)),l.Z.startOverFlow()};return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"store-backdrop ".concat(1==_?"show":"hide"),onClick:f}),(0,r.jsxs)("div",{className:"container-contact-store ".concat(1==_?"show":"","  ").concat(0==_?"hide":""),children:[(0,r.jsxs)("div",{className:"flex-center-between w-100p title",children:[(0,r.jsx)("div",{className:" w-100p text-center",children:(0,s.t)("PAGE_STORE.MAIN_CONTAINER.CONTACT_STORE.TITLE")}),(0,r.jsx)("i",{className:"ldicon-close cursor-pointer",onClick:f})]}),(0,r.jsxs)("div",{className:"flex-center w-100p store-info",children:[(0,r.jsx)("div",{className:"p-8 mr-12",children:(0,r.jsx)("i",{className:"ldicon-marketplacex"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"name",children:p.name}),(0,r.jsx)("p",{className:"address",children:p.address})]})]}),(0,r.jsx)("div",{className:"contact-list",children:v.map((function(e,t){var n=e.url||e.value,c="_blank";switch(e.action){case"Gmail":n="mailto:".concat(e.url||e.value),c="_self";break;case"Phone":n="tel:".concat(e.url||e.value),c="_self"}return(0,r.jsxs)("div",{className:"contact-item cursor-pointer",onClick:function(){n&&window.open(n,c)},children:[(0,r.jsx)("img",{src:d.ZP.LIST_CHANELS[e.action],className:e.url?"cursor-pointer":"",alt:"",width:24,height:24}),(0,r.jsx)("span",{className:"mt-4",children:e.action})]},t)}))})]})]})}}}]);