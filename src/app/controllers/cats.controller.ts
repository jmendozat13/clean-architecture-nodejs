import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from '../entities/dto/create-cat-dto';
import { CatsUseCase } from '../usecases/usecase/cats.usecase';
import { Cat } from '../entities/interfaces/cat.interfaces';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsUseCase: CatsUseCase) { }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        await this.catsUseCase.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsUseCase.findAll();
    }
}
