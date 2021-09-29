import { NgModule } from '@angular/core';
import { ButtonComponent } from './formcontrols/button/button.component'; 
import { InputComponent } from './formcontrols/input/input.component';
import { CoreLibraryComponent } from './core-library.component';
import { MenuComponent } from './components/menu/menu.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CheckboxComponent } from './formcontrols/checkbox/checkbox.component';
import { CapImgComponent } from './formcontrols/cap-img/cap-img.component';

@NgModule({
  declarations: [
    CoreLibraryComponent,
    MenuComponent,
    SpinnerComponent,
    TopBarComponent,
    PageNotFoundComponent,
    InputComponent,
    ButtonComponent,
    InputComponent,
    CheckboxComponent,
    CapImgComponent
  ],
  imports: [
  ],
  exports: [
    CoreLibraryComponent,
    ButtonComponent,
    InputComponent,
    CheckboxComponent,
    CapImgComponent
  ]
})
export class CoreLibraryModule { }