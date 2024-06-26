const n: null = null;

interface UserNext {
    name: string
}
function getUserNext(): UserNext {
    if(Math.random() > .5) {
        return {
            name: 'V'
        };
    } else {
        return {
            name: 'John'
        } as UserNext;
    }
}