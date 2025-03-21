export const compileTable = (
    table?: NormalizedTableProp
): string => {
    if (typeof table === 'undefined' || table === null) {
        return ''
    }

    if (table === 'table') {
        return 'display: table;'
    } else if (table === 'row') {
        return 'display: table-row;'
    } else if (table === 'cell') {
        return 'display: table-cell;'
    }

    throw new Error(`Invalid table: ${table as string} of type ${typeof table}`)
}

export type UnnormalizedTableProp = NormalizedTableProp

export type NormalizedTableProp = 'table' | 'row' | 'cell'
