export const compileFill = (
    fill?: NormalizedFillProp
): string => {
    if (typeof fill === 'undefined' || fill == null) {
        return ''
    }

    return `fill: ${fill};`
}

export type UnnormalizedFillProp = NormalizedFillProp

export type NormalizedFillProp = string
