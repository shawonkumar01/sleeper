import { Global, Module } from '@nestjs/common';
import { LoggerModule as PinoLoggerModule } from 'nestjs-pino';

@Global() // ✅ Makes this module global
@Module({
  imports: [
    PinoLoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: { singleLine: true },
        },
      },
    }),
  ],
  exports: [PinoLoggerModule], // ✅ Export it so others can use it
})
export class LoggerModule {}
