"use strict";
function getUser(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}`;
}
const user = {
    firstname: 'Anton',
    surname: 'Larichev',
    city: 'Moscow',
    age: 33,
    skills: {
        dev: true,
        devops: true
    }
};
console.log(getUser(user));
