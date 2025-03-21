import Visual from '../../src/Visual'

test('Compile as undefined', () => {
    expect(
        Visual.compileColor(undefined)
    ).toStrictEqual('')
})

test('Compile as default', () => {
    expect(
        Visual.compileColor('red')
    ).toStrictEqual([
        'color: red;'
    ].join(''))
})
