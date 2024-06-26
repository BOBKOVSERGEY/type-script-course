/*enum PaymentStatus {
    Success = 'success',
    Failed = 'failed'
}

interface IPayment {
    sum: number;
    from: number;
    to: number;
}
interface IPaymentRequest extends IPayment{

}

interface IDataSuccess extends IPayment{
    databaseId: number;
}

interface IDataFailed {
    errorMessage: string;
    errorCode: number;
}

interface IResponseSuccess {
    status: PaymentStatus.Success;
    data: IDataSuccess
}

interface IResponseFailed {
    status: PaymentStatus.Failed;
    data: IDataFailed
}
*/
/*function getStatus() : IResponseSuccess | IResponseFailed {

}*/
/*
type Res = IResponseSuccess | IResponseFailed;
type f = (res: Res) => number;

// create type guard
function isSuccess(res: Res): res is IResponseSuccess {
    return res.status === PaymentStatus.Success;
}

function getIdFromData(res: Res): number {
    if(isSuccess(res)) {
        return res.data.databaseId
    } else {
        throw new Error(res.data.errorMessage)
    }
}
*/

