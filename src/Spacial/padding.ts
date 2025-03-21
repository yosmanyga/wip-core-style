export const normalizePadding = (
    padding: UnnormalizedPaddingProp | undefined
): NormalizedPaddingProp | undefined => {
    if (
        typeof padding === 'undefined'
    ) {
        return padding
    }

    if (
        typeof padding === 'string'
        && padding === 'auto'
    ) {
        return padding
    }

    if (typeof padding === 'number') {
        padding = {
            top: padding,
            bottom: padding,
            left: padding,
            right: padding
        }
    }

    if (typeof padding === 'object') {
        let normalization = {}

        if (typeof padding.raw !== 'undefined') {
            normalization = {
                ...normalization,
                raw: padding.raw
            }
        }

        if (typeof padding.top !== 'undefined') {
            normalization = {
                ...normalization,
                top: padding.top
            }
        }

        if (typeof padding.bottom !== 'undefined') {
            normalization = {
                ...normalization,
                bottom: padding.bottom
            }
        }

        if (typeof padding.left !== 'undefined') {
            normalization = {
                ...normalization,
                left: padding.left
            }
        }

        if (typeof padding.right !== 'undefined') {
            normalization = {
                ...normalization,
                right: padding.right
            }
        }

        return normalization
    }

    throw new Error(`Invalid padding: ${padding} of type ${typeof padding}`)
}

export const compilePadding = (
    padding: NormalizedPaddingProp | undefined,
): string => {
    if (
        typeof padding === 'undefined'
    ) {
        return ''
    }

    if (typeof padding === 'object') {
        const compilation: string[] = []

        if (padding.top) {
                compilation.push(`padding-top: ${padding.top}px;`)
        }

        if (padding.bottom) {
            compilation.push(`padding-bottom: ${padding.bottom}px;`)
        }

        if (padding.left) {
            compilation.push(`padding-left: ${padding.left}px;`)
        }

        if (padding.right) {
            compilation.push(`padding-right: ${padding.right}px;`)
        }

        return compilation.join('')
    }

    return `padding: ${padding};`
}

export type UnnormalizedPaddingProp = NormalizedPaddingProp | number | string

export type NormalizedPaddingProp = {
    top?: number,
    bottom?: number,
    left?: number,
    right?: number,
    raw?: boolean
} | string
