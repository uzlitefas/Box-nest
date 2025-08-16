import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
} from '@nestjs/common';
import { BoxsService } from './box.service';
import { CreateBoxDto } from './dto/create.box.dto';
import { UpdateBoxDto } from './dto/update.box.dto';

@Controller('box')
export class BoxsController {
  constructor(private readonly BoxsService: BoxsService) {}

  @Get()
  findAll() {
    return this.BoxsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.BoxsService.findOne(Number(id));
  }

  @Post()
  create(@Body() createBoxDto: CreateBoxDto) {
    return this.BoxsService.create(createBoxDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBoxDto: UpdateBoxDto) {
    return this.BoxsService.update(Number(id), updateBoxDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.BoxsService.remove(Number(id));
  }
}
