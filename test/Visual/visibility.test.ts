import Visual from '../../src/Visual'

test('Compile as undefined', () => {
    expect(
        Visual.compileVisibility(undefined)
    ).toStrictEqual('')
})

test('Compile with string', () => {
    expect(
        Visual.compileVisibility('hidden')
    ).toStrictEqual([
        'visibility: hidden;'
    ].join(''))
})
