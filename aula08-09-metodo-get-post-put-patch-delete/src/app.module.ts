import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppService } from './app.service.js';
import { AppController } from './app.controller.js';
import { ConvidadosService } from './convidados.service.js';
import { ConvidadosController } from './convidados.controller.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [],
  controllers: [AppController, ConvidadosController],
  providers: [AppService, ConvidadosService],
})
export class AppModule {}
