import { Component, OnInit } from '@angular/core';
import { AuthsuperadminService } from 'src/app/views/services/authsuperadmin.service';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {
  username:any
  constructor(private asd:AuthsuperadminService) {
    this.username=localStorage.getItem('username')
  }

  ngOnInit(): void {
  }

}
