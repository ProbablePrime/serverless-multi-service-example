import { SNS } from 'aws-sdk';
export function listen(event: any): void {
    if (event.Records && event.Records[0] && event.Records[0].Sns) {
        const message: SNS.PublishInput = event.Records[0].Sns;
        console.log(`Publish service says ${message.Message}`);
    }
}