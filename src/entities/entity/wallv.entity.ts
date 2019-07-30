import { ApiModelProperty } from '@nestjs/swagger';

export class Wallv {
    @ApiModelProperty()
    title: string;
    @ApiModelProperty()
    input: string;
    @ApiModelProperty()
    output: string;
    @ApiModelProperty()
    keyword: string;
    @ApiModelProperty()
    category: string;
    @ApiModelProperty()
    parentid: string;
}
