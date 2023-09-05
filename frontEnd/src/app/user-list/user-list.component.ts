//this compponent loads on admin page for showing user details
import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  
})

export class UserListComponent {
  
  
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phoneNo','status','approval','delete','edit'];
  userData :any ;
  responseData:any;
  filterKey:any;
  userDataBackup:any;//it is used for filtering data in filter function
  selected :string;
  
  constructor(private service:AuthService,private router: Router,
    private toastr: ToastrService){
    this.selected = 'firstName';
    //api call
    this.service.getUsers().subscribe(Response => {
      this.responseData=Response;
      this.userData =this.responseData.data.user
      this.userDataBackup=this.userData;
    });  
    
    //this.dataSource=ELEMENT_DATA;
  }
  /*ngOninit(){
    this.service.getUsers().subscribe(result => {
      console.log(result)
      this.userList=result;
      //this.dataSource = new MatTableDataSource(this.userList);
    });   
  }*/

  //filter function for keyword search in data from admin page
  filterUsersDataList(event:any,selected:any){
    console.log(this.userData);
    const target = event.target as HTMLInputElement;
    this.filterKey= target.value;
    const myRegex = new RegExp(`^${this.filterKey}`);
    this.userData = this.userDataBackup.filter(function (eachRow:any) {
      if (selected=='firstName') {
        return myRegex.test(eachRow.firstName);
      } else {
        if (selected=='lastName') {
          return myRegex.test(eachRow.lastName);
        } else {
          return myRegex.test(eachRow.email);     
        }
      }
    });
  }

  //approve user function
  approveUser(id:any) {
    this.service.approveUser(id).subscribe(() => {
        this.toastr.success('User approved');
        this.service.getUsers().subscribe(response => {
          this.userData=response;
          this.userDataBackup =this.userData.data.user;
        });
    });
  }
  //delete user function
  deleteUser(id:any) {
      console.log(id);
      this.service.deleteUser(id).subscribe(() => {
          this.toastr.success('Deleted successfully')
          this.service.getUsers().subscribe(response => {
            this.userData=response;
            this.userDataBackup =this.userData.data.user;
          });
        });
      } 
  //edit user function-it load edit user component
  editUser(id:any) {
    this.router.navigate(['/editUser', id]);
  }
}











