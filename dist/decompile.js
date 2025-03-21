"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const css_to_react_native_1 = require("css-to-react-native");
const compile = (input) => {
    const e = document.createElement("div");
    e.setAttribute("style", input);
    let output = [];
    for (let i = 0; i < e.style.length; i++) {
        const name = e.style[i];
        const tuple = [name, e.style.getPropertyValue(name)];
        output.push(tuple);
    }
    return output;
};
const decompile = (input) => {
    return (0, css_to_react_native_1.default)(compile(input));
};
exports.default = decompile;
