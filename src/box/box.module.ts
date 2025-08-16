import { Module } from '@nestjs/common';
import { BoxsService } from './box.service';
import { BoxsController } from './box.controller';

@Module({
  controllers: [BoxsController],
  providers: [BoxsService],
})
export class BoxsModule {}
