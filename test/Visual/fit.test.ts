import Visual from '../../src/Visual'

test('Compile as undefined', () => {
    expect(
        Visual.compileFit(undefined)
    ).toStrictEqual('')
})

test('Compile as default', () => {
    expect(
        Visual.compileFit('cover')
    ).toStrictEqual([
        'object-fit: cover;'
    ].join(''))
})
