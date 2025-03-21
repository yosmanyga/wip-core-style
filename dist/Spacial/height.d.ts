export declare const normalizeHeight: (height?: UnnormalizedHeightProp) => NormalizedHeightProp | undefined;
export declare const compileHeight: (height?: NormalizedHeightProp) => string;
export type UnnormalizedHeightProp = NormalizedHeightProp | string | number;
export type NormalizedHeightProp = {
    def?: HeightValueProp;
    max?: HeightValueProp;
    min?: HeightValueProp;
};
type HeightValueProp = string | number;
export {};
//# sourceMappingURL=height.d.ts.map