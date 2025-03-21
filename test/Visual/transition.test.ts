import Visual from '../../src/Visual'

test('Compile as undefined', () => {
    expect(
        Visual.compileTransition(undefined)
    ).toStrictEqual('')
})

test('Compile as default', () => {
    expect(
        Visual.compileTransition('all 0.5s ease-out')
    ).toStrictEqual([
        'transition: all 0.5s ease-out;'
    ].join(''))
})
