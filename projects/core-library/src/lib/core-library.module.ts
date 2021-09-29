import { NgModule } from '@angular/core';
import { CoreLibraryComponent } from './core-library.component';
import { MenuComponent } from './components/menu/menu.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';



@NgModule({
  declarations: [
    CoreLibraryComponent,
    CheckboxComponent,
  ],
  imports: [
  ],
  exports: [
    CoreLibraryComponent
  ]
})
export class CoreLibraryModule { }
