import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';
import { Abonnement } from '../../abonnement';

@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.css']
})
export class AbonnementComponent implements OnInit {

  allAbonnements: Abonnement[] = []
  //datatArray:any=[]
  constructor(private ds: DataService) {
    this.ds.getAllAbonnements().subscribe(data=>this.allAbonnements=data)
  }

  ngOnInit(): void {
  }

  deleteItem(id:number){
    this.ds.deleteAbonnement(id).subscribe({
      next:(data)=>{
        this.allAbonnements = this.allAbonnements.filter(_ => _.id != id)
      },
      error: (er) =>{
        console.log(er)
      }
    })
  }

  //delete(id:any, i:number){
   // this.ds.deleteAbonnement(id).subscribe(response=>{
   //   this.datatArray.splice(i,1)
  //  })
//  }

}
