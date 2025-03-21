import Visual from '../../src/Visual'

test('Compile as undefined', () => {
    expect(
        Visual.compileTransform(undefined)
    ).toStrictEqual('')
})

test('Compile as default', () => {
    expect(
        Visual.compileTransform('rotate(0.5turn)')
    ).toStrictEqual([
        'transform: rotate(0.5turn);'
    ].join(''))
})
