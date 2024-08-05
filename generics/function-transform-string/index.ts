/*
    Необходимо написать функцию, которая принимает любой тип и возвращает его строковое предстваление.
 */

function toString<T>(data: T): string | undefined {
    if (Array.isArray(data)) {
        return data.toString()
    }

    switch (typeof data) {
        case 'string':
            return data
        case 'number':
        case 'symbol':
        case 'boolean':
        case 'bigint':
        case 'function':
            return data.toString()
        case 'object':
            if (data === null) {
                return 'null'
            }
            return JSON.stringify(data)
        default:
            return undefined
    }
}

console.log(toString(3))
console.log(toString(true))
console.log(toString(['a', 'b']))
console.log(toString({a: 1}))