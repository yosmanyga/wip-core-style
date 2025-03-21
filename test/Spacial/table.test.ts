import Spacial from '../../src/Spacial'

test('Compile as undefined', () => {
    expect(
        Spacial.compileTable(undefined)
    ).toStrictEqual('')
})

test('Compile as string', () => {
    expect(
        Spacial.compileTable('table')
    ).toStrictEqual([
        'display: table;'
    ].join(''))

    expect(
        Spacial.compileTable('row')
    ).toStrictEqual([
        'display: table-row;'
    ].join(''))

    expect(
        Spacial.compileTable('cell')
    ).toStrictEqual([
        'display: table-cell;'
    ].join(''))
})
