import type { NormalizedCursorProp, UnnormalizedCursorProp } from './cursor';
export type { NormalizedCursorProp, UnnormalizedCursorProp };
export type InteractUnnormalizedProps = InteractNormalizedProps;
export type InteractNormalizedProps = {
    cursor?: NormalizedCursorProp;
};
export declare const interactFields: Array<string>;
declare const _default: {
    compileCursor: (cursor?: NormalizedCursorProp) => string;
};
export default _default;
//# sourceMappingURL=index.d.ts.map