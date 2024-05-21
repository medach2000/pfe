import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthsuperadminService } from 'src/app/views/services/authsuperadmin.service';

@Component({
  selector: 'app-auth-super-admin',
  templateUrl: './auth-super-admin.component.html',
  styleUrls: ['./auth-super-admin.component.css']
})
export class AuthSuperAdminComponent implements OnInit {

  dataReceived:any
  constructor(private asd: AuthsuperadminService, private route: Router) {
    
  }

  ngOnInit(): void {
  }

  loginsuperadmin(f:any){
    let data=f.value

  this.asd.login(data).subscribe((response)=>{
    this.dataReceived=response
    this.asd.SaveDataProfile(this.dataReceived.token, this.dataReceived.username, this.dataReceived.role)
    this.route.navigate(['super-admin/dashboard'])
  })
  }

}
