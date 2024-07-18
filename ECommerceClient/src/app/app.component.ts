import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ECommerceClient';

  constructor() { }

  ngOnInit(): void {
    $.get("https://localhost:44374/api/Product", data => {
      console.log(data);
    });
  }
}


