import { Module } from '@nestjs/common';
import {  ConfigService } from '@nestjs/config';
import { AppConfigModule } from '../config/config.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
    imports: [AppConfigModule, MongooseModule.forRootAsync({
        imports:[AppConfigModule],
        useFactory:(ConfigService:ConfigService)=>({
            uri:ConfigService.get('MONGODB_URI'),
        }),
        inject:[ConfigService],
        }),
     ],
    })
export class DatabaseModule {}
