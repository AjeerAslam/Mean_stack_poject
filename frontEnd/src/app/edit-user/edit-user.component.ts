import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{
  user:any;
  id:any;
  editData:any;
  constructor(private builder: FormBuilder, private service: AuthService, private router: Router,
    private toastr: ToastrService,private http:HttpClient,private route:ActivatedRoute) {   
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getUser(this.id).subscribe(result=>{
      this.user=result;
    }); 
    console.log(this.user);
  }
  registerform = this.builder.group({
    firstName: this.builder.control(''),
    lastName: this.builder.control(''),
    email: this.builder.control('', Validators.compose([Validators.email])),
    phoneNo: this.builder.control('', Validators.compose([Validators.pattern('[789][0-9]{9}')])),
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
  
  editUser() {
    if (this.registerform.valid) {
      this.editData=this.registerform.value;
      for (const key in this.editData) {
        if (this.editData[key] == '') {
          delete this.editData[key];
        }
      }
      this.service.editUser(this.id,this.editData).subscribe(result => {
        this.toastr.success('Updated successfully');
        this.router.navigate(['adminHome']);
      });
    } else {
      this.toastr.warning('Please enter valid data.')
    }
  }
}



