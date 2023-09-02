import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  constructor(private http:HttpClient) { 

  }
  registerUser(inputdata:any){
    return this.http.post('http://localhost:3000/signup',inputdata);
  } 
  getUsers(){
    return this.http.get('http://localhost:3000/userList');
  }

}
