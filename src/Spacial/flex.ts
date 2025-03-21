export const normalizeFlex = (
    flex?: UnnormalizedFlexProp
): NormalizedFlexProp | undefined => {
    if (typeof flex === 'undefined' || flex === null) {
        return flex
    }

    if (typeof flex === 'boolean') {
        flex = {
            grow: 1
        }
    }

    if (typeof flex === 'number') {
        flex = {
            grow: flex
        }
    }

    return flex
}

export const compileFlex = (
    flex?: NormalizedFlexProp
): string => {
    if (typeof flex === 'undefined' || flex == null) {
        return ''
    }

    const compilation: string[] = []

    if (typeof flex.grow !== 'undefined') {
        compilation.push(`flex-grow: ${flex.grow};`)
    }

    if (typeof flex.shrink !== 'undefined') {
        compilation.push(`flex-shrink: ${flex.shrink};`)
    }

    if (typeof flex.basis !== 'undefined') {
        compilation.push(`flex-basis: ${flex.basis};`)
    }

    return compilation.join('')
}

export type UnnormalizedFlexProp = NormalizedFlexProp | number | boolean

export type NormalizedFlexProp = {
    grow?: number,
    shrink?: number,
    basis?: string
}
