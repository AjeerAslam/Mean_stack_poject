import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  
})

export class UserListComponent {
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phoneNo','status',];
  dataSource :any ;
  userList:any;
  constructor(private service:AuthService){
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
}







