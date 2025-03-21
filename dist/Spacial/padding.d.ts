export declare const normalizePadding: (padding: UnnormalizedPaddingProp | undefined) => NormalizedPaddingProp | undefined;
export declare const compilePadding: (padding: NormalizedPaddingProp | undefined) => string;
export type UnnormalizedPaddingProp = NormalizedPaddingProp | number | string;
export type NormalizedPaddingProp = {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    raw?: boolean;
} | string;
//# sourceMappingURL=padding.d.ts.map