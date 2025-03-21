export const normalizeWhitespace = (
    whitespace?: UnnormalizedWhitespaceProp
): NormalizedWhitespaceProp | undefined => {
    if (typeof whitespace === 'undefined' || whitespace == null) {
        return whitespace
    }

    if (whitespace === true) {
        return 'pre-wrap'
    }

    return whitespace
}

export const compileWhitespace = (
    whitespace?: NormalizedWhitespaceProp
): string => {
    if (typeof whitespace === 'undefined' || whitespace == null) {
        return ''
    }

    return `white-space: ${whitespace};`
}

export type UnnormalizedWhitespaceProp = NormalizedWhitespaceProp | true

export type NormalizedWhitespaceProp = string
