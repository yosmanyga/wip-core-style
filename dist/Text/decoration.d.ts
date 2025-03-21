export declare const normalizeDecoration: (decoration?: UnnormalizedDecorationProp) => NormalizedDecorationProp | undefined;
export declare const compileDecoration: (decoration?: NormalizedDecorationProp) => string;
export type UnnormalizedDecorationProp = NormalizedDecorationProp;
export type NormalizedDecorationProp = {
    line?: string;
    color?: string;
    style?: string;
    thickness?: string;
} | string;
//# sourceMappingURL=decoration.d.ts.map