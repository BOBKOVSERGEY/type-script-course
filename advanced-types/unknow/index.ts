let input: unknown;

input = 3;
input = [1, 2, 3];
input = 'hello';

let resNew = input;

function run(i: unknown) {
    if (typeof i === 'number') {
        i++
    } else {
        i
    }
}

run(input)

async function getData() {
    try {
        await fetch('/data')
    } catch (error) {
        /*if (error instanceof Error) {
            console.log(error.message)
        }*/

        const e = error as Error
        console.log(e.message)
    }
}

type U1 = unknown | number;

type I1 = unknown & string;

