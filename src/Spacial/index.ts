import type {NormalizedAlignProp, UnnormalizedAlignProp} from './align'
import {compileAlign} from './align'
import type {NormalizedAnimationProp, UnnormalizedAnimationProp} from './animation'
import {compileAnimation} from "./animation";
import type {NormalizedBoxProp, UnnormalizedBoxProp} from './box'
import {compileBox} from './box'
import type {NormalizedDisplayProp, UnnormalizedDisplayProp} from './display'
import {compileDisplay} from './display'
import type {NormalizedFlexProp, UnnormalizedFlexProp} from './flex'
import {compileFlex, normalizeFlex} from './flex'
import type {NormalizedFlowProp, UnnormalizedFlowProp} from './flow'
import {compileFlow, normalizeFlow} from './flow'
import type {NormalizedGapProp, UnnormalizedGapProp} from './gap'
import {compileGap} from './gap'
import type {NormalizedGridProp, UnnormalizedGridProp} from './grid'
import {compileGrid} from './grid'
import type {NormalizedHeightProp, UnnormalizedHeightProp} from './height'
import {compileHeight, normalizeHeight} from './height'
import type {NormalizedMarginProp, UnnormalizedMarginProp} from './margin'
import {compileMargin, normalizeMargin} from './margin'
import type {NormalizedPaddingProp, UnnormalizedPaddingProp} from './padding'
import {compilePadding, normalizePadding} from './padding'
import type {NormalizedPositionProp, UnnormalizedPositionProp} from './position'
import {compilePosition, normalizePosition} from './position'
import type {NormalizedTableProp, UnnormalizedTableProp} from './table'
import {compileTable} from './table'
import type {NormalizedWidthProp, UnnormalizedWidthProp} from './width'
import {compileWidth, normalizeWidth} from './width'
import type {NormalizedZProp, UnnormalizedZProp} from './z'
import {compileZ} from './z'

export type {
    NormalizedAlignProp, UnnormalizedAlignProp,
    NormalizedAnimationProp, UnnormalizedAnimationProp,
    NormalizedBoxProp, UnnormalizedBoxProp,
    NormalizedDisplayProp, UnnormalizedDisplayProp,
    NormalizedFlexProp, UnnormalizedFlexProp,
    NormalizedFlowProp, UnnormalizedFlowProp,
    NormalizedGapProp, UnnormalizedGapProp,
    NormalizedGridProp, UnnormalizedGridProp,
    NormalizedHeightProp, UnnormalizedHeightProp,
    NormalizedMarginProp, UnnormalizedMarginProp,
    NormalizedPaddingProp, UnnormalizedPaddingProp,
    NormalizedPositionProp, UnnormalizedPositionProp,
    NormalizedTableProp, UnnormalizedTableProp,
    NormalizedWidthProp, UnnormalizedWidthProp,
    NormalizedZProp, UnnormalizedZProp,
}

export type SpacialUnnormalizedProps = {
    align?: UnnormalizedAlignProp,
    animation?: UnnormalizedAnimationProp,
    box?: UnnormalizedBoxProp,
    display?: UnnormalizedDisplayProp,
    flex?: UnnormalizedFlexProp,
    flow?: UnnormalizedFlowProp,
    gap?: UnnormalizedGapProp,
    grid?: UnnormalizedGridProp,
    height?: UnnormalizedHeightProp,
    margin?: UnnormalizedMarginProp,
    padding?: UnnormalizedPaddingProp,
    position?: UnnormalizedPositionProp,
    table?: UnnormalizedTableProp,
    width?: UnnormalizedWidthProp,
    z?: UnnormalizedZProp,
}

export type SpacialNormalizedProps = {
    align?: NormalizedAlignProp,
    animation?: NormalizedAnimationProp
    box?: NormalizedBoxProp,
    display?: NormalizedDisplayProp,
    flex?: NormalizedFlexProp,
    flow?: NormalizedFlowProp,
    gap?: NormalizedGapProp,
    grid?: NormalizedGridProp,
    height?: NormalizedHeightProp,
    margin?: NormalizedMarginProp,
    padding?: NormalizedPaddingProp,
    position?: NormalizedPositionProp,
    table?: NormalizedTableProp,
    width?: NormalizedWidthProp,
    z?: NormalizedZProp,
}

export const spacialFields: Array<string> = [
    'align',
    'animation',
    'box',
    'display',
    'flex',
    'flow',
    'gap',
    'grid',
    'height',
    'margin',
    'padding',
    'position',
    'table',
    'width',
    'z'
]

export default {
    compileAlign,
    compileAnimation,
    compileBox,
    compileDisplay,
    normalizeFlex, compileFlex,
    normalizeFlow, compileFlow,
    compileGap,
    compileGrid,
    normalizeHeight, compileHeight,
    normalizeMargin, compileMargin,
    normalizePadding, compilePadding,
    normalizePosition, compilePosition,
    compileTable,
    normalizeWidth, compileWidth,
    compileZ
}
