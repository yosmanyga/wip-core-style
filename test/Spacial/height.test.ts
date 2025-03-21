import Spacial from '../../src/Spacial'

test('Normalize as undefined', () => {
    expect(
        Spacial.normalizeHeight(
            undefined
        )
    ).toStrictEqual(
        undefined
    )
})

test('Normalize as number', () => {
    expect(
        Spacial.normalizeHeight(
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
        Spacial.normalizeHeight(
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
        Spacial.normalizeHeight({
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
        Spacial.compileHeight(undefined)
    ).toStrictEqual('')
})

test('Compile', () => {
    expect(
        Spacial.compileHeight({
            def: 1,
            min: 2,
            max: 3
        })
    ).toStrictEqual([
        'height: 1px;',
        'min-height: 2px;',
        'max-height: 3px;'
    ].join(''))
})
