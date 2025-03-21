import Spacial from '../../src/Spacial'

test('Compile as undefined', () => {
    expect(
        Spacial.compileZ(undefined)
    ).toStrictEqual('')
})

test('Compile as default', () => {
    expect(
        Spacial.compileZ(1)
    ).toStrictEqual([
        'z-index: 1;'
    ].join(''))
})
