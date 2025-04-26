/*interface IUserService {
    user: number
    getUserInDatabase(): number
}

class UserService implements IUserService {
    user: number = 1000;

    getUserInDatabase(): number {
        return this.user
    }

}

function nullUser(obj: IUserService) {
    obj.user = 0
    return obj
}

function logUser(obj: IUserService) {
    console.log('Users: ' + obj.user)
    return obj
}

console.log(new UserService().getUserInDatabase());
console.log(nullUser(new UserService()).getUserInDatabase())
console.log(logUser(nullUser(new UserService())).getUserInDatabase())*/