interface UserNew {
    name: string
    age: number,
    skills: string[],

    log: (id: number) => string
}

interface RoleNew {
    id: number,
    name: string
}

interface UserNewWithRole extends UserNew, RoleNew {
    user: UserNew,
    role: RoleNew
}
/*
let userNew: UserNewWithRole = {
    user: {
        name: "",
        age: 0,
        skills: [],
        log: function (id: number): string {
            throw new Error("Function not implemented.")
        }
    },
    role: {
        id: 0,
        name: ""
    }
}*/

interface UserDic {
    [index: number]: UserNew
}