import { Injectable, NotFoundException } from "@nestjs/common";


@Injectable()
export class ConvidadosService{
    private convidados = [
        {id:1, nome:'Alice', idade: 23},
        {id:2, nome: 'Enzo', idade: 19},
        {id: 3, nome: 'Jamily', idade: 23}
    ]

    findAll() {
        return this.convidados;
    }

    findOne(id: number) {
        const convidado = this.convidados.find((c) => c.id === id);
        if(!convidado) throw new NotFoundException(`Convidado de id ${id} não encontrado`);
        return convidado;
    }

    atualizarIdade(id: number, idade: number) {
        const convidado = this.findOne(id);
        convidado.idade = idade;
        return convidado;
    }

    removerConvidado(id:number) {
        const index = this.convidados.findIndex((c) => c.id === id);
        if(index === -1) 
            throw new NotFoundException(`COnvidado com ID ${id} não encontrado`);
        this.convidados.splice(index, 1);
    }
}