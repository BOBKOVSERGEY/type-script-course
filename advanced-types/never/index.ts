/*function generateError(message: string): never {
    throw new Error(message);
}

function dumpError(): never  {
    while (true) {
        console.log("hello");
    }
}

function rec(): never {
    return rec();
}

type paymentAction = 'refund' | 'checkout' | 'reject';

function processAction(action: paymentAction) {
    switch (action) {
        case "refund":
            // ...
            break
        case "checkout":
            // ...
            break;
        case "reject":
            // ...
            break;
        default:
            const _: never = action
            throw new Error("unknown action");
    }
}

function isString(x: string | number): boolean {
    return typeof x === "string";
}*/