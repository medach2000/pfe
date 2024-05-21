import { Component, OnInit } from '@angular/core';
import { AuthrootadminService } from 'src/app/views/services/authrootadmin.service';

@Component({
  selector: 'app-root-admin',
  templateUrl: './root-admin.component.html',
  styleUrls: ['./root-admin.component.css']
})
export class RootAdminComponent implements OnInit {

  username:any
  constructor(private asr: AuthrootadminService) {
    this.username=localStorage.getItem('username')
  }

  ngOnInit(): void {
  }

}
