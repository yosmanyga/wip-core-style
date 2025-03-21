import Visual from '../../src/Visual'

test('Compile as undefined', () => {
    expect(
        Visual.compileScroll(undefined)
    ).toStrictEqual('')
})

test('Compile as true', () => {
    expect(
        Visual.compileScroll(true)
    ).toStrictEqual([
        'overflow: auto;'
    ].join(''))
})

test('Compile as false', () => {
    expect(
        Visual.compileScroll(false)
    ).toStrictEqual('')
})
