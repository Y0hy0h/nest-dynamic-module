import { Controller, Get } from '@nestjs/common';
import { DependentService } from './dependent.service';

@Controller('dependent')
export class DependentController {
  constructor(
    private service: DependentService,
  ) {}

  @Get()
  test() {
    return this.service.test();
  }
}
