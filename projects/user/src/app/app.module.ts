import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
=======
>>>>>>> main

const providers: any[] = [];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CreateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    ReactiveFormsModule
=======
>>>>>>> main
  ],
  providers: providers,
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class UserSharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: providers
    }
  }
}