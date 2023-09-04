import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  password:any;
 
  constructor(private builder: FormBuilder, private service: AuthService, private router: Router,
    private toastr: ToastrService,private http:HttpClient) {

  }

  registerform = this.builder.group({
    firstName: this.builder.control('', Validators.required),
    lastName: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    phoneNo: this.builder.control('', Validators.compose([Validators.required, Validators.pattern('[789][0-9]{9}')])),
  });
  /*proceedregister() {
    const products={
      firstName:"ajeer",
      lastName:"aslam",
      email:"ajeeraslamkkkffd1@gmail.com",
      phoneNo:"9744630325",
      password:"223243"
    
    };
    console.log("hii");
    this.http.post('http://localhost:3000/signup',products).subscribe(result=>{console.log(result)});
    //this.http.get('http://localhost:3000/userList').subscribe(result=>{console.log(result)});
    console.log("huuu");

  }*/
  
  proceedregister() {
    if (this.registerform.valid) {
      console.log(this.registerform.value);
      this.service.registerUser(this.registerform.value).subscribe(()=> {
        this.toastr.success('Please contact admin for enable access.','Registered successfully')
        this.router.navigate([''])
      });
    } else {
      this.toastr.warning('Please enter valid data.')
    }
  }
}
