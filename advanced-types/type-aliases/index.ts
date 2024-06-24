type User = {
    id: number
    name: string;
    age: number;
    skills: string[]
}

type Role = {
    id: number,
    name: string,
}

type UserWithRole = {
    user: User,
    role: Role
};

type httpMethod = 'post' | 'get';

function fetchWithAuth(url: string, method: httpMethod): void {

}

let user1: UserWithRole = {
    user: {
        id: 1,
        name: 'John',
        age: 30,
        skills: ['html', 'css', 'js']
    },
    role: {
        id: 1,
        name: 'admin'
    }
}