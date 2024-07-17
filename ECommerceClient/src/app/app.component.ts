import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'ECommerceClient';

  constructor(private toastrService: CustomToastrService) {
    toastrService.message("Title", "Message", {
      messageType: ToastrMessageType.Info,
      position: ToastrPosition.TopCenter
    });
    
    toastrService.message("Title", "Message", {
      messageType: ToastrMessageType.Success,
      position: ToastrPosition.TopCenter
    });

    toastrService.message("Title", "Message", {
      messageType: ToastrMessageType.Error,
      position: ToastrPosition.TopCenter
    });

    toastrService.message("Title", "Message", {
      messageType: ToastrMessageType.Warning,
      position: ToastrPosition.TopCenter
    });

  }
}