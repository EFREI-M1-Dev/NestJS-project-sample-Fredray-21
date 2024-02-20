import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigurationService {
  constructor(private options: Record<string, string>) {}

  getVal(key: string): string {
    return this.options[key];
  }
}