"use strict";
/*import "reflect-metadata";

interface IUserService {
    users: number
    getUserInDatabase(): number
}

class UserService implements IUserService {

    users: number;

    getUserInDatabase(): number {
        return this.users
    }

    setUserInDatabase(@Positive() num: number): void {
        this.users = num
    }

}

function Positive() {
    return (
        target: Object,
        propertyKey: string | symbol,
        _: number
    ) => {
        console.log(Reflect.getOwnMetadata('design:type', target, propertyKey))
        console.log(Reflect.getOwnMetadata('design:paramtypes', target, propertyKey))
        console.log(Reflect.getOwnMetadata('design:returntype', target, propertyKey))
    }
}


const userService = new UserService()

console.log(userService)*/
