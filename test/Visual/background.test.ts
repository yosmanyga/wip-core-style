import Visual from '../../src/Visual'

test('Normalize an undefined', () => {
    expect(
        Visual.normalizeBackground(undefined)
    ).toStrictEqual(undefined)
})

test('Normalize an already normalized object', () => {
    expect(
        Visual.normalizeBackground({
            color: 'red'
        })
    ).toStrictEqual({
        color: 'red'
    })
})

test('Normalize a color', () => {
    expect(
        Visual.normalizeBackground('red')
    ).toStrictEqual({
        color: 'red'
    })
})

test('Normalize another thing', () => {
    expect(() => {
        Visual.normalizeBackground('/image.jpg')
    }).toThrow()
})

test('Compile an undefined', () => {
    expect(
        Visual.compileBackground(undefined)
    ).toStrictEqual('')
})

test('Compile a color object', () => {
    expect(
        Visual.compileBackground({
            color: 'red'
        })
    ).toStrictEqual('background-color: red;')
})

test('Compile another thing', () => {
    expect(
        Visual.compileBackground({
            image: '/image.jpg'
        })
    ).toStrictEqual('')
})
