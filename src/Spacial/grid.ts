export const compileGrid = (
    grid?: NormalizedGridProp
): string => {
    if (typeof grid === 'undefined' || grid === null) {
        return ''
    }

    if (typeof grid === 'string') {
        return `display: grid; grid-template-columns: ${grid};`
    }

    return `display: grid; grid-template-rows: ${grid.rows};`
}

export type UnnormalizedGridProp = NormalizedGridProp

export type NormalizedGridProp = string | { rows: string }
