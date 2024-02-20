import { DynamicModule, Module } from '@nestjs/common';
import { ConfigurationService } from './configuration.service';

@Module({})
export class ConfigurationModule {
  static register(): DynamicModule {
    return {
      module: ConfigurationModule,
      providers: [
        {
          provide: ConfigurationService,
          useValue: new ConfigurationService({
            environment: process.env.NODE_ENV || 'development',
          }),
        },
      ],
    };
  }
}
