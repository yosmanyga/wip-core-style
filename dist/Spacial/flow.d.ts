export declare const normalizeFlow: (flow?: UnnormalizedFlowProp) => NormalizedFlowProp | undefined;
export declare const compileFlow: (flow?: NormalizedFlowProp) => string;
export type UnnormalizedFlowProp = NormalizedFlowProp | 'row' | 'row wrap' | 'row nowrap' | 'column';
export type NormalizedFlowProp = {
    direction: DirectionProp;
    wrap: WrapProp;
};
type DirectionProp = 'row' | 'column';
type WrapProp = boolean;
export {};
//# sourceMappingURL=flow.d.ts.map