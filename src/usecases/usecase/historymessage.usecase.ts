import { Injectable } from '@nestjs/common';
import { HistoryMessageRepository } from '../repository/historymessage.repository';

@Injectable()
export class HistoryMessageUseCase {

constructor(private readonly historymsgrepository: HistoryMessageRepository) {}
}
