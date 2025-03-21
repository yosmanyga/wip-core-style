import Spacial from '../../src/Spacial'

test('Compile as undefined', () => {
    expect(
        Spacial.compileDisplay(undefined)
    ).toStrictEqual('')
})

test('Compile as default', () => {
    expect(
        Spacial.compileDisplay('none')
    ).toStrictEqual([
        'display: none;'
    ].join(''))
})
