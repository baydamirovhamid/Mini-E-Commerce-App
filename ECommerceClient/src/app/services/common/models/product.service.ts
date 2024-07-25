import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Create_Product } from '../../../contracts/create_product';
import { HttpErrorResponse } from '@angular/common/http';
import { error } from 'console';
import { List_Product } from '../../../contracts/list_product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService: HttpClientService) { }

  create(product: Create_Product, successCallBack?: () => void, errorCallBack?: (errorMessage:string) => void) {
    this.httpClientService.post({
      controller: "Product"

    }, product).subscribe(result => {
      successCallBack();
    }, (errorResponse: HttpErrorResponse) => {
      const _error: Array<{ key: string, value: Array<string> }> = errorResponse.error;
      let message = "";
      _error.forEach((v, index) => {
        v.value.forEach((_v, _index) => {
          message += `${_v}<br>`;
        });
      });
      errorCallBack(message);
    });
  }

  async read(successcallBack?: () => void, errorCallBack?: (errorMessage: string) => void): Promise<List_Product[]> {
    const promiseData: Promise<List_Product[]> = this.httpClientService.get<List_Product[]>({
      controller: "Product"
    }).toPromise();

    promiseData.then(d => successcallBack())
      .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message))

    return await promiseData;
  }
}

