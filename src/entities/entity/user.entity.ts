import { ApiModelProperty } from '@nestjs/swagger';

export class user {
    @ApiModelProperty()
    username: string;
    @ApiModelProperty()
    password: string;
    @ApiModelProperty()
    date: Date;
}
