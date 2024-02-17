import { Injectable } from '@nestjs/common';
import { CreateCausaDto } from './dto/create-causa.dto';
import { UpdateCausaDto } from './dto/update-causa.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Causa } from './schema/causa.schema';

@Injectable()
export class CausaService {
  constructor(@InjectModel(Causa.name) private causaModel: Model<Causa>) {}
  create(createCausaDto: CreateCausaDto): Promise<Causa> {
    const createdCausa = new this.causaModel(createCausaDto);
    return createdCausa.save();
  }

  findAll() {
    return this.causaModel.find().populate('riesgo');
  }

  findOne(id: number) {
    return `This action returns a #${id} causa`;
  }

  update(id: string, updateCausaDto: UpdateCausaDto) {
    return this.causaModel.findByIdAndUpdate(id, updateCausaDto);
  }

  remove(id: string) {
    return this.causaModel.findByIdAndDelete(id);
  }
}
