import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public list: Product[] =  [
    {
      id: 12,
      name: 'T-shirt 1',
      description :'nice T-shirt',
      price: 190,
      nbrLike: 23,
      quantity: 3,
      picture:'https://www.exist.com.tn/61575-large_default/t-shirt.jpg',
      category: 'men'
    },
    {
      id: 13,
      name: 'T-shirt 2',
      description :'nice T-shirt',
      price: 179,
      nbrLike: 0,
      quantity: 0,
      picture:'https://www.exist.com.tn/69177-large_default/t-shirt-de-sport.jpg',
      category: 'men'
    },
    {
      id: 14,
      name: 'T-shirt 3',
      description :'nice T-shirt',
      price: 250,
      nbrLike: 0,
      quantity: 2,
      picture:'https://cdn.shopify.com/s/files/1/0528/7480/5443/products/tshirt-merci-paris-bleu-front_600x.jpg?v=1653385654',
      category: 'women'
    }, {
      id: 15,
      name: 'T-shirt 4',
      description :'nice T-shirt',
      price: 50,
      nbrLike: 0,
      quantity: 10,
      picture:'https://i.etsystatic.com/13416370/r/il/e476ce/3525121296/il_fullxfull.3525121296_8o3l.jpg',
      category: 'kids'
    }
    
  ]
  public delete():void{
    
  }
  public getById(id:number):any{
    for (let p of this.list) {
      if(p.id==id) return p;
      }
  }
  public update(p2:Product):void{
    for (let p of this.list) {
      if(p.id==p2.id) p=p2 ;
      }
  }
  constructor() { }
}
