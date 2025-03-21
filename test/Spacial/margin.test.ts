import Spacial from '../../src/Spacial'

test('Normalize as undefined', () => {
    expect(
        Spacial.normalizeMargin(
            undefined
        )
    ).toStrictEqual(
        undefined
    )
})

test('Normalize as number', () => {
    expect(
        Spacial.normalizeMargin(
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
        Spacial.normalizeMargin(
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
        Spacial.compileMargin(undefined)
    ).toStrictEqual('')
})

test('Compile as partial', () => {
    expect(
        Spacial.compileMargin({top: 1, bottom: 1})
    ).toStrictEqual([
        'margin-top: 1px;',
        'margin-bottom: 1px;'
    ].join(''))
})
