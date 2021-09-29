import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from 'src/app/app.module';

const routes: Routes = [{
  path: 'ingredient/ingredients',
  loadChildren: () => import('./app.module')
      .then(module => module.AppModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
