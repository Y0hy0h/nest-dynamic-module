import { DynamicModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DependentModule } from './dependent/dependent.module';

@Module({
  providers: [
    AppService,
  ],
  controllers: [
    AppController,
  ],
})
export class AppModule {
  static dynamic(): DynamicModule {
    return {
      module: AppModule,
      imports: [
        DependentModule,
      ],
    };
  }
}

