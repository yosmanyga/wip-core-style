const normalizeBorder = (
    border: UnnormalizedBorderProp | undefined
): NormalizedBorderProp | undefined => {
    if (typeof border === 'undefined') {
        return border
    }

    const parent = normalizeParentBorder(border)

    return {
        top: normalizeChildBorder(border['top' as keyof typeof border], parent),
        right: normalizeChildBorder(border['right' as keyof typeof border], parent),
        bottom: normalizeChildBorder(border['bottom' as keyof typeof border], parent),
        left: normalizeChildBorder(border['left' as keyof typeof border], parent),
        radius: normalizeBorderRadius(border['radius' as keyof typeof border]),
        fix: !!border['fix' as keyof typeof border],
        collapse: !!border['collapse' as keyof typeof border]
    }
}

const normalizeParentBorder = (
    border: UnnormalizedParentBorderProp | undefined
): NormalizedParentBorderProp => {
    switch (typeof border) {
        case 'undefined': {
            return {
                width: undefined,
                style: undefined,
                color: undefined
            }
        }
        case 'number': {
            return {
                width: border,
                style: 'solid',
                color: 'black'
            }
        }
        case 'string': {
            const parts = border.split(' ')

            return {
                width: parseInt(parts[0]),
                style: parts[1],
                color: parts[2]
            }
        }
        case 'object': {
            return {
                width: border && border['width' as keyof typeof border],
                style: border && (typeof border['style' as keyof typeof border] !== 'undefined'
                        ? border['style' as keyof typeof border]
                        : (typeof border['width' as keyof typeof border] !== 'undefined'
                                ? 'solid'
                                : undefined
                        )
                ),
                color: border && (typeof border['color' as keyof typeof border] !== 'undefined'
                        ? border['color' as keyof typeof border]
                        : (typeof border['width' as keyof typeof border] !== 'undefined'
                                ? 'black'
                                : undefined
                        )
                )
            }
        }
        default:
            throw Error(`Unknown border: ${border as string}`)
    }
}

const normalizeChildBorder = (
    child: unknown,
    parent: NormalizedParentBorderProp
): NormalizedChildBorderProp => {
    let normalization;

    switch (typeof child) {
        case 'undefined':
            normalization = {
                width: parent.width,
                style: parent.style,
                color: parent.color
            };

            break;
        case 'number':
            normalization = {
                width: child,
                style: parent.style,
                color: parent.color
            };

            break;
        case 'object':
            normalization = {
                width: child && typeof child['width' as keyof typeof child] !== 'undefined'
                    ? child['width' as keyof typeof child]
                    : parent.width,
                style: child && typeof child['style' as keyof typeof child] !== 'undefined' && typeof child['width' as keyof typeof child] !== 'undefined'
                    ? child['style' as keyof typeof child]
                    : parent.style,
                color: child && typeof child['color' as keyof typeof child] !== 'undefined'
                    ? child['color' as keyof typeof child]
                    : parent.color
            };

            break;
        default:
            throw Error(`Unknown child: ${child as string}`)
    }

    // Patch for Web
    if (normalization.width) {
        normalization = {
            ...normalization,
            color: normalization.color || 'black',
            style: normalization.style || 'solid',
        }
    }

    return normalization;
}

const normalizeBorderRadius = (
    radius: UnnormalizedRadiusProp | undefined
): NormalizedRadiusProp | undefined => {
    if (typeof radius === 'undefined') {
        return radius
    }

    if (typeof radius === 'string') {
        return radius
    }

    if (typeof radius === 'number') {
        return {
            top: {
                left: radius,
                right: radius
            },
            bottom: {
                left: radius,
                right: radius
            }
        }
    }

    return radius
}

const compileBorder = (
    border: NormalizedBorderProp | undefined,
): string => {
    const compilation: string[] = [
        compileBorderWidth(border),
        compileBorderStyle(border),
        compileBorderColor(border),
        compileBorderRadius(border),
        compileBorderCollapse(border)
    ];

    return compilation.join('')
}

const compileBorderWidth = (
    border: NormalizedBorderProp | undefined
): string => {
    if (typeof border === 'undefined') {
        return ''
    }

    const compilation: string[] = []

    if (typeof border.top?.width !== 'undefined') {
        compilation.push(`border-top-width: ${border.top.width}px;`)
    }

    if (typeof border.bottom?.width !== 'undefined') {
        compilation.push(`border-bottom-width: ${border.bottom.width}px;`)
    }

    if (typeof border.left?.width !== 'undefined') {
        compilation.push(`border-left-width: ${border.left.width}px;`)
    }

    if (typeof border.right?.width !== 'undefined') {
        compilation.push(`border-right-width: ${border.right.width}px;`)
    }

    return compilation.join('')
}

