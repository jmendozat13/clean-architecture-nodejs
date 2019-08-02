import { ApiModelProperty } from '@nestjs/swagger';
export class KendalBotResponse {
    @ApiModelProperty()
    message: string;
    options: {
        title: string;
        query: string;
    };
    constructor(message: string) {
        this.message = message;
    }
}
