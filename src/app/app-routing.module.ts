import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path: 'user', 
loadChildren: () => import('../../projects/user/src/app/app.module').then(m=>m.UserSharedModule)},
{path: '**', redirectTo: 'user/register' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
