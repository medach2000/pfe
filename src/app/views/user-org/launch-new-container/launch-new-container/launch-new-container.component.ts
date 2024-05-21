import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-launch-new-container',
  templateUrl: './launch-new-container.component.html',
  styleUrls: ['./launch-new-container.component.css']
})
export class LaunchNewContainerComponent implements OnInit {

  constructor(private ds:DataService, private route:Router) { }

  ngOnInit(): void {
  }

  create(f:any){
    let data= f.value
    this.ds.createContainer(data).subscribe(data=>{
      this.route.navigate(['/user-org/containers'])
    })
  }

}
