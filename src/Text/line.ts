export const compileLine = (
    line?: NormalizedLineProp
): string => {
    if (typeof line === 'undefined' || line == null) {
        return ''
    }

    return `line-height: ${line};`
}

export type UnnormalizedLineProp = NormalizedLineProp

export type NormalizedLineProp = string
