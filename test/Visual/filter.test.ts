import Visual from '../../src/Visual'

test('Compile as undefined', () => {
    expect(
        Visual.compileFilter(undefined)
    ).toStrictEqual('')
})

test('Compile as default', () => {
    expect(
        Visual.compileFilter('blur(1px)')
    ).toStrictEqual([
        'filter: blur(1px);'
    ].join(''))
})
