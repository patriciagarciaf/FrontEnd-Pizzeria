import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path: 'user', 
loadChildren: () => import('../../projects/user/src/app/app.module').then(m=>m.UserSharedModule)},
{path: '**', redirectTo: 'user/register' },
{path: 'ingredient', loadChildren:()=> import('../../projects/ingredient/src/app/app.module').then(m=>m.IngredientBaseModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
