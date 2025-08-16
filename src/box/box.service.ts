import { Injectable } from '@nestjs/common';
import { CreateBoxDto } from './dto/create.box.dto';
import { UpdateBoxDto } from './dto/update.box.dto';
import { Box } from './interface/box.interface';

@Injectable()
export class BoxsService {
  private Boxs: Box[] = [];
  private idCounter = 1;

  findAll(): Box[] {
    return this.Boxs;
  }

  findOne(id: number): Box | undefined {
    return this.Boxs.find((Box) => Box.id === id);
  }

  create(createBoxDto: CreateBoxDto): Box {
    const newBox: Box = {
      id: this.idCounter++,
      title: createBoxDto.title,
      desc: createBoxDto.desc,
      completed: createBoxDto.complated ?? false,
    };
    this.Boxs.push(newBox);
    return newBox;
  }

  update(id: number, updateBoxDto: UpdateBoxDto): Box | null {
    const Box = this.findOne(id);
    if (!Box) return null;

    if (updateBoxDto.title !== undefined) {
      Box.title = updateBoxDto.title;
    }
    if (updateBoxDto.desc !== undefined) {
      Box.desc = updateBoxDto.desc;
    }
    if (updateBoxDto.complated !== undefined) {
      Box.completed = updateBoxDto.complated;
    }
    return Box;
  }

  remove(id: number): boolean | undefined {
    const index = this.Boxs.findIndex((Box) => Box.id === id);
    if (index === -1) return false;
    this.Boxs.splice(index, 1);
  }
}
