import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';


const routes: Routes = [
  {component:RegistrationComponent,path:'signup'},
  {component:UserListComponent,path:'userList'},
  {component:LoginComponent,path:''},
  {component:HomeComponent,path:'home'},
  {component:AdminHomeComponent ,path:'adminHome'},
  {component:EditUserComponent,path:'editUser/:id'},
  {component:PasswordResetComponent,path:'passwordReset'}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
