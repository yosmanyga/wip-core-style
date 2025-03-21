import Spacial from '../../src/Spacial'

test('Compile as undefined', () => {
    expect(
        Spacial.compileBox(undefined)
    ).toStrictEqual('')
})

test('Compile as default', () => {
    expect(
        Spacial.compileBox('content-box')
    ).toStrictEqual([
        'box-sizing: content-box;'
    ].join(''))
})
