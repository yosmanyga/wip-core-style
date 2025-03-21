export const compileAlign = (
    align?: NormalizedAlignProp
): string => {
    if (typeof align === 'undefined' || align === null) {
        return ''
    }

    const compilation: string[] = []

    if (align.main) {
        compilation.push(`justify-content: ${align.main};`)
    }

    if (align.cross) {
        compilation.push(`align-items: ${align.cross};`)
    }

    if (align.self) {
        compilation.push(`align-self: ${align.self};`)
    }

    if (align.text) {
        compilation.push(`text-align: ${align.text};`)
    }

    if (align.vertical) {
        compilation.push(`vertical-align: ${align.vertical};`)
    }

    return compilation.join('')
}

export type UnnormalizedAlignProp = NormalizedAlignProp

export type NormalizedAlignProp = {
    main?: string,
    cross?: string,
    self?: string,
    text?: string
    vertical?: string
}
