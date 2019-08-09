import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication) {
    const options = new DocumentBuilder()
        .setTitle('Kendal API')
        .setDescription('Kendal backend')
        .setVersion('1.0')
        .setContactEmail('franshesca.torres.zegarra@gmail.com')
        .setLicense('MIT', 'https://github.com/MariaFranshesca/clean-architecture-nodejs/blob/devKendal/LICENSE')
        .setSchemes('http', 'https')
        //.addBearerAuth()
        .setBasePath('api')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('docs', app, document);
}
