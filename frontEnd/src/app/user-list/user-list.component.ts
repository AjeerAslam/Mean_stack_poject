import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { filter } from 'rxjs';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  
})

export class UserListComponent {
  
  
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phoneNo','status','approval','delete','edit'];
  dataSource :any ;
  userList:any;
  key:any;
  dataSourceBackup:any;
  selected :string;
  
  constructor(private service:AuthService,private router: Router,
    private toastr: ToastrService){
    this.selected = 'firstName';
    this.service.getUsers().subscribe(result => {
      this.userList=result;
      this.dataSource =this.userList.data.user
      this.dataSourceBackup=this.dataSource;
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
  filter(event:any,selected:any){
    console.log(this.dataSource);
    const target = event.target as HTMLInputElement;
    this.key = target.value;
    const myRegex = new RegExp(`^${this.key}`);
    this.dataSource = this.dataSourceBackup.filter(function (el:any) {
      if (selected=='firstName') {
        return myRegex.test(el.firstName);
      } else {
        if (selected=='lastName') {
          return myRegex.test(el.lastName);
        } else {
          return myRegex.test(el.email);     
        }
      }
    });
    /*
    this.service.filterUser(this.key).subscribe(result => {
      this.userList=result;
      this.dataSource =this.userList.data.user
      console.log(this.dataSource);
      this.router.navigate(['adminHome'])
    });*/
  }
  approveUser(id:any) {
    this.service.approveUser(id).subscribe(() => {
        this.toastr.success('User approved');
        this.service.getUsers().subscribe(response => {
          this.userList=response;
          this.dataSource =this.userList.data.user;
        });
    });
  } 
  deleteUser(id:any) {
      console.log(id);
      this.service.deleteUser(id).subscribe(() => {
          this.toastr.success('Deleted successfully')
          this.service.getUsers().subscribe(response => {
            this.userList=response;
            this.dataSource =this.userList.data.user;
          });
        });
      } 
      editUser(id:any) {
        this.router.navigate(['/editUser', id]);
      }
}











