import { Test, TestingModule } from '@nestjs/testing';
import { WallvController } from './wallv.controller';

describe('Wallv Controller', () => {
  let controller: WallvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WallvController],
    }).compile();

    controller = module.get<WallvController>(WallvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
