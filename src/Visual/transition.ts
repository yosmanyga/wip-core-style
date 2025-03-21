export const compileTransition = (
    transition?: NormalizedTransitionProp
): string => {
    if (typeof transition === 'undefined' || transition == null) {
        return ''
    }

    const compilation: string[] = []

    compilation.push(`transition: ${transition};`)

    return compilation.join('')
}

export type UnnormalizedTransitionProp = NormalizedTransitionProp

export type NormalizedTransitionProp = string
