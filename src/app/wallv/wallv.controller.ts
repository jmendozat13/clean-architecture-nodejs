import { Controller, Post, UsePipes, Get, ValidationPipe, Body, HttpStatus, HttpException } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { WallvUseCase } from '../../usecases/usecase/wallv.usecase';
import { Wallv } from '../../entities/entity/wallv.entity';
import { CreateWallvDto } from '../../entities/dto/wallv.dto';
import { IWallv } from '../../entities/interfaces/wallv.interfaces';

@Controller('wallv')
@ApiUseTags('wallv')
export class WallvController {
    constructor(private readonly wallvUseCase: WallvUseCase) { }
    @Post()
    @ApiOperation({ title: 'Add logical knowledge to Wallv' })
    @ApiResponse({
        status: HttpStatus.CREATED,
        description: 'The record has been successfully created.',
        type: CreateWallvDto,
    })
    @ApiResponse({
        status: 500,
        description: 'Server error',
    })
    @UsePipes(new ValidationPipe())
    async create(@Body() createWallvDto: CreateWallvDto) {
        try {
            const wallv = await this.wallvUseCase.create(createWallvDto);
            return wallv;
        } catch (err) {
            throw new HttpException({ status: HttpStatus.INTERNAL_SERVER_ERROR, error: err.message },
                HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get()
    @ApiOperation({ title: 'Return all logical knowledge of Wallv' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'The found record',
        type: Wallv,
    })
    async findAll(): Promise<IWallv[]> {
        return this.wallvUseCase.findAll();
    }
}
