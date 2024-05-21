import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  datatArray:any=[]
  constructor(private ds:DataService) {
    this.ds.getAllContainers().subscribe(data=>this.datatArray=data)
  }

  ngOnInit(): void {
  }

  delete(id:any, i:number){
    this.ds.deleteContainer(id).subscribe(response=>{
      this.datatArray.splice(i,1)
    })
  }

}
