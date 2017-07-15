import { SNS } from 'aws-sdk';
import { message } from '../../common/message';
export async function publish(): Promise<void> {
    const sns = new SNS();
    const result = await sns.publish({
        TopicArn: process.env.SNS_ARN,
        MessageStructure: 'json',
        Message: JSON.stringify({
            default: message,
        }),
    }).promise();

    if (result && result.MessageId) {
        console.log('Dispatch succeeded');
    }
}