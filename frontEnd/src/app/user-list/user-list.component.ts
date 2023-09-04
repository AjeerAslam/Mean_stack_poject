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
  dataSource :any ;
  userList:any;
  key:any;
  
  constructor(private service:AuthService,private router: Router,
    private toastr: ToastrService){
    this.service.getUsers().subscribe(result => {
      this.userList=result;
      this.dataSource =this.userList.data.user ;
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
  filter(event:any){
    const target = event.target as HTMLInputElement;
    this.key = target.value;
    this.service.filterUser(this.key).subscribe(result => {
      this.userList=result;
      this.dataSource =this.userList.data.user
      console.log(this.dataSource);
      this.router.navigate(['adminHome'])
    });

  }
  approveUser(id:any) {
    this.service.approveUser(id).subscribe(result => {
        this.toastr.success('User approved')
        this.router.navigate(['adminHome'])
      });
    } 
  deleteUser(id:any) {
      console.log(id);
      this.service.deleteUser(id).subscribe(result => {
          this.toastr.success('Please contact admin for enable access.','Registered successfully')
          this.router.navigate(['userList'])
        });
      } 
      editUser(id:any) {
        this.router.navigate(['/editUser', id]);
      }
}











