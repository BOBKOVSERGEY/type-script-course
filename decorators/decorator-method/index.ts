/*interface IUserService {
    users: number
    getUserInDatabase(): number
}

class UserService implements IUserService {
    users: number = 1000;

    @Log
    getUserInDatabase(): number {
        throw new Error('Error-L')
    }

}

function Log(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
): TypedPropertyDescriptor<(...args: any[]) => any> | void {
    console.log(target)
    console.log(propertyKey)
    console.log(descriptor)

    const oldValue = descriptor.value

    descriptor.value = () => {
        console.log('no error')
    }
}


console.log(new UserService().getUserInDatabase());*/