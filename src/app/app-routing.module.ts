import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordComponent } from './record/record.component';
import { FetchComponent } from './fetch/fetch.component';
const routes: Routes = [

  {
    path: 'record',
    component: RecordComponent
  },
  {
    path: 'fetch',
    component: FetchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
