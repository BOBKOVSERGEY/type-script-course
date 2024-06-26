"use strict";
const userTech = {
    login: 'user',
};
function multiple(first, second) {
    return first * second;
}
function testPass(user) {
    var _a;
    const t = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type;
}
function test(param) {
    // если param null или undefined то выполни multiple
    const t = param !== null && param !== void 0 ? param : multiple(5, 5);
}
