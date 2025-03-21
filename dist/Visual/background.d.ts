export declare const normalizeBackground: (background: UnnormalizedBackgroundProp | undefined) => NormalizedBackgroundProp | undefined;
export declare const compileBackground: (background?: NormalizedBackgroundProp) => string;
export type UnnormalizedBackgroundProp = NormalizedBackgroundProp | number | string;
export type NormalizedBackgroundProp = NormalizedBackgroundAsImageProp | NormalizedBackgroundAsColorProp;
type NormalizedBackgroundAsImageProp = {
    image: string | number;
    resize?: string | number;
};
type NormalizedBackgroundAsColorProp = {
    color: string;
};
export {};
//# sourceMappingURL=background.d.ts.map