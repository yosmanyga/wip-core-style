export const compileDisplay = (
    display?: NormalizedDisplayProp
): string => {
    if (typeof display === 'undefined' || display === null) {
        return ''
    }

    return `display: ${display};`
}

export type UnnormalizedDisplayProp = NormalizedDisplayProp

export type NormalizedDisplayProp = string
