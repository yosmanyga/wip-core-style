"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileBorder = exports.compileBorderCollapse = exports.compileBorderRadius = exports.compileBorderColor = exports.compileBorderStyle = exports.compileBorderWidth = exports.normalizeBorderRadius = exports.normalizeChildBorder = exports.normalizeParentBorder = exports.normalizeBorder = void 0;
const normalizeBorder = (border) => {
    if (typeof border === 'undefined') {
        return border;
    }
    const parent = normalizeParentBorder(border);
    return {
        top: normalizeChildBorder(border['top'], parent),
        right: normalizeChildBorder(border['right'], parent),
        bottom: normalizeChildBorder(border['bottom'], parent),
        left: normalizeChildBorder(border['left'], parent),
        radius: normalizeBorderRadius(border['radius']),
        fix: !!border['fix'],
        collapse: !!border['collapse']
    };
};
exports.normalizeBorder = normalizeBorder;
const normalizeParentBorder = (border) => {
    switch (typeof border) {
        case 'undefined': {
            return {
                width: undefined,
                style: undefined,
                color: undefined
            };
        }
        case 'number': {
            return {
                width: border,
                style: 'solid',
                color: 'black'
            };
        }
        case 'string': {
            const parts = border.split(' ');
            return {
                width: parseInt(parts[0]),
                style: parts[1],
                color: parts[2]
            };
        }
        case 'object': {
            return {
                width: border && border['width'],
                style: border && (typeof border['style'] !== 'undefined'
                    ? border['style']
                    : (typeof border['width'] !== 'undefined'
                        ? 'solid'
                        : undefined)),
                color: border && (typeof border['color'] !== 'undefined'
                    ? border['color']
                    : (typeof border['width'] !== 'undefined'
                        ? 'black'
                        : undefined))
            };
        }
        default:
            throw Error(`Unknown border: ${border}`);
    }
};
exports.normalizeParentBorder = normalizeParentBorder;
const normalizeChildBorder = (child, parent) => {
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
                width: child && typeof child['width'] !== 'undefined'
                    ? child['width']
                    : parent.width,
                style: child && typeof child['style'] !== 'undefined' && typeof child['width'] !== 'undefined'
                    ? child['style']
                    : parent.style,
                color: child && typeof child['color'] !== 'undefined'
                    ? child['color']
                    : parent.color
            };
            break;
        default:
            throw Error(`Unknown child: ${child}`);
    }
    // Patch for Web
    if (normalization.width) {
        normalization = {
            ...normalization,
            color: normalization.color || 'black',
            style: normalization.style || 'solid',
        };
    }
    return normalization;
};
exports.normalizeChildBorder = normalizeChildBorder;
const normalizeBorderRadius = (radius) => {
    if (typeof radius === 'undefined') {
        return radius;
    }
    if (typeof radius === 'string') {
        return radius;
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
        };
    }
    return radius;
};
exports.normalizeBorderRadius = normalizeBorderRadius;
const compileBorder = (border) => {
    const compilation = [
        compileBorderWidth(border),
        compileBorderStyle(border),
        compileBorderColor(border),
        compileBorderRadius(border),
        compileBorderCollapse(border)
    ];
    return compilation.join('');
};
exports.compileBorder = compileBorder;
const compileBorderWidth = (border) => {
    if (typeof border === 'undefined') {
        return '';
    }
    const compilation = [];
    if (typeof border.top?.width !== 'undefined') {
        compilation.push(`border-top-width: ${border.top.width}px;`);
    }
    if (typeof border.bottom?.width !== 'undefined') {
        compilation.push(`border-bottom-width: ${border.bottom.width}px;`);
    }
    if (typeof border.left?.width !== 'undefined') {
        compilation.push(`border-left-width: ${border.left.width}px;`);
    }
    if (typeof border.right?.width !== 'undefined') {
        compilation.push(`border-right-width: ${border.right.width}px;`);
    }
    return compilation.join('');
};
exports.compileBorderWidth = compileBorderWidth;
const compileBorderStyle = (border) => {
    if (typeof border === 'undefined') {
        return '';
    }
    const compilation = [];
    if (typeof border?.top?.style !== 'undefined') {
        compilation.push(`border-top-style: ${border.top.style};`);
    }
    if (typeof border?.bottom?.style !== 'undefined') {
        compilation.push(`border-bottom-style: ${border.bottom.style};`);
    }
    if (typeof border?.left?.style !== 'undefined') {
        compilation.push(`border-left-style: ${border.left.style};`);
    }
    if (typeof border?.right?.style !== 'undefined') {
        compilation.push(`border-right-style: ${border.right.style};`);
    }
    return compilation.join('');
};
exports.compileBorderStyle = compileBorderStyle;
const compileBorderColor = (border) => {
    if (typeof border === 'undefined') {
        return '';
    }
    const compilation = [];
    if (typeof border.top?.color !== 'undefined') {
        const color = border.top.color;
        compilation.push(`border-top-color: ${color};`);
    }
    if (typeof border.bottom?.color !== 'undefined') {
        const color = border.bottom.color;
        compilation.push(`border-bottom-color: ${color};`);
    }
    if (typeof border.left?.color !== 'undefined') {
        const color = border.left.color;
        compilation.push(`border-left-color: ${color};`);
    }
    if (typeof border.right?.color !== 'undefined') {
        const color = border.right.color;
        compilation.push(`border-right-color: ${color};`);
    }
    return compilation.join('');
};
exports.compileBorderColor = compileBorderColor;
const compileBorderRadius = (border) => {
    if (typeof border === 'undefined'
        || typeof border.radius === 'undefined') {
        return '';
    }
    const compilation = [];
    if (typeof border.radius === 'object') {
        if (border.radius?.top?.left) {
            compilation.push(`border-top-left-radius: ${border.radius.top.left}px;`);
        }
        if (border.radius?.top?.right) {
            compilation.push(`border-top-right-radius: ${border.radius.top.right}px;`);
        }
        if (border.radius?.bottom?.left) {
            compilation.push(`border-bottom-left-radius: ${border.radius.bottom.left}px;`);
        }
        if (border.radius?.bottom?.right) {
            compilation.push(`border-bottom-right-radius: ${border.radius.bottom.right}px;`);
        }
    }
    else {
        compilation.push(`border-radius: ${border.radius};`);
    }
    if (compilation.length > 0 && border.fix) {
        // https://stackoverflow.com/questions/6312067/border-radius-background-color-cropped-border
        compilation.push('overflow: hidden;');
    }
    return compilation.join('');
};
exports.compileBorderRadius = compileBorderRadius;
const compileBorderCollapse = (border) => {
    if (typeof border === 'undefined') {
        return '';
    }
    const compilation = [];
    if (border.collapse) {
        compilation.push('border-collapse: collapse;');
    }
    return compilation.join('');
};
exports.compileBorderCollapse = compileBorderCollapse;
