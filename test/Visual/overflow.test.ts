import Visual from '../../src/Visual'

test('Compile as undefined', () => {
    expect(
        Visual.compileOverflow(undefined)
    ).toStrictEqual('')
})

test('Compile as default', () => {
    expect(
        Visual.compileOverflow('hidden')
    ).toStrictEqual([
        'overflow: hidden;'
    ].join(''))
})
