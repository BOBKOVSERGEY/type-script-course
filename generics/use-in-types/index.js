"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logMiddleware(data) {
    console.log(data);
    return data;
}
const res = logMiddleware(10);
function getSplitHalf(data) {
    const length = data.length / 2;
    return data.splice(0, length);
}
getSplitHalf([1, 4, 5]);
const stplit = getSplitHalf;
const stplit2 = getSplitHalf;
const logLine = {
    timeStamp: new Date(),
    data: {
        a: 1
    }
};
