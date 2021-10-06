import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { IngredientService } from './service/ingredient.service';
import { IngredientBaseComponent } from './app.component';
import { CoreLibraryModule } from 'core-library';
import { DecoratorService } from 'projects/core-library/src/lib/interceptor/decoratorservice';
import { ChildRoutingModule, RootRoutingModule } from './app-routing.module';
import { INTERCEPTORS } from 'projects/core-library/src/lib/interceptor';

const providers: any[] = [INTERCEPTORS, IngredientService];

@NgModule({
  declarations: [
    IngredientBaseComponent
  ],
  imports: [
    BrowserModule,
    RootRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreLibraryModule
  ],
  providers: providers,
  bootstrap: [IngredientBaseComponent]
})
export class IngredientBaseModule{
  constructor(private decoratorService:DecoratorService){}
}

@NgModule({
  imports:[
    ChildRoutingModule,
  ]
})
export class IngredientSharedModule {
  static forRoot(): ModuleWithProviders<IngredientBaseModule> {
    return {
      ngModule: IngredientBaseModule,
      providers: providers
    }
  }
}
