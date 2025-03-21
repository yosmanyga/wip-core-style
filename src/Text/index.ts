import type {NormalizedDecorationProp, UnnormalizedDecorationProp} from './decoration'
import {compileDecoration} from './decoration'
import type {NormalizedFontProp, UnnormalizedFontProp} from './font'
import {compileFont} from './font'
import type {NormalizedLineProp, UnnormalizedLineProp} from './line'
import {compileLine} from './line'
import type {NormalizedWhitespaceProp, UnnormalizedWhitespaceProp} from './whitespace'
import {compileWhitespace, normalizeWhitespace} from './whitespace'

export type {
    NormalizedDecorationProp, UnnormalizedDecorationProp,
    NormalizedFontProp, UnnormalizedFontProp,
    NormalizedLineProp, UnnormalizedLineProp,
    NormalizedWhitespaceProp, UnnormalizedWhitespaceProp
}

export type TextUnnormalizedProps = {
    decoration?: UnnormalizedDecorationProp,
    font?: UnnormalizedFontProp,
    line?: UnnormalizedLineProp,
    whitespace?: UnnormalizedWhitespaceProp,
}

export type TextNormalizedProps = {
    decoration?: NormalizedDecorationProp,
    font?: NormalizedFontProp,
    line?: NormalizedLineProp
    whitespace?: NormalizedWhitespaceProp
}

export const textFields: Array<string> = [
    'decoration',
    'font',
    'line',
    'whitespace'
]

export default {
    compileDecoration,
    compileFont,
    compileLine,
    normalizeWhitespace, compileWhitespace
}
