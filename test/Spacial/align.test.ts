import Spacial from '../../src/Spacial'

test('Compile as undefined', () => {
    expect(
        Spacial.compileAlign(undefined)
    ).toStrictEqual('')
})

test('Compile with main', () => {
    expect(
        Spacial.compileAlign({main: 'start'})
    ).toStrictEqual([
        'justify-content: start;'
    ].join(''))
})

test('Compile with cross', () => {
    expect(
        Spacial.compileAlign({cross: 'center'})
    ).toStrictEqual([
        'align-items: center;'
    ].join(''))
})

test('Compile with self', () => {
    expect(
        Spacial.compileAlign({self: 'center'})
    ).toStrictEqual([
        'align-self: center;'
    ].join(''))
})

test('Compile with text', () => {
    expect(
        Spacial.compileAlign({text: 'justify'})
    ).toStrictEqual([
        'text-align: justify;'
    ].join(''))
})

test('Compile with vertical', () => {
    expect(
        Spacial.compileAlign({vertical: 'baseline'})
    ).toStrictEqual([
        'vertical-align: baseline;'
    ].join(''))
})

test('Compile with more than one', () => {
    expect(
        Spacial.compileAlign({main: 'start', cross: 'center'})
    ).toStrictEqual([
        'justify-content: start;',
        'align-items: center;'
    ].join(''))
})
