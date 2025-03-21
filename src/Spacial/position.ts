export const normalizePosition = (
    position?: UnnormalizedPositionProp
): NormalizedPositionProp | undefined => {
    if (typeof position === 'undefined') {
        return position
    }

    if (typeof position === 'object') {
        return position
    }

    return {
        type: position
    }
}

export const compilePosition = (
    position?: NormalizedPositionProp
): string => {
    if (typeof position === 'undefined') {
        return ''
    }

    const compilation: string[] = []

    if (typeof position.type === 'undefined') {
        position.type = 'relative'
    }

    compilation.push(`position: ${position.type};`)

    if (typeof position.top !== 'undefined') {
        if (typeof position.top === 'number') {
            position.top = `${position.top}px`
        }

        compilation.push(`top: ${position.top};`)
    }

    if (typeof position.bottom !== 'undefined') {
        if (typeof position.bottom === 'number') {
            position.bottom = `${position.bottom}px`
        }

        compilation.push(`bottom: ${position.bottom};`)
    }

    if (typeof position.left !== 'undefined') {
        if (typeof position.left === 'number') {
            position.left = `${position.left}px`
        }

        compilation.push(`left: ${position.left};`)
    }

    if (typeof position.right !== 'undefined') {
        if (typeof position.right === 'number') {
            position.right = `${position.right}px`
        }

        compilation.push(`right: ${position.right};`)
    }

    return compilation.join('')
}

export type UnnormalizedPositionProp = NormalizedPositionProp | TypePositionType

export type NormalizedPositionProp = {
    type?: TypePositionType,
    top?: number | string,
    bottom?: number | string,
    left?: number | string,
    right?: number | string
}

type TypePositionType = 'absolute' | 'relative' | 'fixed'
