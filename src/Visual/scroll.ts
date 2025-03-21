export const compileScroll = (
    scroll?: NormalizedScrollProp
): string => {
    if (typeof scroll === 'undefined' || scroll == null) {
        return ''
    }

    const compilation: string[] = []

    if (scroll) {
        compilation.push('overflow: auto;')
    }

    return compilation.join('')
}

export type UnnormalizedScrollProp = NormalizedScrollProp

export type NormalizedScrollProp = boolean
