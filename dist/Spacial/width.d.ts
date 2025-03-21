export declare const normalizeWidth: (width?: UnnormalizedWidthProp) => NormalizedWidthProp | undefined;
export declare const compileWidth: (width?: NormalizedWidthProp) => string;
export type UnnormalizedWidthProp = NormalizedWidthProp | string | number;
export type NormalizedWidthProp = {
    def?: WidthValueProp;
    max?: WidthValueProp;
    min?: WidthValueProp;
};
type WidthValueProp = number | string;
export {};
//# sourceMappingURL=width.d.ts.map