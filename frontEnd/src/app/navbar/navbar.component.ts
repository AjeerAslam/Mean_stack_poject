//nav bar component-it loads on the top of user-home page and admin-home page with curresponiding login details(eg first name)
import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  id:any;
  user:any;
  name:any;

  constructor(private service:AuthService,private router:Router) {
    this.id=sessionStorage.getItem('id'); 
    this.service.getUser(this.id).subscribe(result=>{
      this.user=result;
      this.name=this.user.data.user[0].firstName;
    });        
  }
  //lougout function it can access from user-home page or admin-home page
  logout(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }
}
