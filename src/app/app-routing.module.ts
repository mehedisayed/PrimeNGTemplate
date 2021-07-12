import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaihanComponent } from './raihan/raihan.component';
import { MehediComponent } from './mehedi/mehedi.component';

const routes: Routes = [
  {
    path: 'raihan',
    component: RaihanComponent,
  },
  {
    path: 'mehedi',
    component: MehediComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
