import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthrootadminService } from 'src/app/views/services/authrootadmin.service';

@Component({
  selector: 'app-auth-root-admin',
  templateUrl: './auth-root-admin.component.html',
  styleUrls: ['./auth-root-admin.component.css']
})
export class AuthRootAdminComponent implements OnInit {

  dataReceived:any
  constructor(private asr: AuthrootadminService, private route: Router) { }

  ngOnInit(): void {
  }

  loginrootadmin(f:any){
    let data=f.value
    this.asr.login(data).subscribe((response)=>{
      this.dataReceived=response
      this.asr.SaveDataProfile(this.dataReceived.token, this.dataReceived.username, this.dataReceived.role)
      this.route.navigate(['root-admin/root-admin-dashboard'])
    })
  }
}
