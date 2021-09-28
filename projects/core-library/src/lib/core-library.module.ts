import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { CoreLibraryComponent } from './core-library.component';




@NgModule({
  declarations: [
    CoreLibraryComponent,
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
