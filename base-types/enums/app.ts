enum StatusCode {
    SUCCESS = 1,
    IN_PROCESS,
    FAILED
}

const result = {
    message: 'Payment success',
    statusCode: StatusCode.SUCCESS
}

if (result.statusCode === StatusCode.SUCCESS) {

}
