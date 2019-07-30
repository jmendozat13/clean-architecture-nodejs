import { Test, TestingModule } from '@nestjs/testing';
import { MessagehistoryController } from './messagehistory.controller';

describe('Messagehistory Controller', () => {
  let controller: MessagehistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessagehistoryController],
    }).compile();

    controller = module.get<MessagehistoryController>(MessagehistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
