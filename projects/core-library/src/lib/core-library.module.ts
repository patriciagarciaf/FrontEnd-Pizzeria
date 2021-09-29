import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { CoreLibraryComponent } from './core-library.component';
import { MenuComponent } from './components/menu/menu.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    CoreLibraryComponent,
    MenuComponent,
    SpinnerComponent,
    TopBarComponent,
    PageNotFoundComponent,
    InputComponent,
    ButtonComponent,
    InputComponent
  ],
  imports: [
  ],
  exports: [
    CoreLibraryComponent,
    ButtonComponent,
    InputComponent
  ]
})
export class CoreLibraryModule { }
