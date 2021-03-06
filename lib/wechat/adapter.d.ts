import { Adapter } from '../interface';
import { Config, IntegrationMessage } from '../model';
export declare class WechatClient extends Adapter {
    private cache;
    private wechatUrl;
    private getTokenUrl;
    private sendMessageUrl;
    private uploadMediaUrl;
    private sessionId;
    constructor(config: Config, serviceName?: string);
    send(message: IntegrationMessage): Promise<any>;
    uploadMedia(type: "image" | "voice" | "video" | "thumb", mediaUrl: string): Promise<string>;
    private getAccessToken();
    private getBuffer(media);
    private formatUrltoMedia(integration);
}
