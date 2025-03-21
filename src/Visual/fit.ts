export const compileFit = (
    fit?: NormalizedFitProp
): string => {
    if (typeof fit === 'undefined' || fit == null) {
        return ''
    }

    return `object-fit: ${fit};`
}

export type UnnormalizedFitProp = NormalizedFitProp

export type NormalizedFitProp = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
