import Spacial from '../../src/Spacial'

test('Normalize as undefined', () => {
    expect(
        Spacial.normalizeWidth(
            undefined
        )
    ).toStrictEqual(
        undefined
    )
})

test('Normalize as number', () => {
    expect(
        Spacial.normalizeWidth(
            1
        )
    ).toStrictEqual(
        {
            def: 1
        }
    )
})

test('Normalize as string', () => {
    expect(
        Spacial.normalizeWidth(
            '100%'
        )
    ).toStrictEqual(
        {
            def: '100%'
        }
    )
})

test('Normalize as object', () => {
    expect(
        Spacial.normalizeWidth({
            def: 1,
            min: 2,
            max: 3
        })
    ).toStrictEqual({
        def: 1,
        min: 2,
        max: 3
    })
})


test('Compile as undefined', () => {
    expect(
        Spacial.compileWidth(undefined)
    ).toStrictEqual('')
})

test('Compile as partial', () => {
    expect(
        Spacial.compileWidth({
            def: 1,
            min: 2,
            max: 3
        })
    ).toStrictEqual([
        'width: 1px;',
        'min-width: 2px;',
        'max-width: 3px;'
    ].join(''))
})
