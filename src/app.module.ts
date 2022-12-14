import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './books/book.module';
import { ConfigModule } from '@nestjs/config';
import { AuthorModule } from './authors/author.module';
import { UserModule } from './auth/user.module';

@Module({
  imports: [
    BookModule,
    AuthorModule,
    UserModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URL),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
