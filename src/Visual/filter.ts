export const compileFilter = (
    filter?: NormalizedFilterProp
): string => {
    if (typeof filter === 'undefined' || filter === null) {
        return ''
    }

    const compilation: string[] = []

    if (filter) {
        compilation.push(`filter: ${filter};`)
    }

    return compilation.join('')
}

export type UnnormalizedFilterProp = NormalizedFilterProp

export type NormalizedFilterProp = string
