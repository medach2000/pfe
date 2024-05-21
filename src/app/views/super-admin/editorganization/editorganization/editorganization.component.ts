import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';
import { Organization } from '../../organization';

@Component({
  selector: 'app-editorganization',
  templateUrl: './editorganization.component.html',
  styleUrls: ['./editorganization.component.css']
})
export class EditorganizationComponent implements OnInit {

  constructor(private ds: DataService, private router: Router, private route: ActivatedRoute) { }

  formData: Organization = {
    id: 0,
    name: '',
    subscription_name: ''
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param)=>{
      let id = Number(param.get('id'))
      this.getById(id)
    })
  }

  getById(id:number){
    this.ds.editOrganization(id).subscribe((data)=>{
      this.formData = data;
    })
  }

  update(){
    this.ds.updateOrganization(this.formData).subscribe({
      next: (data)=>{
        this.router.navigate(["/super-admin/organizations"])
      },
      error: (er) =>{
        console.log(er)
      }
    })
  }

}
