import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config/dist';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/tasks'),
    TasksModule,
    ConfigModule.forRoot()],
})
export class AppModule {}
