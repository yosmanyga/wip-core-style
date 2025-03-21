import * as colorString from 'color-string';

export const normalizeBackground = (
    background: UnnormalizedBackgroundProp | undefined
): NormalizedBackgroundProp | undefined => {
    if (typeof background === 'undefined') {
        return background;
    }

    // Already normalized?
    if (
        typeof background === 'object'
    ) {
        return background;
    }

    // Is a color?
    if (
        typeof background === 'string'
        && colorString.get(background)
    ) {
        return {
            color: background
        }
    }

    throw new Error(`Background type not recognized: ${background}`)
}

export const compileBackground = (
    background?: NormalizedBackgroundProp,
): string => {
    if (typeof background === 'undefined') {
        return ''
    }

    // Is a color?
    if (
        typeof background === 'object'
        && 'color' in background
    ) {
        return `background-color: ${background.color};`
    }

    return '';
}

export type UnnormalizedBackgroundProp = NormalizedBackgroundProp
    | number
    | string

export type NormalizedBackgroundProp =
// Url, imported image
    | NormalizedBackgroundAsImageProp
    // Color
    | NormalizedBackgroundAsColorProp

type NormalizedBackgroundAsImageProp = {
    image:
    // Color, url, local image (React Web)
        string
        // Imported image (React Native)
        | number,
    resize?:
        | string
        // A number to represent length (Web)
        | number
}

type NormalizedBackgroundAsColorProp = {
    color: string
}
