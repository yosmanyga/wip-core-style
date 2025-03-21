import type { NormalizedBackgroundProp, UnnormalizedBackgroundProp } from './background';
import type { NormalizedBorderProp, UnnormalizedBorderProp, NormalizedParentBorderProp, UnnormalizedParentBorderProp } from './border';
import type { NormalizedColorProp, UnnormalizedColorProp } from './color';
import type { NormalizedFillProp, UnnormalizedFillProp } from './fill';
import type { NormalizedFilterProp, UnnormalizedFilterProp } from './filter';
import type { NormalizedFitProp, UnnormalizedFitProp } from './fit';
import type { NormalizedOpacityProp, UnnormalizedOpacityProp } from './opacity';
import type { NormalizedOverflowProp, UnnormalizedOverflowProp } from './overflow';
import type { NormalizedRatioProp, UnnormalizedRatioProp } from './ratio';
import type { NormalizedScrollProp, UnnormalizedScrollProp } from './scroll';
import type { NormalizedShadowProp, UnnormalizedShadowProp } from './shadow';
import type { NormalizedTransformProp, UnnormalizedTransformProp } from './transform';
import type { NormalizedTransitionProp, UnnormalizedTransitionProp } from './transition';
import type { NormalizedVisibilityProp, UnnormalizedVisibilityProp } from './visibility';
import type { NormalizedWrapProp, UnnormalizedWrapProp } from './wrap';
export type { NormalizedBackgroundProp, UnnormalizedBackgroundProp, NormalizedBorderProp, UnnormalizedBorderProp, NormalizedParentBorderProp, UnnormalizedParentBorderProp, NormalizedColorProp, UnnormalizedColorProp, NormalizedFillProp, UnnormalizedFillProp, NormalizedFilterProp, UnnormalizedFilterProp, NormalizedFitProp, UnnormalizedFitProp, NormalizedOpacityProp, UnnormalizedOpacityProp, NormalizedOverflowProp, UnnormalizedOverflowProp, NormalizedRatioProp, UnnormalizedRatioProp, NormalizedScrollProp, UnnormalizedScrollProp, NormalizedShadowProp, UnnormalizedShadowProp, NormalizedTransformProp, UnnormalizedTransformProp, NormalizedTransitionProp, UnnormalizedTransitionProp, NormalizedVisibilityProp, UnnormalizedVisibilityProp, NormalizedWrapProp, UnnormalizedWrapProp };
export type VisualUnnormalizedProps = {
    background?: UnnormalizedBackgroundProp;
    border?: UnnormalizedBorderProp;
    color?: UnnormalizedColorProp;
    fill?: UnnormalizedFillProp;
    filter?: UnnormalizedFilterProp;
    fit?: UnnormalizedFitProp;
    opacity?: UnnormalizedOpacityProp;
    overflow?: UnnormalizedOverflowProp;
    ratio?: UnnormalizedRatioProp;
    scroll?: UnnormalizedScrollProp;
    shadow?: UnnormalizedShadowProp;
    transform?: UnnormalizedTransformProp;
    transition?: UnnormalizedTransitionProp;
    visibility?: UnnormalizedVisibilityProp;
    wrap?: UnnormalizedWrapProp;
};
export type VisualNormalizedProps = {
    background?: NormalizedBackgroundProp;
    border?: NormalizedBorderProp;
    color?: NormalizedColorProp;
    fill?: NormalizedFillProp;
    filter?: NormalizedFilterProp;
    fit?: NormalizedFitProp;
    opacity?: NormalizedOpacityProp;
    overflow?: NormalizedOverflowProp;
    ratio?: NormalizedRatioProp;
    scroll?: NormalizedScrollProp;
    shadow?: NormalizedShadowProp;
    transform?: NormalizedTransformProp;
    transition?: NormalizedTransitionProp;
    visibility?: NormalizedVisibilityProp;
    wrap?: NormalizedWrapProp;
};
export declare const visualFields: Array<string>;
declare const _default: {
    normalizeBackground: (background: UnnormalizedBackgroundProp | undefined) => NormalizedBackgroundProp | undefined;
    compileBackground: (background?: NormalizedBackgroundProp) => string;
    normalizeBorder: (border: UnnormalizedBorderProp | undefined) => NormalizedBorderProp | undefined;
    normalizeParentBorder: (border: UnnormalizedParentBorderProp | undefined) => NormalizedParentBorderProp;
    normalizeChildBorder: (child: unknown, parent: NormalizedParentBorderProp) => {
        width?: number;
        style?: string;
        color?: string;
    };
    normalizeBorderRadius: (radius: (number | (string | {
        top?: {
            left?: number;
            right?: number;
        };
        bottom?: {
            left?: number;
            right?: number;
        };
    })) | undefined) => (string | {
        top?: {
            left?: number;
            right?: number;
        };
        bottom?: {
            left?: number;
            right?: number;
        };
    }) | undefined;
    compileBorderWidth: (border: NormalizedBorderProp | undefined) => string;
    compileBorderStyle: (border: NormalizedBorderProp | undefined) => string;
    compileBorderColor: (border: NormalizedBorderProp | undefined) => string;
    compileBorderRadius: (border: NormalizedBorderProp | undefined) => string;
    compileBorderCollapse: (border: NormalizedBorderProp | undefined) => string;
    compileBorder: (border: NormalizedBorderProp | undefined) => string;
    compileColor: (color: NormalizedColorProp | undefined) => string;
    compileFill: (fill?: NormalizedFillProp) => string;
    compileFilter: (filter?: NormalizedFilterProp) => string;
    compileFit: (fit?: NormalizedFitProp) => string;
    compileOpacity: (opacity?: NormalizedOpacityProp) => string;
    compileOverflow: (overflow?: NormalizedOverflowProp) => string;
    compileRatio: (ratio?: NormalizedRatioProp) => string;
    compileScroll: (scroll?: NormalizedScrollProp) => string;
    compileShadow: (shadow?: NormalizedShadowProp) => string;
    compileTransform: (transform?: NormalizedTransformProp) => string;
    compileTransition: (transition?: NormalizedTransitionProp) => string;
    compileVisibility: (visibility?: NormalizedVisibilityProp) => string;
    compileWrap: (wrap?: NormalizedWrapProp) => string;
};
export default _default;
//# sourceMappingURL=index.d.ts.map