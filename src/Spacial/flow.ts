export const normalizeFlow = (
    flow?: UnnormalizedFlowProp
): NormalizedFlowProp | undefined => {
    if (typeof flow === 'undefined' || flow === null) {
        return flow
    }

    if (typeof flow === 'object') {
        return flow
    }

    const split = flow.split(' ')

    return {
        direction: split[0] as DirectionProp,
        wrap: split[1] === 'wrap'
    }
}

export const compileFlow = (
    flow?: NormalizedFlowProp
): string => {
    if (typeof flow === 'undefined' || flow == null) {
        return ''
    }

    const compilation: string[] = []

    compilation.push('display: flex;')

    compilation.push(`flex-direction: ${flow.direction};`)

    compilation.push(`flex-wrap: ${flow.wrap ? 'wrap' : 'nowrap'};`)

    return compilation.join('')
}

export type UnnormalizedFlowProp = NormalizedFlowProp | 'row' | 'row wrap' | 'row nowrap' | 'column'

export type NormalizedFlowProp = {
    direction: DirectionProp,
    wrap: WrapProp
}

type DirectionProp = 'row' | 'column'

type WrapProp = boolean
