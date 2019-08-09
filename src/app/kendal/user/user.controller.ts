import { Controller, Post, UsePipes, ValidationPipe, Body, HttpStatus, HttpException, Get} from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { userUseCase } from '../../../usecases/usecase/user.usecase';
import { user } from '../../../entities/entity/user.entity';
import { UserDto } from '../../../entities/dto/user.dto';
import { IUser } from 'src/entities/interfaces/user.interfaces';

@Controller('user')
@ApiUseTags('User')
export class UserController {
    constructor(private readonly userUseCase: userUseCase) { }

    @Post()
    @ApiOperation({ title: 'Add KendalBot user or maintainer user' })
    @ApiResponse({
        status: HttpStatus.CREATED,
        description: 'The record has been successfully created.',
        type: user,
    })
    @ApiResponse({
        status: 500,
        description: 'Server error',
    })
    @UsePipes(new ValidationPipe())
    async create(@Body() createUserDto: UserDto) {
        try {
            const user = await this.userUseCase.create(createUserDto);
            return user;
        } catch (err) {
            throw new HttpException({ status: HttpStatus.INTERNAL_SERVER_ERROR, error: err.message },
                HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get()
    @ApiOperation({ title: 'Return all logical knowledge of user' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'The found record',
        type: user,
    })
    async findAll(): Promise<IUser[]> {
        return await this.userUseCase.findAll();
    }
}
