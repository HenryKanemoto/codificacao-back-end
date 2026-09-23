import { Controller, Post, UseInterceptors, UploadedFile, BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';
import { url } from 'inspector';

@Controller('midia')
export class MidiaController {
    @Post('upload')
    @UseInterceptors(
        FileInterceptor('arquivo', {
            storage: diskStorage({
                destination: './uploads',
                filename: (req, file, calback) => {
                    const nomeUnico = `${uuidv4()}${extname(file.originalname)}`;
                    calback(null, nomeUnico);
                },
            }),
            limits: {
                fileSize: 2 * 1024 * 1024,
            },
            fileFilter: (req, file, callback) => {
                if(!file.mimetype.match(/\/(jpg|jpeg|png|gif|webp)$/)){
                    return callback(
                        new BadRequestException('Apenas arquivos do tipo: jpg, jpeg, png, gif ou webp são aceitos'),
                        false,
                    )
                }
                callback(null, true);
            },
        }),
    )
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        if(!file) {
            throw new BadRequestException('Nenhum arquivo enviado');
        }
        return {
            filename: file.filename,
            size: file.size,
            url: `http://localhost:3000/api/upload/${file.filename}`,
        };
    }
}