import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RiesgoModule } from './riesgo/riesgo.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://julian:987654321@ac-dycggbq-shard-00-00.bmncmv8.mongodb.net:27017,ac-dycggbq-shard-00-01.bmncmv8.mongodb.net:27017,ac-dycggbq-shard-00-02.bmncmv8.mongodb.net:27017/desercion?replicaSet=atlas-53rym2-shard-0&ssl=true&authSource=admin',
    ),
    ConfigModule.forRoot(),
    RiesgoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
