import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {} from '@angular/forms';
import { TempconverterComponent } from './component/tempconverter/tempconverter.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { UserRegisterComponent } from './componenents/user-register/user-register.component';
import { UserListComponent } from './componenents/user-list/user-list.component';
import { UserLoginComponent } from './compenenents/user-login/user-login.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TempconverterComponent,
    NavBarComponent,
    MainPageComponent,
    UserRegisterComponent,
    UserListComponent,
    UserLoginComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
