import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientSharedModule } from 'projects/ingredient/src/app/app.module';
import { UserSharedModule } from 'projects/user/src/app/app.module';
import { SpinnerComponent } from 'projects/core-library/src/lib/components/spinner/spinner.component';
import { ButtonComponent } from 'projects/core-library/src/lib/formcontrols/button/button.component';
import { InputComponent } from 'projects/core-library/src/lib/formcontrols/input/input.component';
import { CheckboxComponent } from 'projects/core-library/src/lib/checkbox/checkbox.component';


@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    ButtonComponent,
    InputComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IngredientSharedModule.forRoot(),
    UserSharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
