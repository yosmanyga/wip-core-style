export const compileVisibility = (
    visibility?: NormalizedVisibilityProp
): string => {
    if (typeof visibility === 'undefined' || visibility === null) {
        return ''
    }

    return `visibility: ${visibility};`
}

export type UnnormalizedVisibilityProp = NormalizedVisibilityProp

export type NormalizedVisibilityProp = string
