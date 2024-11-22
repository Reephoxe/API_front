
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JeuComponent } from './jeuweb/jeu.component';

const routes: Routes = [
    { path: '', component: JeuComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JeuRoutingModule { }
