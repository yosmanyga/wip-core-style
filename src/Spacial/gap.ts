export const compileGap = (
    gap?: NormalizedGapProp
): string => {
    if (typeof gap === 'undefined' || gap === null) {
        return ''
    }

    return `gap: ${gap}px;`
}

export type UnnormalizedGapProp = NormalizedGapProp

export type NormalizedGapProp = number
