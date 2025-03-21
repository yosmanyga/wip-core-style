import Spacial from '../../src/Spacial'

test('Normalize as undefined', () => {
    expect(
        Spacial.normalizePadding(
            undefined
        )
    ).toStrictEqual(
        undefined
    )
})

test('Normalize as number', () => {
    expect(
        Spacial.normalizePadding(
            1
        )
    ).toStrictEqual(
        {
            top: 1,
            bottom: 1,
            left: 1,
            right: 1
        }
    )
})

test('Normalize as partial', () => {
    expect(
        Spacial.normalizePadding(
            {
                top: 1
            }
        )
    ).toStrictEqual(
        {
            top: 1
        }
    )
})

test('Compile as undefined', () => {
    expect(
        Spacial.compilePadding(undefined)
    ).toStrictEqual('')
})

test('Compile as partial', () => {
    expect(
        Spacial.compilePadding({top: 1, bottom: 1})
    ).toStrictEqual([
        'padding-top: 1px;',
        'padding-bottom: 1px;'
    ].join(''))
})
