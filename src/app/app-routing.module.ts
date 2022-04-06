import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { PlanetsComponent } from './components/planets/planets.component';

const routes: Routes = [{
  path: '',
  component: ListComponent,
}, {
  path: 'planets',
  component: PlanetsComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
