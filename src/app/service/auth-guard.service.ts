import { Products } from './../model/products';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  product: Products [] = [];

  constructor(private _httpClient: HttpClient) { }

  getProduct(){
    return this._httpClient.get<Products[]>(`http://localhost:3000/products/kids`).pipe(map((res:any) => {
      return res;
    }))
  }

}
