import { Injectable } from '@nestjs/common';
import { CreateRiesgoDto } from './dto/create-riesgo.dto';
import { UpdateRiesgoDto } from './dto/update-riesgo.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Riesgo } from './schema/riesgo.schema';

@Injectable()
export class RiesgoService {
  constructor(@InjectModel(Riesgo.name) private riesgoModel: Model<Riesgo>) {}
  create(createRiesgoDto: CreateRiesgoDto): Promise<Riesgo> {
    const createdRiesgo = new this.riesgoModel(createRiesgoDto);
    return createdRiesgo.save();
  }

  findAll() {
    return `This action returns all riesgo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} riesgo`;
  }

  update(id: number, updateRiesgoDto: UpdateRiesgoDto) {
    return `This action updates a #${id} riesgo`;
  }

  remove(id: number) {
    return `This action removes a #${id} riesgo`;
  }
}
