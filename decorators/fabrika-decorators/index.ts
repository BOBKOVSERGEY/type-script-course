interface IUserService {
    users: number
    getUserInDatabase(): number
}
//@nullUser
//@threeUserAdvanced
//@setUsers(5)
@setUserAdvanced(4)
class UserService implements IUserService {
    users: number = 1000;

    getUserInDatabase(): number {
        return this.users
    }

}

function nullUser(target: Function) {
    target.prototype.users = 0
}

function setUsers(users: number) {
    return (target: Function) => {
        target.prototype.users = users
    }
}

function setUserAdvanced(users: number) {
    return <T extends { new(...args: any[]): {}}>(constructor: T) => {
        return class extends constructor {
            users = users
        }
    }
}

function threeUserAdvanced<T extends { new(...args: any[]): {}}>(constructor: T) {
    return class extends constructor {
        users: number = 3
    }
}


console.log(new UserService().getUserInDatabase());
