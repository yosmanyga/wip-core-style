export const compileShadow = (
    shadow?: NormalizedShadowProp
): string => {
    if (typeof shadow === 'undefined' || shadow == null) {
        return ''
    }

    const compilation: string[] = []

    compilation.push(`box-shadow: ${shadow.width}px ${shadow.height}px ${shadow.radius}px ${shadow.color};`)

    if (typeof shadow.opacity !== 'undefined') {
        compilation.push(`shadow-opacity: ${shadow.opacity};`)
    }

    if (typeof shadow.elevation !== 'undefined') {
        compilation.push(`elevation: ${shadow.elevation};`)
    }

    return compilation.join('')
}

export type UnnormalizedShadowProp = NormalizedShadowProp

export type NormalizedShadowProp = {
    width: number,
    height: number,
    radius: number,
    color: string,
    opacity?: string,
    elevation?: number
}
