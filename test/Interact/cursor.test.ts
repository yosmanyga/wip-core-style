import Interact from '../../../core-style/src/Interact'

test('Compile as undefined', () => {
    expect(
        Interact.compileCursor(undefined)
    ).toStrictEqual('')
})

test('Compile with string', () => {
    expect(
        Interact.compileCursor('pointer')
    ).toStrictEqual([
        'cursor: pointer;'
    ].join(''))
})
