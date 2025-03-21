export const compileTransform = (
    transform?: NormalizedTransformProp
): string => {
    if (typeof transform === 'undefined' || transform == null) {
        return ''
    }

    const compilation: string[] = []

    compilation.push(`transform: ${transform};`)

    return compilation.join('')
}

export type UnnormalizedTransformProp = NormalizedTransformProp

export type NormalizedTransformProp = string
