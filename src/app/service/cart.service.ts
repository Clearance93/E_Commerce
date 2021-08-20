import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = [];
  public producList = new BehaviorSubject<any>([]);

  constructor() { }

  getProduct(){
    return this.producList.asObservable();
  }

  // setProduct(product: any) {
  //   this.cartItemList.push(...product);
  //   this.producList.next(product)
  // }

  addToCart(product: any){
    this.cartItemList.push(product);
    this.producList.next(this.cartItemList);
    this.getTotalprice();
    console.log(this.cartItemList)
  }
  getTotalprice(): number {
    let grandTotal = 0
    this.cartItemList.map((a:any) => {
      grandTotal += a.total
    })
    return grandTotal;
  }

  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any) => {
      if(product.is === a.id){this.cartItemList.splice(index,1);
      }
    })
    this.producList.next(this.cartItemList);
  }

  removeAllCart(){
    this.cartItemList = []
    this.producList.next(this.cartItemList);
  }
}
