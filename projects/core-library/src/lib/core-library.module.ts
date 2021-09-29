import { NgModule } from '@angular/core';
import { ButtonComponent } from './formcontrols/button/button.component'; 
import { InputComponent } from './formcontrols/input/input.component';
import { CoreLibraryComponent } from './core-library.component';
import { CheckboxComponent } from './formcontrols/checkbox/checkbox.component';
import { CapImgComponent } from './formcontrols/cap-img/cap-img.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CoreLibraryComponent,
    ButtonComponent,
    InputComponent,
    CheckboxComponent,
    CapImgComponent
  ],
  imports: [
    ReactiveFormsModule,
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