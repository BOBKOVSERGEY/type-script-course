"use strict";
// позволяет вытащить ключи из объекта или интерфейса
/*interface IUser {
    name: string
    age: number
}

type KeysOfIUser = keyof IUser

const key: KeysOfIUser = 'name'

function getValue<T, K extends keyof T >(obj: T, key: K) {
    return obj[key]
}

const user: IUser = {
    name: 'John',
    age: 30
}

const userName = getValue(user, 'name')

console.log(userName)*/
