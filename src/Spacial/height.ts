export const normalizeHeight = (
    height?: UnnormalizedHeightProp
): NormalizedHeightProp | undefined => {
    if (typeof height === 'undefined' || height === null) {
        return height
    }

    if (
        typeof height === 'number'
        || typeof height === 'string'
    ) {
        height = {
            def: height
        }
    }

    return height
}

export const compileHeight = (
    height?: NormalizedHeightProp
): string => {
    if (typeof height === 'undefined' || height == null) {
        return ''
    }

    const compilation: string[] = []

    if (typeof height.def !== 'undefined') {
        const value = typeof height.def === 'number'
            ? `${height.def}px`
            : `${height.def}`

        compilation.push(`height: ${value};`)
    }

    if (typeof height.min !== 'undefined') {
        const value = typeof height.min === 'number'
            ? `${height.min}px`
            : `${height.min}`

        compilation.push(`min-height: ${value};`)
    }

    if (typeof height.max !== 'undefined') {
        const value = typeof height.max === 'number'
            ? `${height.max}px`
            : `${height.max}`

        compilation.push(`max-height: ${value};`)
    }

    return compilation.join('')
}

export type UnnormalizedHeightProp = NormalizedHeightProp | string | number

export type NormalizedHeightProp = {
    def?: HeightValueProp,
    max?: HeightValueProp,
    min?: HeightValueProp
}

type HeightValueProp = string | number
