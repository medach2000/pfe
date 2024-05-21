import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';
import { Adminorganization } from '../../adminorganization';

@Component({
  selector: 'app-adminorg',
  templateUrl: './adminorg.component.html',
  styleUrls: ['./adminorg.component.css']
})
export class AdminorgComponent implements OnInit {

  allAdminsOrg: Adminorganization[] = []
  //datatArray:any=[]
  constructor(private ds:DataService) {
      this.ds.getAllAdminsOrg().subscribe(data=>this.allAdminsOrg=data)
  }

  ngOnInit(): void {
  }

  deleteItem(id:number){
    this.ds.deleteAdminOrg(id).subscribe({
      next:(data)=>{
        this.allAdminsOrg = this.allAdminsOrg.filter(_ => _.id != id)
      },
      error: (er) =>{
        console.log(er)
      }
    })
  }

  //delete(id:any, i:number){
   // this.ds.deleteAdminOrg(id).subscribe(response=>{
    //  this.datatArray.splice(i,1)
   // })
  //}

}
