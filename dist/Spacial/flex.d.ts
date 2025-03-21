export declare const normalizeFlex: (flex?: UnnormalizedFlexProp) => NormalizedFlexProp | undefined;
export declare const compileFlex: (flex?: NormalizedFlexProp) => string;
export type UnnormalizedFlexProp = NormalizedFlexProp | number | boolean;
export type NormalizedFlexProp = {
    grow?: number;
    shrink?: number;
    basis?: string;
};
//# sourceMappingURL=flex.d.ts.map