import Reporter from '@wdio/reporter'
export class CustomReporter extends Reporter {
    constructor ({}) {
        super({});
        console.log('IIIIIIIIIIIIIIII')
    }
}