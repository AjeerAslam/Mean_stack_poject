import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { adminAuthGuard } from './guard/admin-auth.guard';
import { userAuthGuard } from './guard/user-auth.guard';

const routes: Routes = [
  {component:RegistrationComponent,path:'signup'},
  {component:UserListComponent,path:'userList',canActivate:[adminAuthGuard]},
  {component:LoginComponent,path:''},
  {component:HomeComponent,path:'home',canActivate:[userAuthGuard]},
  {component:AdminHomeComponent ,path:'adminHome',canActivate:[adminAuthGuard]},
  {component:EditUserComponent,path:'editUser/:id',canActivate:[adminAuthGuard]},
  {component:PasswordResetComponent,path:'passwordReset',canActivate:[userAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
