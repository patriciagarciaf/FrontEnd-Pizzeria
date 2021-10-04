import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreLibraryModule } from 'projects/core-library/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { PizzaComponent } from './add/pizza.component';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const providers: any[] = []

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CoreLibraryModule
  ],
  providers: providers,
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){}
 }

@NgModule({})
export class PizzaSharedModule {
  constructor(private router: Router){}
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: providers,
    }
  }
}
