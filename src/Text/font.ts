export const compileFont = (
    font?: NormalizedFontProp
): string => {
    if (typeof font === 'undefined' || font == null) {
        return ''
    }

    if (typeof font === 'string') {
        return `font: ${font};`
    }

    const compilation: string[] = []

    if (typeof font.style !== 'undefined') {
        compilation.push(`font-style: ${font.style};`)
    }

    if (typeof font.variant !== 'undefined') {
        compilation.push(`font-variant: ${font.variant};`)
    }

    if (typeof font.weight !== 'undefined') {
        compilation.push(`font-weight: ${font.weight};`)
    }

    if (typeof font.size !== 'undefined') {
        let value = font.size

        if (typeof value === 'number') {
            value = `${value}px`
        }

        compilation.push(`font-size: ${value};`)
    }

    if (typeof font.family !== 'undefined') {
        compilation.push(`font-family: ${font.family};`)
    }

    return compilation.join('')
}

export type UnnormalizedFontProp = NormalizedFontProp

export type NormalizedFontProp = {
    style?: string,
    variant?: string,
    weight?: number | string,
    size?: number | string,
    family?: string,
} | string
