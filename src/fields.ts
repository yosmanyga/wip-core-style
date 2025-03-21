import {interactFields} from './Interact';
import {pseudoFields} from './Pseudo';
import {spacialFields} from './Spacial';
import {textFields} from './Text';
import {visualFields} from './Visual';

export type FieldsType = {
    [key in typeof fields[number]]?: unknown;
};

export const fields: Array<string> = ([
    ...interactFields,
    ...pseudoFields,
    ...spacialFields,
    ...textFields,
    ...visualFields,
]);
