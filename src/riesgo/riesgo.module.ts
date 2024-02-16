import { Module } from '@nestjs/common';
import { RiesgoService } from './riesgo.service';
import { RiesgoController } from './riesgo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Riesgo, RiesgoSchema } from './schema/riesgo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Riesgo.name, schema: RiesgoSchema }]),
  ],
  controllers: [RiesgoController],
  providers: [RiesgoService],
})
export class RiesgoModule {}
