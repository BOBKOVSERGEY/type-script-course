"use strict";
/*interface IUserService {
    users: number
    getUserInDatabase(): number
}

class UserService implements IUserService {

    private _users: number;

    @Log()
    set users(num: number) {
        this._users = num
    }
    get users() {
      return this._users
    }
    getUserInDatabase(): number {
        throw new Error('Error-L')
    }

}

function Log() {
    return (
        target: Object,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor
    ) => {
        const set = descriptor.set

        descriptor.set = (...args: any) => {
            console.log(args)
            set?.apply(target, args)
        }
    }
}


const userService = new UserService()
userService.users = 1

console.log(userService.users)*/
