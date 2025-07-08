import { AbstractRepository } from "@app/common";
import { Injectable,Logger } from "@nestjs/common";
import { ReservationDocuments } from "./models/reservation.schema";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ReservationsRepository extends AbstractRepository <ReservationDocuments> {
     protected readonly logger = new Logger(ReservationsRepository.name);
    
   constructor(
    @InjectModel(ReservationDocuments.name)
    reservationModel: Model<ReservationDocuments>,
  ) {
    super(reservationModel);
  }
}