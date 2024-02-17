import { IsString } from 'class-validator';

export class CreateRiesgoDto {
  @IsString()
  nombre: string;
  @IsString()
  descripcion: string;
}
