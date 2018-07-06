import { Module } from '@nestjs/common';
import { DependentService } from './dependent.service';
import { DependentController } from './dependent.controller';
import { LibraryModule } from '../library/library.module';

@Module({
  imports: [
    LibraryModule,
  ],
  providers: [DependentService],
  controllers: [DependentController],
})
export class DependentModule {}
