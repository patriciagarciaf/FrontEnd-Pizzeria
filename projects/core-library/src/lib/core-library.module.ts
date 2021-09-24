import { NgModule } from '@angular/core';
import { CoreLibraryComponent } from './core-library.component';
import { MenuComponent } from './components/menu/menu.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [
    CoreLibraryComponent,
    MenuComponent,
    SpinnerComponent,
    TopBarComponent,
    PageNotFoundComponent,
    ButtonComponent
  ],
  imports: [
  ],
  exports: [
    CoreLibraryComponent
  ]
})
export class CoreLibraryModule { }
