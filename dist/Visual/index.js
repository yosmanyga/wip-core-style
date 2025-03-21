"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visualFields = void 0;
const background_1 = require("./background");
const border_1 = require("./border");
const color_1 = require("./color");
const fill_1 = require("./fill");
const filter_1 = require("./filter");
const fit_1 = require("./fit");
const opacity_1 = require("./opacity");
const overflow_1 = require("./overflow");
const ratio_1 = require("./ratio");
const scroll_1 = require("./scroll");
const shadow_1 = require("./shadow");
const transform_1 = require("./transform");
const transition_1 = require("./transition");
const visibility_1 = require("./visibility");
const wrap_1 = require("./wrap");
exports.visualFields = [
    'background',
    'border',
    'color',
    'fill',
    'filter',
    'fit',
    'opacity',
    'overflow',
    'ratio',
    'scroll',
    'transform',
    'transition',
    'visibility',
    'wrap'
];
exports.default = {
    normalizeBackground: background_1.normalizeBackground, compileBackground: background_1.compileBackground,
    normalizeBorder: border_1.normalizeBorder,
    normalizeParentBorder: border_1.normalizeParentBorder,
    normalizeChildBorder: border_1.normalizeChildBorder,
    normalizeBorderRadius: border_1.normalizeBorderRadius,
    compileBorderWidth: border_1.compileBorderWidth,
    compileBorderStyle: border_1.compileBorderStyle,
    compileBorderColor: border_1.compileBorderColor,
    compileBorderRadius: border_1.compileBorderRadius,
    compileBorderCollapse: border_1.compileBorderCollapse,
    compileBorder: border_1.compileBorder,
    compileColor: color_1.compileColor,
    compileFill: fill_1.compileFill,
    compileFilter: filter_1.compileFilter,
    compileFit: fit_1.compileFit,
    compileOpacity: opacity_1.compileOpacity,
    compileOverflow: overflow_1.compileOverflow,
    compileRatio: ratio_1.compileRatio,
    compileScroll: scroll_1.compileScroll,
    compileShadow: shadow_1.compileShadow,
    compileTransform: transform_1.compileTransform,
    compileTransition: transition_1.compileTransition,
    compileVisibility: visibility_1.compileVisibility,
    compileWrap: wrap_1.compileWrap
};
