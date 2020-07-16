import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLoginComponent } from './compenenents/user-login/user-login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { UserRegisterComponent } from './componenents/user-register/user-register.component';
import { UserListComponent } from './componenents/user-list/user-list.component';
import { TempconverterComponent } from './component/tempconverter/tempconverter.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

//Valid Urls For the systems
const routes: Routes = [
  {path: '', component: MainPageComponent },
  {path: 'login', component: UserLoginComponent},
  {path: 'converter', component: TempconverterComponent},
  {path: 'user/register', component: UserRegisterComponent},
  {path: 'user/list', component: UserListComponent},
  {path: 'todo', component: TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
