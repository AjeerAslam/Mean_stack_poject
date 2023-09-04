import {Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent {
  resetResponse:any;
  password:any;
  id:any;
  resetform = this.builder.group({
    password: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(8)])),
    confirmPassword: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(8)]))
  });
  constructor(private builder: FormBuilder, private toastr: ToastrService, private service: AuthService,
    private router: Router) {
      
  }
  passwordValidation(event:any){
    const target = event.target as HTMLInputElement;
    this.password = target.value;
    if(this.password && !(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(this.password))){
      this.toastr.warning('Password should be Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character');
    }
  }
  
  resetPassword() {
    if (this.resetform.valid && this.resetform.value.password== this.resetform.value.confirmPassword) {
      this.id=sessionStorage.getItem('id');
      this.service.passwordReset(this.id,{password:this.resetform.value.password}).subscribe(item => {
        this.resetResponse = item;
        if (this.resetResponse ) {
          this.toastr.success('Password reset completed');
          this.router.navigate(['home']);
        } 
      });
    } else {
      this.toastr.warning('Password doesnot match')
    }
  } 
}
