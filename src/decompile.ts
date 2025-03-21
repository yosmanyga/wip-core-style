import transform, {StyleTuple} from 'css-to-react-native'

const compile = (input: string) => {
    const e = document.createElement("div");
    e.setAttribute("style", input);

    let output: StyleTuple[] = [];

    for (let i = 0; i < e.style.length; i++) {
        const name = e.style[i];

        const tuple: StyleTuple = [name, e.style.getPropertyValue(name)]

        output.push(tuple);
    }

    return output
}

const decompile = (input: string) => {
    return transform(
        compile(input)
    )
}

export default decompile
