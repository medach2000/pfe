import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';
import { Organization } from '../../organization';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {

  allOrganizations: Organization[]= []
  //datatArray:any=[]
  constructor(private ds:DataService) {
    this.ds.getAllOrganizations().subscribe(data=>this.allOrganizations=data)
    
  }

  ngOnInit(): void {
  }

  deleteItem(id:number){
    this.ds.deleteOrganization(id).subscribe({
      next:(data)=>{
        this.allOrganizations = this.allOrganizations.filter(_ => _.id != id)
      },
      error: (er) =>{
        console.log(er)
      }
    })
  }

  //delete(id:any, i:number){
  //  this.ds.deleteOrganization(id).subscribe(response=>{
  //    this.datatArray.splice(i,1)
  //  })
  //}

}
