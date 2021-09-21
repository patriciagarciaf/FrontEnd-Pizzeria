import { NgModule } from '@angular/core';
import { CoreLibraryComponent } from './core-library.component';
import { MenuComponent } from './menu/menu.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TopBarComponent } from './top-bar/top-bar.component';



@NgModule({
  declarations: [
    CoreLibraryComponent,
    MenuComponent,
    SpinnerComponent,
    PageNotFoundComponent,
    TopBarComponent
  ],
  imports: [
  ],
  exports: [
    CoreLibraryComponent
  ]
})
export class CoreLibraryModule { }
