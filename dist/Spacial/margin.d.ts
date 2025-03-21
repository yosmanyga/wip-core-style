declare const normalizeMargin: (margin: UnnormalizedMarginProp | undefined) => NormalizedMarginProp | undefined;
declare const compileMargin: (margin: NormalizedMarginProp | undefined) => string;
type UnnormalizedMarginProp = NormalizedMarginProp | number;
type NormalizedMarginProp = {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    raw?: boolean;
} | string;
export type { UnnormalizedMarginProp, NormalizedMarginProp };
export { normalizeMargin, compileMargin };
//# sourceMappingURL=margin.d.ts.map