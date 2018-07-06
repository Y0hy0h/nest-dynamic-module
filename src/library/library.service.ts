import { Injectable } from '@nestjs/common';

@Injectable()
export class LibraryService {
  prefix() {
    return 'prefix';
  }
}
