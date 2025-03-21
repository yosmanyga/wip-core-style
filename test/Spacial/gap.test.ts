import Spacial from '../../src/Spacial'

test('Compile as undefined', () => {
    expect(
        Spacial.compileGap(undefined)
    ).toStrictEqual('')
})

test('Compile as default', () => {
    expect(
        Spacial.compileGap(2)
    ).toStrictEqual([
        'gap: 2px;'
    ].join(''))
})
