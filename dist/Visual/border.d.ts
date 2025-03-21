declare const normalizeBorder: (border: UnnormalizedBorderProp | undefined) => NormalizedBorderProp | undefined;
declare const normalizeParentBorder: (border: UnnormalizedParentBorderProp | undefined) => NormalizedParentBorderProp;
declare const normalizeChildBorder: (child: unknown, parent: NormalizedParentBorderProp) => NormalizedChildBorderProp;
declare const normalizeBorderRadius: (radius: UnnormalizedRadiusProp | undefined) => NormalizedRadiusProp | undefined;
declare const compileBorder: (border: NormalizedBorderProp | undefined) => string;
declare const compileBorderWidth: (border: NormalizedBorderProp | undefined) => string;
declare const compileBorderStyle: (border: NormalizedBorderProp | undefined) => string;
declare const compileBorderColor: (border: NormalizedBorderProp | undefined) => string;
declare const compileBorderRadius: (border: NormalizedBorderProp | undefined) => string;
declare const compileBorderCollapse: (border: NormalizedBorderProp | undefined) => string;
type UnnormalizedBorderProp = NormalizedBorderProp | object | string | number;
type NormalizedBorderProp = {
    top?: NormalizedChildBorderProp;
    bottom?: NormalizedChildBorderProp;
    left?: NormalizedChildBorderProp;
    right?: NormalizedChildBorderProp;
    radius?: NormalizedRadiusProp;
    fix?: boolean;
    collapse?: boolean;
};
type UnnormalizedParentBorderProp = object | string | number;
type NormalizedParentBorderProp = NormalizedChildBorderProp;
type NormalizedChildBorderProp = {
    width?: number;
    style?: string;
    color?: string;
};
type UnnormalizedRadiusProp = NormalizedRadiusProp | string | number;
type NormalizedRadiusProp = {
    top?: {
        left?: number;
        right?: number;
    };
    bottom?: {
        left?: number;
        right?: number;
    };
} | string;
export type { UnnormalizedBorderProp, NormalizedBorderProp, UnnormalizedParentBorderProp, NormalizedParentBorderProp };
export { normalizeBorder, normalizeParentBorder, normalizeChildBorder, normalizeBorderRadius, compileBorderWidth, compileBorderStyle, compileBorderColor, compileBorderRadius, compileBorderCollapse, compileBorder };
//# sourceMappingURL=border.d.ts.map