"use strict";
/* interface IUserService {
    users: number
    getUserInDatabase(): number
}

class UserService implements IUserService {
    @Max(100)
    users: number = 1000;

    getUserInDatabase(): number {
        throw new Error('Error-L')
    }

}

function Max(max: number) {
    return (
        target: Object,
        propertyKey: string | symbol,
    ) => {
        let value: number
        const setter = (newValue: number) => {
            if (newValue > max) {
                console.log(`dont exceed ${max}`)
                //value = max
            } else {
                value = newValue
            }
        }

        const getter = () => {
            return value
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        })
    }
}


const userService = new UserService()
userService.users = 1

console.log(userService.users)

userService.users = 101

console.log(userService.users) */ 
