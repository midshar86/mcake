"use strict";const e=require("../../libs/vue.js"),o=require("../../libs/config/props.js"),p=e.defineMixin({props:{show:{type:Boolean,default:()=>o.defProps.popup.show},overlay:{type:Boolean,default:()=>o.defProps.popup.overlay},mode:{type:String,default:()=>o.defProps.popup.mode},duration:{type:[String,Number],default:()=>o.defProps.popup.duration},closeable:{type:Boolean,default:()=>o.defProps.popup.closeable},overlayStyle:{type:[Object,String],default:()=>o.defProps.popup.overlayStyle},closeOnClickOverlay:{type:Boolean,default:()=>o.defProps.popup.closeOnClickOverlay},zIndex:{type:[String,Number],default:()=>o.defProps.popup.zIndex},safeAreaInsetBottom:{type:Boolean,default:()=>o.defProps.popup.safeAreaInsetBottom},safeAreaInsetTop:{type:Boolean,default:()=>o.defProps.popup.safeAreaInsetTop},closeIconPos:{type:String,default:()=>o.defProps.popup.closeIconPos},round:{type:[Boolean,String,Number],default:()=>o.defProps.popup.round},zoom:{type:Boolean,default:()=>o.defProps.popup.zoom},bgColor:{type:String,default:()=>o.defProps.popup.bgColor},overlayOpacity:{type:[Number,String],default:()=>o.defProps.popup.overlayOpacity}}});exports.props=p;
