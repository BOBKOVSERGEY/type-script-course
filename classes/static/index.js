"use strict";
class UserService {
    static getUser(id) {
        return UserService.db.find((user) => user.id === id);
    }
}
UserService.getUser(1);
