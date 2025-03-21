import type {NormalizedBackgroundProp, UnnormalizedBackgroundProp} from './background'
import {compileBackground, normalizeBackground} from './background'
import type {NormalizedBorderProp, UnnormalizedBorderProp, NormalizedParentBorderProp, UnnormalizedParentBorderProp} from './border'
import {
    compileBorder,
    compileBorderCollapse,
    compileBorderColor,
    compileBorderRadius,
    compileBorderStyle,
    compileBorderWidth,
    normalizeBorder,
    normalizeBorderRadius,
    normalizeChildBorder,
    normalizeParentBorder,
} from './border'
import type {NormalizedColorProp, UnnormalizedColorProp} from './color'
import {compileColor} from './color'
import type {NormalizedFillProp, UnnormalizedFillProp} from './fill'
import {compileFill} from './fill'
import type {NormalizedFilterProp, UnnormalizedFilterProp} from './filter'
import {compileFilter} from './filter'
import type {NormalizedFitProp, UnnormalizedFitProp} from './fit'
import {compileFit} from './fit'
import type {NormalizedOpacityProp, UnnormalizedOpacityProp} from './opacity'
import {compileOpacity} from './opacity'
import type {NormalizedOverflowProp, UnnormalizedOverflowProp} from './overflow'
import {compileOverflow} from './overflow'
import type {NormalizedRatioProp, UnnormalizedRatioProp} from './ratio'
import {compileRatio} from './ratio'
import type {NormalizedScrollProp, UnnormalizedScrollProp} from './scroll'
import {compileScroll} from './scroll'
import type {NormalizedShadowProp, UnnormalizedShadowProp} from './shadow'
import {compileShadow} from './shadow'
import type {NormalizedTransformProp, UnnormalizedTransformProp} from './transform'
import {compileTransform} from './transform'
import type {NormalizedTransitionProp, UnnormalizedTransitionProp} from './transition'
import {compileTransition} from './transition'
import type {NormalizedVisibilityProp, UnnormalizedVisibilityProp} from './visibility'
import {compileVisibility} from './visibility'
import type {NormalizedWrapProp, UnnormalizedWrapProp} from './wrap'
import {compileWrap} from './wrap'

export type {
    NormalizedBackgroundProp, UnnormalizedBackgroundProp,
    NormalizedBorderProp, UnnormalizedBorderProp, NormalizedParentBorderProp, UnnormalizedParentBorderProp,
    NormalizedColorProp, UnnormalizedColorProp,
    NormalizedFillProp, UnnormalizedFillProp,
    NormalizedFilterProp, UnnormalizedFilterProp,
    NormalizedFitProp, UnnormalizedFitProp,
    NormalizedOpacityProp, UnnormalizedOpacityProp,
    NormalizedOverflowProp, UnnormalizedOverflowProp,
    NormalizedRatioProp, UnnormalizedRatioProp,
    NormalizedScrollProp, UnnormalizedScrollProp,
    NormalizedShadowProp, UnnormalizedShadowProp,
    NormalizedTransformProp, UnnormalizedTransformProp,
    NormalizedTransitionProp, UnnormalizedTransitionProp,
    NormalizedVisibilityProp, UnnormalizedVisibilityProp,
    NormalizedWrapProp, UnnormalizedWrapProp
}

export type VisualUnnormalizedProps = {
    background?: UnnormalizedBackgroundProp,
    border?: UnnormalizedBorderProp,
    color?: UnnormalizedColorProp,
    fill?: UnnormalizedFillProp,
    filter?: UnnormalizedFilterProp,
    fit?: UnnormalizedFitProp,
    opacity?: UnnormalizedOpacityProp,
    overflow?: UnnormalizedOverflowProp,
    ratio?: UnnormalizedRatioProp,
    scroll?: UnnormalizedScrollProp,
    shadow?: UnnormalizedShadowProp,
    transform?: UnnormalizedTransformProp,
    transition?: UnnormalizedTransitionProp,
    visibility?: UnnormalizedVisibilityProp,
    wrap?: UnnormalizedWrapProp
}

export type VisualNormalizedProps = {
    background?: NormalizedBackgroundProp,
    border?: NormalizedBorderProp,
    color?: NormalizedColorProp,
    fill?: NormalizedFillProp,
    filter?: NormalizedFilterProp,
    fit?: NormalizedFitProp,
    opacity?: NormalizedOpacityProp,
    overflow?: NormalizedOverflowProp,
    ratio?: NormalizedRatioProp,
    scroll?: NormalizedScrollProp,
    shadow?: NormalizedShadowProp,
    transform?: NormalizedTransformProp,
    transition?: NormalizedTransitionProp,
    visibility?: NormalizedVisibilityProp,
    wrap?: NormalizedWrapProp
}

export const visualFields: Array<string> = [
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
]

export default {
    normalizeBackground, compileBackground,
    normalizeBorder,
    normalizeParentBorder,
    normalizeChildBorder,
    normalizeBorderRadius,
    compileBorderWidth,
    compileBorderStyle,
    compileBorderColor,
    compileBorderRadius,
    compileBorderCollapse,
    compileBorder,
    compileColor,
    compileFill,
    compileFilter,
    compileFit,
    compileOpacity,
    compileOverflow,
    compileRatio,
    compileScroll,
    compileShadow,
    compileTransform,
    compileTransition,
    compileVisibility,
    compileWrap
}
