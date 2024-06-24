interface UserNew2 {
    login: string
    password?: string
}

const userTech: UserNew2 = {
    login: 'user',

}

function multiple(first: number, second: number): number {
    return first * second;
}

interface UserPro {
    login: string
    password?: {
        type: 'primary' | 'secondary'
    }
}

function testPass(user: UserPro) {
    const t = user.password?.type
}

function test(param?:string) {
    // если param null или undefined то выполни multiple
    const t = param ?? multiple(5,5);
}