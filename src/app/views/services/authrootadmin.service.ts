import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthrootadminService {

  ProfilRootAdmin={
    username:'',
    role:''
  }

  IsLoggedIn:boolean=false
  constructor(private http: HttpClient) { }

  login(data:any){
    return this.http.post('http://localhost:8000/rootadmin/login', data)
  }

  SaveDataProfile(token:any, username:any, role:any){
    localStorage.setItem('token',token)
    localStorage.setItem('role',role)
    localStorage.setItem('username',username)
    this.ProfilRootAdmin.username=username
    this.ProfilRootAdmin.role=role
    this.IsLoggedIn=true
  }
}
