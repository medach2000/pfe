import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';
import { Abonnement } from '../../abonnement';

@Component({
  selector: 'app-addabonnement',
  templateUrl: './addabonnement.component.html',
  styleUrls: ['./addabonnement.component.css']
})
export class AddabonnementComponent implements OnInit {

  constructor(private ds: DataService, private route: Router) { }

  formdata : any = {
    id: 0,
    name: '',
    balance: 0
  }

  create(){
    this.ds.createAbonnement(this.formdata).subscribe({
      next: (data)=>{
        this.route.navigate(["/super-admin/subscription"])
      },
      error: (er) =>{
        console.log(er)
      }
    })
  }
  ngOnInit(): void {
  }

  

 // create(f:any){
   // let data= f.value
   // this.ds.createAbonnement(data).subscribe(data=>{
    //  this.route.navigate(['/super-admin/subscription'])
   // })
 // }

}
