import Spacial from '../../src/Spacial'

test('Normalize as undefined', () => {
    expect(
        Spacial.normalizeFlex(
            undefined
        )
    ).toStrictEqual(undefined)
})

test('Normalize as boolean', () => {
    expect(
        Spacial.normalizeFlex(
            true
        )
    ).toStrictEqual({
        grow: 1
    })
})

test('Normalize as number', () => {
    expect(
        Spacial.normalizeFlex(
            1
        )
    ).toStrictEqual({
        grow: 1
    })
})

test('Normalize as object', () => {
    expect(
        Spacial.normalizeFlex({
            grow: 1,
            shrink: 2,
            basis: '200px'
        })
    ).toStrictEqual({
        grow: 1,
        shrink: 2,
        basis: '200px'
    })
})

test('Compile as undefined', () => {
    expect(
        Spacial.compileFlex(undefined)
    ).toStrictEqual('')
})

test('Compile as partial object', () => {
    expect(
        Spacial.compileFlex({
            grow: 1
        })
    ).toStrictEqual([
        'flex-grow: 1;'
    ].join(''))
})

test('Compile as complete object', () => {
    expect(
        Spacial.compileFlex({
            grow: 1,
            shrink: 2,
            basis: '200px'
        })
    ).toStrictEqual([
        'flex-grow: 1;',
        'flex-shrink: 2;',
        'flex-basis: 200px;'
    ].join(''))
})
