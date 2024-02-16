import { Test, TestingModule } from '@nestjs/testing';
import { RiesgoController } from './riesgo.controller';
import { RiesgoService } from './riesgo.service';

describe('RiesgoController', () => {
  let controller: RiesgoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RiesgoController],
      providers: [RiesgoService],
    }).compile();

    controller = module.get<RiesgoController>(RiesgoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
