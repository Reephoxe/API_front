import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './reservation/reservation.component';
import { FormsModule } from '@angular/forms'; 

@NgModule({
    declarations: [
        ReservationComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
})
export class ReservationModule { }