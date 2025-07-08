import { Module } from '@nestjs/common';
import {  ConfigService } from '@nestjs/config';
import { AppConfigModule } from '../config/config.module';
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';
import { Models } from 'mongoose';


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
export class DatabaseModule {
    static forFeature(models: ModelDefinition[]){
        return MongooseModule.forFeature(models);
    }
}
