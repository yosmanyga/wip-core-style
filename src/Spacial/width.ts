export const normalizeWidth = (
    width?: UnnormalizedWidthProp
): NormalizedWidthProp | undefined => {
    if (typeof width === 'undefined') {
        return width
    }

    // Already normalized?
    if (typeof width === 'object') {
        return width;
    }

    if (
        typeof width === 'number'
        || typeof width === 'string'
    ) {
        return {
            def: width
        }
    }

    throw new Error(`Width type not recognized: ${typeof width}`)
}

export const compileWidth = (
    width?: NormalizedWidthProp
): string => {
    if (typeof width === 'undefined') {
        return ''
    }

    const compilation: string[] = []

    if (typeof width.def !== 'undefined') {
        const value = typeof width.def === 'number'
            ? `${width.def}px`
            : `${width.def}`

        compilation.push(`width: ${value};`)
    }

    if (typeof width.min !== 'undefined') {
        const value = typeof width.min === 'number'
            ? `${width.min}px`
            : `${width.min}`

        compilation.push(`min-width: ${value};`)
    }

    if (typeof width.max !== 'undefined') {
        const value = typeof width.max === 'number'
            ? `${width.max}px`
            : `${width.max}`

        compilation.push(`max-width: ${value};`)
    }

    return compilation.join('')
}

export type UnnormalizedWidthProp = NormalizedWidthProp | string | number

export type NormalizedWidthProp = {
    def?: WidthValueProp,
    max?: WidthValueProp,
    min?: WidthValueProp
}

type WidthValueProp = number | string