const compileBorderStyle = (
    border: NormalizedBorderProp | undefined
): string => {
    if (typeof border === 'undefined') {
        return ''
    }

    const compilation: string[] = []

    if (typeof border?.top?.style !== 'undefined') {
        compilation.push(`border-top-style: ${border.top.style};`)
    }

    if (typeof border?.bottom?.style !== 'undefined') {
        compilation.push(`border-bottom-style: ${border.bottom.style};`)
    }

    if (typeof border?.left?.style !== 'undefined') {
        compilation.push(`border-left-style: ${border.left.style};`)
    }

    if (typeof border?.right?.style !== 'undefined') {
        compilation.push(`border-right-style: ${border.right.style};`)
    }

    return compilation.join('')
}

const compileBorderColor = (
    border: NormalizedBorderProp | undefined
): string => {
    if (typeof border === 'undefined') {
        return ''
    }

    const compilation: string[] = []

    if (typeof border.top?.color !== 'undefined') {
        const color = border.top.color

        compilation.push(`border-top-color: ${color};`)
    }

    if (typeof border.bottom?.color !== 'undefined') {
        const color = border.bottom.color

        compilation.push(`border-bottom-color: ${color};`)
    }

    if (typeof border.left?.color !== 'undefined') {
        const color = border.left.color

        compilation.push(`border-left-color: ${color};`)
    }

    if (typeof border.right?.color !== 'undefined') {
        const color = border.right.color

        compilation.push(`border-right-color: ${color};`)
    }

    return compilation.join('')
}

const compileBorderRadius = (
    border: NormalizedBorderProp | undefined
): string => {
    if (
        typeof border === 'undefined'
        || typeof border.radius === 'undefined'
    ) {
        return ''
    }

    const compilation: string[] = []

    if (typeof border.radius === 'object') {
        if (border.radius?.top?.left) {
            compilation.push(`border-top-left-radius: ${border.radius.top.left}px;`)
        }

        if (border.radius?.top?.right) {
            compilation.push(`border-top-right-radius: ${border.radius.top.right}px;`)
        }

        if (border.radius?.bottom?.left) {
            compilation.push(`border-bottom-left-radius: ${border.radius.bottom.left}px;`)
        }

        if (border.radius?.bottom?.right) {
            compilation.push(`border-bottom-right-radius: ${border.radius.bottom.right}px;`)
        }
    } else {
        compilation.push(`border-radius: ${border.radius};`)
    }

    if (compilation.length > 0 && border.fix) {
        // https://stackoverflow.com/questions/6312067/border-radius-background-color-cropped-border
        compilation.push('overflow: hidden;')
    }

    return compilation.join('')
}

const compileBorderCollapse = (
    border: NormalizedBorderProp | undefined
): string => {
    if (typeof border === 'undefined') {
        return ''
    }

    const compilation: string[] = []

    if (border.collapse) {
        compilation.push('border-collapse: collapse;')
    }

    return compilation.join('')
}

type UnnormalizedBorderProp = NormalizedBorderProp | object | string | number

type NormalizedBorderProp = {
    top?: NormalizedChildBorderProp,
    bottom?: NormalizedChildBorderProp,
    left?: NormalizedChildBorderProp,
    right?: NormalizedChildBorderProp,
    radius?: NormalizedRadiusProp,
    fix?: boolean,
    collapse?: boolean
}

type UnnormalizedParentBorderProp = object | string | number

type NormalizedParentBorderProp = NormalizedChildBorderProp

type NormalizedChildBorderProp = {
    width?: number,
    style?: string,
    color?: string
}

type UnnormalizedRadiusProp = NormalizedRadiusProp | string | number

type NormalizedRadiusProp = {
    top?: {
        left?: number,
        right?: number
    },
    bottom?: {
        left?: number,
        right?: number
    }
} | string

export type {
    UnnormalizedBorderProp,
    NormalizedBorderProp,
    UnnormalizedParentBorderProp,
    NormalizedParentBorderProp
}

export {
    normalizeBorder,
    normalizeParentBorder,
    normalizeChildBorder,
    normalizeBorderRadius,
    compileBorderWidth,
    compileBorderStyle,
    compileBorderColor,
    compileBorderRadius,
    compileBorderCollapse,
    compileBorder
}