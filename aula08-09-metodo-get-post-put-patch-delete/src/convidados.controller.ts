import { Controller, Get, Post, Body, Patch, Param, HttpCode, Delete } from '@nestjs/common';
import { ConvidadosService } from './convidados.service.js';
import { CreateConvidadoDto } from './dto/create-convidado.dto.js';

@Controller('convidados')
export class ConvidadosController {
    constructor(private readonly convidadoService: ConvidadosService) {}

    @Get() 
    listarConvidados() {
        return this.convidadoService.findAll();
    }

    @Post() 
    criar(@Body() criarConvidado: CreateConvidadoDto){
        console.log(`[OPERADOR]: Novo convidado recebido: ${criarConvidado.nome}`);
        return {
            mensagem: `Convidado ${criarConvidado.nome} adicionado com sucesso`,
            dados: criarConvidado
        }       
    }

    @Patch()
    atuaLizarIdade(@Param('id') id: number, @Body('idade') idade: number) {
        console.log(`[ADMINISTRADOR]: Atualizando a idade do ID ${id}`);
        return this.convidadoService.atualizarIdade(+id, idade);
    }

    @Delete(':id')
    @HttpCode(204)
    remover(@Param ('id') id:number){
        return this.convidadoService.removerConvidado(+id);
    }
}