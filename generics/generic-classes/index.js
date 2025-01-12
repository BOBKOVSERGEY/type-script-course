"use strict";
// у класса могут быть данные не понятного типа и ошибки непонятного типа
class Resp {
    constructor(data, error) {
        if (data) {
            this.data = data;
        }
        if (error) {
            this.error = error;
        }
    }
}
const res = new Resp('data', 0);
class HTTPResp extends Resp {
    constructor() {
        super(...arguments);
        this.status = 200;
    }
}
