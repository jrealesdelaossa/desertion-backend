import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RiesgoDocument = HydratedDocument<Riesgo>;

@Schema()
export class Riesgo {
  @Prop()
  nombre: string;

  @Prop()
  descripcion: string;
}

export const RiesgoSchema = SchemaFactory.createForClass(Riesgo);
