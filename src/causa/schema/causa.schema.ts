import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Riesgo } from 'src/riesgo/schema/riesgo.schema';

export type CausaDocument = HydratedDocument<Causa>;

@Schema()
export class Causa {
  @Prop()
  nombre: string;

  @Prop()
  descripcion: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Riesgo' })
  riesgo: Riesgo;
}

export const CausaSchema = SchemaFactory.createForClass(Causa);
