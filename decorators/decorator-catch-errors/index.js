"use strict";
/*interface IUserService {
    users: number
    getUserInDatabase(): number
}

class UserService implements IUserService {
    users: number = 1000;

    @Catch()
    getUserInDatabase(): number {
        throw new Error('Error-L')
    }

}

function Catch(rethrow: boolean = false) {
    return (
        target: Object,
        propertyKey: string | symbol,
        descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
    ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
        const method = descriptor.value

        descriptor.value = async (...args: any[]) => {
            try {
                return await method?.apply(target, args)

            } catch (e) {
                if (e instanceof Error) {
                    console.log(e.message)

                    if (rethrow) {
                        throw e
                    }
                }
            }
        }
    }
}


console.log(new UserService().getUserInDatabase());
*/
