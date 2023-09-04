import {Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../service/auth.service';


/** @title Form field with error messages */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent {
  loginResponse:any;
  loginform = this.builder.group({
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    password: this.builder.control('', Validators.required)
  });
  constructor(private builder: FormBuilder, private toastr: ToastrService, private service: AuthService,
    private router: Router) {
      sessionStorage.clear();   
  }
  
  proceedlogin() {
    if (this.loginform.valid) {
      this.service.login(this.loginform.value).subscribe(item => {
        this.loginResponse = item;
        if (this.loginResponse ) {
          if (this.loginResponse.data.user.status=="active") {
            sessionStorage.setItem('id',this.loginResponse.data.user._id);
            sessionStorage.setItem('role',this.loginResponse.data.user.role);
            if(this.loginResponse.data.user.role=="admin"){
              this.router.navigate(['adminHome']);
            }
            else{
              if(this.loginResponse.data.user.password===this.loginResponse.data.user.firstName+"2023"){
                this.router.navigate(['passwordReset']);
              }else{
                this.router.navigate(['home']);
              }
            }    
          } else {
            this.toastr.error('Please contact Admin', 'InActive User');
          }
        } else {
          this.toastr.error('Invalid credentials');
        }
      });
    } else {
      this.toastr.warning('Please enter valid data.')
    }
  } 
}