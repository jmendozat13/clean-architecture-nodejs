import { ApiModelProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class KendalBotDto {
    @ApiModelProperty({
        example: 'Hola Kendal',
        description: 'Message query by users',
    })
    @IsString()
    inputmessage: string;
}
