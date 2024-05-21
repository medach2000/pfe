import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';
import { Adminorganization } from '../../adminorganization';

@Component({
  selector: 'app-editadminorg',
  templateUrl: './editadminorg.component.html',
  styleUrls: ['./editadminorg.component.css']
})
export class EditadminorgComponent implements OnInit {

  constructor(private ds: DataService, private router: Router, private route: ActivatedRoute) { }

  formData: Adminorganization ={
    id: 0,
    name: '',
    email: '',
    password:'',
    organization_name:''
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((param)=>{
      let id = Number(param.get('id'))
      this.getById(id)
    })
  }

  getById(id:number){
    this.ds.editAdminOrg(id).subscribe((data)=>{
      this.formData = data;
    })
  }

  update(){
    this.ds.updateAdminOrg(this.formData).subscribe({
      next: (data)=>{
        this.router.navigate(["/super-admin/adminorg"])
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }

}
