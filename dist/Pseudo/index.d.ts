import type { SpacialUnnormalizedProps, SpacialNormalizedProps } from '../Spacial';
import type { TextUnnormalizedProps, TextNormalizedProps } from '../Text';
import type { VisualUnnormalizedProps, VisualNormalizedProps } from '../Visual';
export type PseudoUnnormalizedProps = {
    pseudo?: {
        hover?: {
            color?: VisualUnnormalizedProps['color'];
            fill?: VisualUnnormalizedProps['fill'];
            background?: VisualUnnormalizedProps['background'];
            border?: VisualUnnormalizedProps['border'];
            filter?: VisualUnnormalizedProps['filter'];
            transition?: VisualUnnormalizedProps['transition'];
            decoration?: TextUnnormalizedProps['decoration'];
        };
        empty?: {
            display?: SpacialUnnormalizedProps['display'];
        };
        placeholder?: {
            color?: VisualUnnormalizedProps['color'];
        };
    };
};
export type PseudoNormalizedProps = {
    pseudo?: {
        hover?: {
            color?: VisualNormalizedProps['color'];
            fill?: VisualNormalizedProps['fill'];
            background?: VisualNormalizedProps['background'];
            border?: VisualNormalizedProps['border'];
            filter?: VisualNormalizedProps['filter'];
            transition?: VisualNormalizedProps['transition'];
            decoration?: TextNormalizedProps['decoration'];
        };
        empty?: {
            display?: SpacialNormalizedProps['display'];
        };
        placeholder?: {
            color?: VisualNormalizedProps['color'];
        };
    };
};
export declare const pseudoFields: Array<string>;
declare const _default: {};
export default _default;
//# sourceMappingURL=index.d.ts.map