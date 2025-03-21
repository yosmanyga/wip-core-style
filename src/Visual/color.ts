export const compileColor = (
    color: NormalizedColorProp | undefined,
): string => {
    if (typeof color === 'undefined' || color == null) {
        return ''
    }

    return `color: ${color};`
}

export type UnnormalizedColorProp = NormalizedColorProp

export type NormalizedColorProp = string
