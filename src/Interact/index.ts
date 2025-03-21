import type {NormalizedCursorProp, UnnormalizedCursorProp} from './cursor'
import {compileCursor} from './cursor'

export type {
    NormalizedCursorProp, UnnormalizedCursorProp
}

export type InteractUnnormalizedProps = InteractNormalizedProps

export type InteractNormalizedProps = {
    cursor?: NormalizedCursorProp
}

export const interactFields: Array<string> = [
    'cursor'
]

export default {
    compileCursor
}
