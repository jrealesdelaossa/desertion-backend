import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RiesgoService } from './riesgo.service';
import { CreateRiesgoDto } from './dto/create-riesgo.dto';
import { UpdateRiesgoDto } from './dto/update-riesgo.dto';

@Controller('riesgo')
export class RiesgoController {
  constructor(private readonly riesgoService: RiesgoService) {}

  @Post()
  create(@Body() createRiesgoDto: CreateRiesgoDto) {
    return this.riesgoService.create(createRiesgoDto);
  }

  @Get()
  findAll() {
    return this.riesgoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.riesgoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRiesgoDto: UpdateRiesgoDto) {
    return this.riesgoService.update(+id, updateRiesgoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.riesgoService.remove(+id);
  }
}
