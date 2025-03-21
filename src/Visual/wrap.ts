export const compileWrap = (
    wrap?: NormalizedWrapProp
): string => {
    if (typeof wrap === 'undefined' || wrap == null) {
        return ''
    }

    const compilation: string[] = []

    if (wrap === 'word') {
        compilation.push('overflow: hidden;')
        compilation.push('overflow-wrap: break-word;')
    } else {
        compilation.push(`overflow-wrap: ${wrap};`)
    }

    return compilation.join('')
}

export type UnnormalizedWrapProp = NormalizedWrapProp

export type NormalizedWrapProp = string
