import { IsDate,IsString, IsNotEmpty } from "class-validator";
import { Type } from 'class-transformer';

export class CreateReservationDto {

    @IsDate()
    @Type(() => Date)
    startDate: Date;

    @IsDate()
    @Type(() => Date)
    endDate: Date;

    @IsString()
    @IsNotEmpty()
    placeId: string;

    @IsString()
    @IsNotEmpty()
    invoiceId: string;
}
