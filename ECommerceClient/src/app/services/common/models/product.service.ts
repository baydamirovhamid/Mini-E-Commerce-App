import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Create_Product } from '../../../contracts/create_product';
import { HttpErrorResponse } from '@angular/common/http';
import { List_Product } from '../../../contracts/list_product';
import { Observable, firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService: HttpClientService) { }

  create(product: Create_Product, successCallBack?: () => void, errorCallBack?: (errorMessage:string) => void) {
    this.httpClientService.post({
      controller: "Products"

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

  async read(page: number = 0, size: number = 5, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void): Promise<{ totalCount: number; products: List_Product[] }> {
    try {
      const response = await firstValueFrom(
        this.httpClientService.get<{ totalCount: number; products: List_Product[] }>({
          controller: "Products",
          queryString: `page=${page}&size=${size}`
        })
      );
      successCallBack?.();
      return response;
    } catch (error) {
      if (error instanceof HttpErrorResponse) {
        errorCallBack?.(error.message);
      }
      throw error;
    }
  }

  async delete(id: string) {
    const deleteObservable: Observable<any> = this.httpClientService.delete<any>({
      controller: "Products"
    }, id);

    await firstValueFrom(deleteObservable);
  }
}
