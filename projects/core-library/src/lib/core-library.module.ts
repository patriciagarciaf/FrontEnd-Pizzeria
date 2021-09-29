import { NgModule } from '@angular/core';
import { ButtonComponent } from './formcontrols/button/button.component'; 
import { InputComponent } from './formcontrols/input/input.component';
import { CoreLibraryComponent } from './core-library.component';
import { CheckboxComponent } from './formcontrols/checkbox/checkbox.component';

@NgModule({
  declarations: [
    CoreLibraryComponent,
    ButtonComponent,
    InputComponent,
    CheckboxComponent
  ],
  imports: [
  ],
  exports: [
    CoreLibraryComponent,
    ButtonComponent,
    InputComponent,
    CheckboxComponent
  ]
})
export class CoreLibraryModule { }