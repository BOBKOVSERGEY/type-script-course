// у класса могут быть данные не понятного типа и ошибки непонятного типа
/*class Resp<D, E> {
    data?: D
    error?: E

    constructor(data?: D, error?: E) {
        if (data) {
            this.data = data
        }
        if (error) {
            this.error = error
        }
    }
}

const res = new Resp<string, number>('data', 0)

class HTTPResp<F> extends Resp<string, number> {
    status: number = 200
}*/