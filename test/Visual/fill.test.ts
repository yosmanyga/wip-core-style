import Visual from '../../src/Visual'

test('Compile as undefined', () => {
    expect(
        Visual.compileFill(undefined)
    ).toStrictEqual('')
})

test('Compile as default', () => {
    expect(
        Visual.compileFill('red')
    ).toStrictEqual([
        'fill: red;'
    ].join(''))
})
