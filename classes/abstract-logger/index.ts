abstract class Logger {
    abstract log(message: string): void

    printDate(date: Date) {
        console.log(date.toString())
    }
}

