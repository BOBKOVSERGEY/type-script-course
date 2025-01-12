import { time, timeStamp } from "console";

function logMiddleware<T>(data: T): T {
    console.log(data);
    return data
}

const res = logMiddleware<number>(10);

function getSplitHalf<T>(data: Array<T>): Array<T> {
    const length = data.length / 2;
    return data.splice(0, length)
}

getSplitHalf<number>([1,4,5])

const stplit:<T>(data: Array<T>) => Array<T> = getSplitHalf;
const stplit2:<Y>(data: Array<Y>) => Array<Y> = getSplitHalf;

interface ILogLine<T> {
    timeStamp: Date
    data: T
}

type LogLineType<T> = {
    timeStamp: Date
    data: T
}

const logLine: ILogLine<{a: number}> = {
    timeStamp: new Date(),
    data: {
        a: 1
    }
}