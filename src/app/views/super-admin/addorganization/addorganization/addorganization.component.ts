import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';
import { Organization } from '../../organization';

@Component({
  selector: 'app-addorganization',
  templateUrl: './addorganization.component.html',
  styleUrls: ['./addorganization.component.css']
})
export class AddorganizationComponent implements OnInit {


  
  constructor(private ds:DataService, private route:Router) {
    
  }
  formdata : Organization = {
    id: 0,
    name: '',
    subscription_name: '' 
  }

  

  ngOnInit(): void {
  }

  createOrg(){

    this.ds.createOrganization(this.formdata).subscribe({
      next: (data)=>{
        this.route.navigate(["/super-admin/organizations"])
      },
      error: (er) =>{
        console.log(er)
      }
    })
  }

}
