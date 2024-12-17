import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './reservation/reservation.component';
import { FormsModule } from '@angular/forms'; 

@NgModule({ //Déclaration du module
    declarations: [ //Déclarations des composants liées à ce module
        ReservationComponent
    ],
    imports: [ //Imports des éléments utilisés dans le module
        CommonModule,
        FormsModule
    ],
})
export class ReservationModule { }