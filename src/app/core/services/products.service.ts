import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public url=environment.url+'products/'
  public list: Product[] =  []
  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get<Product[]>(this.url);
  }
  addProduct(p:Product){
    return this.http.post(this.url,p);
  }
  public delete(id: number){
    return this.http.delete(this.url+id);
  }
  public getById(id:number):any{
    for (let p of this.list) {
      if(p.id==id) return p;
      }
  }
  public update(p:Product){
    return this.http.put(this.url+p.id,p);
  }
}
