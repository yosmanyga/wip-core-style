import Visual from '../../src/Visual'

test('Compile as undefined', () => {
    expect(
        Visual.compileOpacity(undefined)
    ).toStrictEqual('')
})

test('Compile as default', () => {
    expect(
        Visual.compileOpacity(0.33)
    ).toStrictEqual([
        'opacity: 0.33;'
    ].join(''))
})
