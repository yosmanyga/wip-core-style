import Visual from '../../src/Visual'

test('Compile as undefined', () => {
    expect(
        Visual.compileShadow(undefined)
    ).toStrictEqual('')
})

test('Compile as default', () => {
    expect(
        Visual.compileShadow({
            width: 1,
            height: 1,
            radius: 4,
            color: 'blue'
        })
    ).toStrictEqual([
        'box-shadow: 1px 1px 4px blue;'
    ].join(''))
})
