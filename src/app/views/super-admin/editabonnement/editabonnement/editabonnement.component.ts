import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';
import { Abonnement } from '../../abonnement';

@Component({
  selector: 'app-editabonnement',
  templateUrl: './editabonnement.component.html',
  styleUrls: ['./editabonnement.component.css']
})
export class EditabonnementComponent implements OnInit {

  constructor(private ds: DataService, private router: Router, private route: ActivatedRoute) { }

  formData: Abonnement = {
    id: 0,
    name: '',
    balance: 0
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param)=>{
      let id = Number(param.get('id'))
      this.getById(id)
    })
  }

  getById(id:number){
    this.ds.editAbonnement(id).subscribe((data)=>{
      this.formData = data;
    })
  }

  update(){
    this.ds.updateAbonnement(this.formData).subscribe({
      next: (data)=>{
        this.router.navigate(["/super-admin/subscription"])
      },
      error: (er) =>{
        console.log(er)
      }
    })
  }

}
