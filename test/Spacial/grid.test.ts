import Spacial from '../../src/Spacial'

test('Compile as undefined', () => {
    expect(
        Spacial.compileGrid(undefined)
    ).toStrictEqual('')
})

test('Compile as default', () => {
    expect(
        Spacial.compileGrid('1fr 1fr')
    ).toStrictEqual([
        'display: grid; grid-template-columns: 1fr 1fr;'
    ].join(''))
})
