import { Controller, Post, UsePipes, Get, ValidationPipe, Body, HttpStatus, HttpException } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { KendalUseCase } from '../../usecases/usecase/kendal.usecase';
import { Kendal } from '../../entities/entity/kendal.entity';
import { CreateKendalDto } from '../../entities/dto/kendal.dto';
import { IKendal } from '../../entities/interfaces/kendal.interfaces';

@Controller('kendal')
@ApiUseTags('Kendal')
export class KendalController {
    constructor(private readonly kendalUseCase: KendalUseCase) { }
    @Post()
    @ApiOperation({ title: 'Add logical knowledge to Kendal' })
    @ApiResponse({
        status: HttpStatus.CREATED,
        description: 'The record has been successfully created.',
        type: CreateKendalDto,
    })
    @ApiResponse({
        status: 500,
        description: 'Server error',
    })
    @UsePipes(new ValidationPipe())
    async create(@Body() createKendalDto: CreateKendalDto) {
        try {
            const wallv = await this.kendalUseCase.create(createKendalDto);
            return wallv;
        } catch (err) {
            throw new HttpException({ status: HttpStatus.INTERNAL_SERVER_ERROR, error: err.message },
                HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get()
    @ApiOperation({ title: 'Return all logical knowledge of Kendal' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'The found record',
        type: Kendal,
    })
    async findAll(): Promise<IKendal[]> {
        return await this.kendalUseCase.findAll();
    }
}
