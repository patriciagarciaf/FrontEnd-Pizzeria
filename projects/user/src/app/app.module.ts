import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './service/user.service';
import { RegisterComponent } from './register/register.component';
import { CoreLibraryModule } from 'projects/core-library/src/lib/core-library.module';
import { Router, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const providers: any[] = [UserService];
const routes: Routes =[];
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
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
export class AppModule { }

@NgModule({})
export class UserSharedModule {
  constructor(private router: Router){}
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: providers
    }
  }
}