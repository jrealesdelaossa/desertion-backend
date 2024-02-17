import { IsString, IsMongoId } from 'class-validator';

export class CreateCausaDto {
  @IsString()
  nombre: string;
  @IsString()
  descripcion: string;
  @IsMongoId()
  riesgo: string;
}
