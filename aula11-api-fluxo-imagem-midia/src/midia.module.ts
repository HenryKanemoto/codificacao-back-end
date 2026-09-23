import { Module } from '@nestjs/common';
import { MidiaController } from './midia.controller.js';

@Module({
  imports: [],
  controllers: [MidiaController],
})
export class MidiaModule {
    
}