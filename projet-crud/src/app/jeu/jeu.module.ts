import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JeuComponent } from './jeuweb/jeu.component';
import { JeuRoutingModule } from './jeu-routing.module';

@NgModule({
    declarations: [

    ],
    imports: [
        CommonModule,
        JeuComponent,
        JeuRoutingModule
    ]
})
export class JeuModule { }
