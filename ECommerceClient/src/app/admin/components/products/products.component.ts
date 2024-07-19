import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../services/common/http-client.service';
import { Product } from '../../../contracts/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService){
    super(spinner)
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom)
    this.httpClientService.get<Product[]>({
      controller: "Product"
    }).subscribe(data => console.log(data));

//     this.httpClientService.post({
//       controller: "Product"
//     },
//     {
//       name: "Pencil",
//       stock: 100,
//       price: 15
//     }).subscribe();


//     this.httpClientService.post({
//       controller: "Product"
//     },
//     {
//       name: "Book",
//       stock: 50,
//       price: 6
//     }).subscribe();


//     this.httpClientService.post({
//       controller: "Product"
//     },
//     {
//       name: "Paper",
//       stock: 500,
//       price: 1
//     }).subscribe();



//     this.httpClientService.put({
//       controller:"Product"
//     },{
//       id : "4d1dd6d5-9b5c-49b7-b1b7-1d981f242c5c",
//       name : "Book Updated",
//       stock: 55,
//       price : 8
//     }).subscribe();


//     this.httpClientService.delete({
//       controller: "Product"
//     }, "93689ea7-af9d-4797-b281-010a5e296048")
//     .subscribe();
  }
}
