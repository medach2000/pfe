import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';
import { Adminorganization } from '../../adminorganization';

@Component({
  selector: 'app-create-admin-org',
  templateUrl: './create-admin-org.component.html',
  styleUrls: ['./create-admin-org.component.css']
})
export class CreateAdminOrgComponent implements OnInit {

  constructor(private ds:DataService, private route:Router) { }

  formData: Adminorganization = {
    id: 0,
    name: '',
    email: '',
    password: '',
    organization_name:''
  }

  ngOnInit(): void {
  }

  createAdmin(){
    this.ds.createAdminOrg(this.formData).subscribe({
      next:(data)=>{
      this.route.navigate(['/super-admin/adminorg'])
    }, error:(er)=>{
      console.log(er)
    }
    })
  }

}
