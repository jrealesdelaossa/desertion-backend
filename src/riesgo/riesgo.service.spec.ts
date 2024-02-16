import { Test, TestingModule } from '@nestjs/testing';
import { RiesgoService } from './riesgo.service';

describe('RiesgoService', () => {
  let service: RiesgoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RiesgoService],
    }).compile();

    service = module.get<RiesgoService>(RiesgoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
