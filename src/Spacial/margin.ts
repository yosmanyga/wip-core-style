const normalizeMargin = (
    margin: UnnormalizedMarginProp | undefined
): NormalizedMarginProp | undefined => {
    if (
        typeof margin === 'undefined'
    ) {
        return margin
    }

    if (margin === 'auto') {
        return margin
    }

    if (typeof margin === 'number') {
        margin = {
            top: margin,
            bottom: margin,
            left: margin,
            right: margin
        }
    }

    if (typeof margin === 'object') {
        let normalization = {}

        if (typeof margin.raw !== 'undefined') {
            normalization = {
                ...normalization,
                raw: margin.raw
            }
        }

        if (typeof margin.top !== 'undefined') {
            normalization = {
                ...normalization,
                top: margin.top
            }
        }

        if (typeof margin.bottom !== 'undefined') {
            normalization = {
                ...normalization,
                bottom: margin.bottom
            }
        }

        if (typeof margin.left !== 'undefined') {
            normalization = {
                ...normalization,
                left: margin.left
            }
        }

        if (typeof margin.right !== 'undefined') {
            normalization = {
                ...normalization,
                right: margin.right
            }
        }

        return normalization
    }

    throw new Error(`Invalid margin: ${margin}, of type ${typeof margin}`)
}

const compileMargin = (
    margin: NormalizedMarginProp | undefined,
): string => {
    if (
        typeof margin === 'undefined'
    ) {
        return ''
    }

    if (typeof margin === 'object') {
        const compilation: string[] = []

        if (margin.top) {
            compilation.push(`margin-top: ${margin.top}px;`)
        }

        if (margin.bottom) {
            compilation.push(`margin-bottom: ${margin.bottom}px;`)
        }

        if (margin.left) {
            compilation.push(`margin-left: ${margin.left}px;`)
        }

        if (margin.right) {
            compilation.push(`margin-right: ${margin.right}px;`)
        }

        return compilation.join('')
    }

    return `margin: ${margin};`
}

type UnnormalizedMarginProp = NormalizedMarginProp | number

type NormalizedMarginProp = {
    top?: number,
    bottom?: number,
    left?: number,
    right?: number,
    raw?: boolean
} | string

export type {
    UnnormalizedMarginProp,
    NormalizedMarginProp
}

export {
    normalizeMargin,
    compileMargin
}