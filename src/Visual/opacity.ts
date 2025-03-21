export const compileOpacity = (
    opacity?: NormalizedOpacityProp
): string => {
    if (typeof opacity === 'undefined' || opacity == null) {
        return ''
    }

    return `opacity: ${opacity};`
}

export type UnnormalizedOpacityProp = NormalizedOpacityProp

export type NormalizedOpacityProp = number
