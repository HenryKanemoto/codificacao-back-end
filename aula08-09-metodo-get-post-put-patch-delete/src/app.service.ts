import { Injectable } from '@nestjs/common';
import { ConvidadosController } from './convidados.controller.js';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Servidor Nest.js Ativo';
  }
}
