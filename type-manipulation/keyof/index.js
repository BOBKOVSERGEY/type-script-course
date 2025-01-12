"use strict";
// позволяет вытащить ключи из объекта или интерфейса
const key = 'name';
function getValue(obj, key) {
    return obj[key];
}
const user = {
    name: 'John',
    age: 30
};
const userName = getValue(user, 'age');
console.log(userName);
