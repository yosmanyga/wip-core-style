export declare const normalizePosition: (position?: UnnormalizedPositionProp) => NormalizedPositionProp | undefined;
export declare const compilePosition: (position?: NormalizedPositionProp) => string;
export type UnnormalizedPositionProp = NormalizedPositionProp | TypePositionType;
export type NormalizedPositionProp = {
    type?: 'absolute' | 'relative' | 'fixed';
    top?: number | string;
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
};
type TypePositionType = 'absolute' | 'relative' | 'fixed';
export {};
//# sourceMappingURL=position.d.ts.map