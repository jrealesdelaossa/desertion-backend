import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CausaService } from './causa.service';
import { CreateCausaDto } from './dto/create-causa.dto';
import { UpdateCausaDto } from './dto/update-causa.dto';

@Controller('causa')
export class CausaController {
  constructor(private readonly causaService: CausaService) {}

  @Post()
  create(@Body() createCausaDto: CreateCausaDto) {
    return this.causaService.create(createCausaDto);
  }

  @Get()
  findAll() {
    return this.causaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.causaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCausaDto: UpdateCausaDto) {
    return this.causaService.update(id, updateCausaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.causaService.remove(id);
  }
}
