import Spacial from '../../src/Spacial'

test('Normalize as undefined', () => {
    expect(
        Spacial.normalizePosition(undefined)
    ).toStrictEqual(undefined)
})

test('Normalize as object', () => {
    expect(
        Spacial.normalizePosition({top: 1})
    ).toStrictEqual({top: 1})
})

test('Normalize as string', () => {
    expect(
        Spacial.normalizePosition('relative')
    ).toStrictEqual({type: 'relative'})
})

test('Compile as undefined', () => {
    expect(
        Spacial.compilePosition(undefined)
    ).toStrictEqual('')
})

test('Compile as incomplete object', () => {
    expect(
        Spacial.compilePosition({top: 1, bottom: '2px'})
    ).toStrictEqual('position: relative;top: 1px;bottom: 2px;')
})

test('Compile as complete object as numbers', () => {
    expect(
        Spacial.compilePosition({type: 'absolute', top: 1, bottom: 2, left: 3, right: 4})
    ).toStrictEqual('position: absolute;top: 1px;bottom: 2px;left: 3px;right: 4px;')
})

test('Compile as complete object as strings', () => {
    expect(
        Spacial.compilePosition({type: 'absolute', top: '1px', bottom: '2px', left: '3px', right: '4px'})
    ).toStrictEqual('position: absolute;top: 1px;bottom: 2px;left: 3px;right: 4px;')
})
