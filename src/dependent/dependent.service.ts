import { Injectable } from '@nestjs/common';
import { LibraryService } from '../library/library.service';

@Injectable()
export class DependentService {
  constructor(
    // TODO: Comment this out:
    private library: LibraryService,
  ) {}

  test() {
    return this.library.prefix() + 'test';
  }
}
