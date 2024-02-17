import { Module } from '@nestjs/common';
import { CausaService } from './causa.service';
import { CausaController } from './causa.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Causa, CausaSchema } from './schema/causa.schema';
import { RiesgoModule } from 'src/riesgo/riesgo.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Causa.name, schema: CausaSchema }]),
    RiesgoModule,
  ],
  controllers: [CausaController],
  providers: [CausaService],
})
export class CausaModule {}
