//This service is used to define api calls
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  registerUser(inputdata:any){
    return this.http.post('http://localhost:3000/signup',inputdata);
  } 
  getUsers(){
    return this.http.get('http://localhost:3000/userList');
  }

  approveUser(id:any){
    return this.http.patch(`http://localhost:3000/userApproval/${id}`,{});
  }

  login(inputdata:any){
    return this.http.post('http://localhost:3000/login',inputdata);
  }

  getUser(id:any){
    return this.http.get(`http://localhost:3000/getUser/${id}`);
  }

  deleteUser(id:any){
    return this.http.delete(`http://localhost:3000/userDelete/${id}`);
  }

  editUser(id:any,inputdata:any){
    return this.http.patch(`http://localhost:3000/userEdit/${id}`,inputdata);
  }

  passwordReset(id:any,inputdata:any){
    return this.http.patch(`http://localhost:3000/passwordReset/${id}`,inputdata);
  }

  /*filterUser(id:any){
    return this.http.get(`http://localhost:3000/filtering/${id}`);
  }*/

}
