import { ApiModelProperty } from '@nestjs/swagger';
export class KendalBotResponse {
    @ApiModelProperty()
    outputmessage: string;
    options: {
        title: string;
        query: string;
    };
    constructor(message: string) {
        this.outputmessage = message;
    }
}
