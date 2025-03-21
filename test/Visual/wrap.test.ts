import Visual from '../../src/Visual'

test('Compile as undefined', () => {
    expect(
        Visual.compileWrap(undefined)
    ).toStrictEqual('')
})

test('Compile as word', () => {
    expect(
        Visual.compileWrap('word')
    ).toStrictEqual([
        'overflow: hidden;',
        'overflow-wrap: break-word;'
    ].join(''))
})
