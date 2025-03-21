export const normalizeDecoration = (
    decoration?: UnnormalizedDecorationProp
): NormalizedDecorationProp | undefined => {
    if (typeof decoration === 'undefined' || decoration == null) {
        return ''
    }

    if (typeof decoration === 'string') {
        const split = decoration.split(' ')

        return {
            line: split[0],
            color: split[1],
            style: split[2],
            thickness: split[3]
        }
    }

    return decoration
}

export const compileDecoration = (
    decoration?: NormalizedDecorationProp
): string => {
    if (typeof decoration === 'undefined' || decoration == null) {
        return ''
    }

    if (typeof decoration === 'string') {
        return `text-decoration: ${decoration};`
    }

    const compilation: string[] = []

    if (typeof decoration.line !== 'undefined') {
        compilation.push(`text-decoration-line: ${decoration.line};`)
    }

    if (typeof decoration.color !== 'undefined') {
        compilation.push(`text-decoration-color: ${decoration.color};`)
    }

    if (typeof decoration.style !== 'undefined') {
        compilation.push(`text-decoration-style: ${decoration.style};`)
    }

    if (typeof decoration.thickness !== 'undefined') {
        compilation.push(`text-decoration-thickness: ${decoration.thickness};`)
    }

    return compilation.join('')
}

export type UnnormalizedDecorationProp = NormalizedDecorationProp

export type NormalizedDecorationProp = {
    line?: string,
    color?: string,
    style?: string,
    thickness?: string,
} | string
