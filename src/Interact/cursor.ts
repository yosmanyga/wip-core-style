export const compileCursor = (
    cursor?: NormalizedCursorProp
): string => {
    if (typeof cursor === 'undefined' || cursor === null) {
        return ''
    }

    const compilation: string[] = []

    compilation.push(`cursor: ${cursor};`)

    return compilation.join('')
}

export type UnnormalizedCursorProp = NormalizedCursorProp

export type NormalizedCursorProp = string
