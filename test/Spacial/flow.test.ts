import Spacial from '../../src/Spacial'

test('Normalize as undefined', () => {
    expect(
        Spacial.normalizeFlow(
            undefined
        )
    ).toStrictEqual(undefined)
})

test('Normalize as object', () => {
    expect(
        Spacial.normalizeFlow({
            direction: 'row',
            wrap: true
        })
    ).toStrictEqual({
        direction: 'row',
        wrap: true
    })
})

test('Normalize as string', () => {
    expect(
        Spacial.normalizeFlow('row nowrap')
    ).toStrictEqual({
        direction: 'row',
        wrap: false
    })
})

test('Compile as undefined', () => {
    expect(
        Spacial.compileFlow(undefined)
    ).toStrictEqual('')
})

test('Compile as row', () => {
    expect(
        Spacial.compileFlow({
            direction: 'row',
            wrap: false
        })
    ).toStrictEqual([
        'display: flex;',
        'flex-direction: row;',
        'flex-wrap: nowrap;'
    ].join(''))
})

test('Compile as row wrap', () => {
    expect(
        Spacial.compileFlow({
            direction: 'row',
            wrap: true
        })
    ).toStrictEqual([
        'display: flex;',
        'flex-direction: row;',
        'flex-wrap: wrap;'
    ].join(''))
})
