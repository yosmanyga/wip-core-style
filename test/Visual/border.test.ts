import {
    compileBorderColor,
    compileBorderRadius,
    compileBorderStyle,
    compileBorderWidth,
    normalizeBorderRadius,
    normalizeChildBorder,
    normalizeParentBorder
} from '../../src/Visual/border'

test('Normalize parent as undefined', () => {
    expect(
        normalizeParentBorder(
            undefined
        )
    ).toStrictEqual(
        {
            'width': undefined,
            'style': undefined,
            'color': undefined
        }
    )
})

test('Normalize parent as number', () => {
    expect(
        normalizeParentBorder(
            1
        )
    ).toStrictEqual(
        {
            width: 1,
            style: 'solid',
            color: 'black'
        }
    )
})

test('Normalize parent as shorthand', () => {
    expect(
        normalizeParentBorder(
            '1 dashed red'
        )
    ).toStrictEqual(
        {
            width: 1,
            style: 'dashed',
            color: 'red'
        }
    )
})

test('Normalize parent as object', () => {
    expect(
        normalizeParentBorder(
            {
                width: 2,
                style: 'dashed',
                color: 'red'
            }
        )
    ).toStrictEqual(
        {
            width: 2,
            style: 'dashed',
            color: 'red'
        }
    )
})

test('Normalize parent as partial object', () => {
    expect(
        normalizeParentBorder(
            {
                width: 1
            }
        )
    ).toStrictEqual(
        {
            width: 1,
            style: 'solid',
            color: 'black'
        }
    )
})

test('Normalize parent having child', () => {
    expect(
        normalizeParentBorder(
            {
                top: {
                    width: 2,
                    style: 'dashed',
                    color: 'red'
                }
            }
        )
    ).toStrictEqual(
        {
            width: undefined,
            style: undefined,
            color: undefined
        }
    )
})

/* Normalize child */

test('Normalize child as undefined', () => {
    expect(
        normalizeChildBorder(
            undefined,
            {
                'width': 1,
                'style': 'dashed',
                'color': 'red'
            }
        )
    ).toStrictEqual(
        {
            'width': 1,
            'style': 'dashed',
            'color': 'red'
        }
    )
})

test('Normalize child as number', () => {
    expect(
        normalizeChildBorder(
            1,
            {
                'width': 0,
                'style': 'dashed',
                'color': 'red'
            }
        )
    ).toStrictEqual(
        {
            'width': 1,
            'style': 'dashed',
            'color': 'red'
        }
    )
})

test('Normalize child as incomplete object', () => {
    expect(
        normalizeChildBorder(
            {
                width: 0,
                color: 'black'
            },
            {
                'width': 1,
                'style': 'dashed',
                'color': 'red'
            }
        )
    ).toStrictEqual(
        {
            'width': 0,
            'style': 'dashed',
            'color': 'black'
        }
    )
})

test('Normalize child as incomplete and no parent', () => {
    expect(
        normalizeChildBorder(
            {
                width: 1,
            },
            {}
        )
    ).toStrictEqual(
        {
            'width': 1,
            'style': 'solid',
            'color': 'black'
        }
    )
})

/* Normalize border radius */

test('Normalize border radius as undefined', () => {
    expect(
        normalizeBorderRadius(undefined)
    ).toStrictEqual(undefined)
})

test('Normalize border radius as string', () => {
    expect(
        normalizeBorderRadius('50%')
    ).toStrictEqual('50%')
})

test('Normalize border radius as number', () => {
    expect(
        normalizeBorderRadius(1)
    ).toStrictEqual({
        top: {
            left: 1,
            right: 1
        },
        bottom: {
            left: 1,
            right: 1
        }
    })
})

test('Normalize border radius as object', () => {
    expect(
        normalizeBorderRadius({
            top: {
                right: 1
            }
        })
    ).toStrictEqual({
        top: {
            right: 1
        }
    })
})

test('Compile border width as undefined', () => {
    expect(
        compileBorderWidth(undefined)
    ).toStrictEqual('')
})

test('Compile border width as partial object', () => {
    expect(
        compileBorderWidth({
            top: undefined,
            bottom: {
                width: 1
            },
            left: undefined,
            right: undefined
        })
    ).toStrictEqual([
        'border-bottom-width: 1px;'
    ].join(''))
})

test('Compile border style as undefined', () => {
    expect(
        compileBorderStyle(undefined)
    ).toStrictEqual('')
})

test('Compile border style as partial object', () => {
    expect(
        compileBorderStyle({
            bottom: {
                style: 'dashed'
            }
        })
    ).toStrictEqual([
        'border-bottom-style: dashed;'
    ].join(''))
})

test('Compile border style as full object', () => {
    expect(
        compileBorderStyle({
            top: {
                style: 'dashed'
            },
            bottom: {
                style: 'dashed'
            },
            left: {
                style: 'dashed'
            },
            right: {
                style: 'dashed'
            }
        })
    ).toStrictEqual([
        'border-top-style: dashed;',
        'border-bottom-style: dashed;',
        'border-left-style: dashed;',
        'border-right-style: dashed;'
    ].join(''))
})

test('Compile border color as undefined', () => {
    expect(
        compileBorderColor(undefined)
    ).toStrictEqual('')
})

test('Compile border color as partial object', () => {
    expect(
        compileBorderColor({
            bottom: {
                color: 'red'
            }
        })
    ).toStrictEqual([
        'border-bottom-color: red;'
    ].join(''))
})

test('Compile border radius as undefined', () => {
    expect(
        compileBorderRadius(undefined)
    ).toStrictEqual('')
})

test('Compile border radius as full object', () => {
    expect(
        compileBorderRadius({
            radius: {
                top: {
                    left: 1,
                    right: 2
                },
                bottom: {
                    left: 3,
                    right: 4
                }
            }
        })
    ).toStrictEqual([
        'border-top-left-radius: 1px;',
        'border-top-right-radius: 2px;',
        'border-bottom-left-radius: 3px;',
        'border-bottom-right-radius: 4px;'
    ].join(''))
})

test('Compile border radius as partial object', () => {
    expect(
        compileBorderRadius({
            radius: {
                top: {
                    left: 1
                }
            }
        })
    ).toStrictEqual('border-top-left-radius: 1px;')
})

test('Compile border radius as percent', () => {
    expect(
        compileBorderRadius({radius: '50%'})
    ).toStrictEqual('border-radius: 50%;')
})

test('Compile border radius with fix', () => {
    expect(
        compileBorderRadius({
            radius: '10px',
            fix: true
        })
    ).toStrictEqual('border-radius: 10px;overflow: hidden;')
})
