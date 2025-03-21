export const compileBox = (
    box?: NormalizedBoxProp
): string => {
    if (typeof box === 'undefined' || box === null) {
        return ''
    }

    return `box-sizing: ${box};`
}

export type UnnormalizedBoxProp = NormalizedBoxProp

export type NormalizedBoxProp = 'content-box' | 'border-box'
