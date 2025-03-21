import type { NormalizedDecorationProp, UnnormalizedDecorationProp } from './decoration';
import type { NormalizedFontProp, UnnormalizedFontProp } from './font';
import type { NormalizedLineProp, UnnormalizedLineProp } from './line';
import type { NormalizedWhitespaceProp, UnnormalizedWhitespaceProp } from './whitespace';
export type { NormalizedDecorationProp, UnnormalizedDecorationProp, NormalizedFontProp, UnnormalizedFontProp, NormalizedLineProp, UnnormalizedLineProp, NormalizedWhitespaceProp, UnnormalizedWhitespaceProp };
export type TextUnnormalizedProps = {
    decoration?: UnnormalizedDecorationProp;
    font?: UnnormalizedFontProp;
    line?: UnnormalizedLineProp;
    whitespace?: UnnormalizedWhitespaceProp;
};
export type TextNormalizedProps = {
    decoration?: NormalizedDecorationProp;
    font?: NormalizedFontProp;
    line?: NormalizedLineProp;
    whitespace?: NormalizedWhitespaceProp;
};
export declare const textFields: Array<string>;
declare const _default: {
    compileDecoration: (decoration?: NormalizedDecorationProp) => string;
    compileFont: (font?: NormalizedFontProp) => string;
    compileLine: (line?: NormalizedLineProp) => string;
    normalizeWhitespace: (whitespace?: UnnormalizedWhitespaceProp) => NormalizedWhitespaceProp | undefined;
    compileWhitespace: (whitespace?: NormalizedWhitespaceProp) => string;
};
export default _default;
//# sourceMappingURL=index.d.ts.map