import Visual from '../../src/Visual'

test('Compile as undefined', () => {
    expect(
        Visual.compileRatio(undefined)
    ).toStrictEqual('')
})

test('Compile as default', () => {
    expect(
        Visual.compileRatio('1/1')
    ).toStrictEqual([
        'aspect-ratio: 1/1;'
    ].join(''))
})
