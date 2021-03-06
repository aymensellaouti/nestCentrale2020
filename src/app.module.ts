import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TodoModule,
    MongooseModule.forRoot('mongodb+srv://aymen:sousou2782@cluster0-ngax2.mongodb.net/test?retryWrites=true&w=majority'),
  ],
  exports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
