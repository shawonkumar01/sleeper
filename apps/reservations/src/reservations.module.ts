import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { DatabaseModule, LoggerModule } from '@app/common';
import { ReservationsRepository } from './reservations.repository';
import { ReservationDocuments, ReservationSchema } from './models/reservation.schema';


@Module({
  imports:[DatabaseModule, DatabaseModule.forFeature([{name: ReservationDocuments.name, schema: ReservationSchema}]),
  LoggerModule,
],

  controllers: [ReservationsController],
  providers: [ReservationsService,ReservationsRepository],
})
export class ReservationsModule {}
