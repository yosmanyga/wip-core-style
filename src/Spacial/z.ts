export const compileZ = (
    z?: NormalizedZProp,
    important?: boolean
): string => {
    if (typeof z === 'undefined' || z === null) {
        return ''
    }

    return `z-index: ${z}${important ? ' !important' : ''};`
}

export type UnnormalizedZProp = NormalizedZProp

export type NormalizedZProp = number
