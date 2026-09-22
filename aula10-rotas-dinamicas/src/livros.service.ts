import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class LivrosService {
    private livros = [
        {id: 1, titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien'},
        {id: 2, titulo: '1984', autor: 'George Orwell'},
        {id: 3, titulo: 'Dom casmurro', autor: 'Machado de Assis'},
        {id: 4, titulo: 'Cem Anos de Solidão', autor: 'Gabriel García Márquez'},
        {id: 5, titulo: 'Harry Potter e a Pedra Filosofal', autor: 'J.K. Rowling'},
    ];

    encontrarPorId(id: number) {
        const livro = this.livros.find(livro => livro.id === id);

        if (!livro) {
            throw new NotFoundException(`Livro com ID ${id} não localizado em nosso acervo`);
        }
        return livro;
    }
}