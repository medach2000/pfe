import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-users-organization',
  templateUrl: './users-organization.component.html',
  styleUrls: ['./users-organization.component.css']
})
export class UsersOrganizationComponent implements OnInit {

  datatArray:any=[]
  constructor(private ds:DataService) {
    this.ds.getAllUsersOrg().subscribe(data=>this.datatArray=data)
  }

  ngOnInit(): void {
  }

  delete(id:any, i:number){
    this.ds.deleteUserOrg(id).subscribe(response=>{
      this.datatArray.splice(i,1)
    })
  }

}
