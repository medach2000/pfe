import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-create-user-org',
  templateUrl: './create-user-org.component.html',
  styleUrls: ['./create-user-org.component.css']
})
export class CreateUserOrgComponent implements OnInit {

  constructor(private ds:DataService, private route:Router) {}

  ngOnInit(): void {
  }

  createUser(f:any){
    let data= f.value
    this.ds.createUserOrg(data).subscribe(data=>{
      this.route.navigate(['/root-admin/users-organization'])
    })
  }

}
