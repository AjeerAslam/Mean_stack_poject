//component loads when admin click edit button
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

  userData:any;
  userId:any;
  editData:any;

  //form instance creation
  registerform = this.builder.group({
    firstName: this.builder.control(''),
    lastName: this.builder.control(''),
    email: this.builder.control('', Validators.compose([Validators.email])),
    phoneNo: this.builder.control('', Validators.compose([Validators.pattern('[789][0-9]{9}')])),
  });

  constructor(private builder: FormBuilder, private service: AuthService, private router: Router,
    private toastr: ToastrService,private http:HttpClient,private route:ActivatedRoute) {   
  }

  ngOnInit() {
    //api call to get user detais in form for editing
    this.userId = this.route.snapshot.paramMap.get('id');
    this.service.getUser(this.userId).subscribe(response=>{
      this.userData=response;
    });
  }
  
  //To edit user by clicking on edit button from admin page
  editUser() {
    if (this.registerform.valid) {
      this.editData=this.registerform.value;
      //To remove null objects from form values otherwise it create null values in db
      for (const key in this.editData) {
        if (this.editData[key] == '') {
          delete this.editData[key];
        }
      }
      //api call to edit user
      this.service.editUser(this.userId,this.editData).subscribe(() => {
        this.toastr.success('Updated successfully');
        this.router.navigate(['adminHome']);
      });
    } else {
      this.toastr.warning('Please enter valid data.')
    }
  }
}



