export const compileOverflow = (
    overflow?: NormalizedOverflowProp
): string => {
    if (typeof overflow === 'undefined' || overflow == null) {
        return ''
    }

    return `overflow: ${overflow};`
}

export type UnnormalizedOverflowProp = NormalizedOverflowProp

export type NormalizedOverflowProp = string
