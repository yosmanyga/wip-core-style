"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fields = void 0;
const Interact_1 = require("./Interact");
const Pseudo_1 = require("./Pseudo");
const Spacial_1 = require("./Spacial");
const Text_1 = require("./Text");
const Visual_1 = require("./Visual");
exports.fields = ([
    ...Interact_1.interactFields,
    ...Pseudo_1.pseudoFields,
    ...Spacial_1.spacialFields,
    ...Text_1.textFields,
    ...Visual_1.visualFields,
]);
