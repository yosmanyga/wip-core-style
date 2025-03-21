export const compileRatio = (
    ratio?: NormalizedRatioProp
): string => {
    if (typeof ratio === 'undefined' || ratio == null) {
        return ''
    }

    return `aspect-ratio: ${ratio};`
}

export type UnnormalizedRatioProp = NormalizedRatioProp

export type NormalizedRatioProp = string
