import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { IngredientService } from './add/service/ingredient.service';
import { AppComponent } from 'src/app/app.component';
import { AddComponent } from './add/add.component';

const providers: any[] = [IngredientService];

@NgModule({
  declarations: [
    AppComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: providers,
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class IngredientSharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: providers
    }
  }
}
