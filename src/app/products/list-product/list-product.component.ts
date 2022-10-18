import { Product } from '../../core/model/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public title: String;
  public list:Product[];
  public all:Product[];
  public priceMax: number;
  public category: String;
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.title = 'MyStore App';

    this.all= [
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
    this.route.params.subscribe(
      (params)=>{
        this.category = params['category'] ;

        if (this.category!=null){
          this.list=this.all.filter((product)=>product.category==this.category)
        }
        else 
        {
          this.list=this.all;
        }
      }
    )
   

  }
  incerementLike(product:Product):void{
    let i = this.list.indexOf(product);
    if(i!=-1){
      this.list[i].nbrLike++
      //cnx to  backend side
    }
  }
  buyProduct(product:Product):void{
    let i = this.list.indexOf(product);
    if(i!=-1){
      this.list[i].quantity--
      //cnx to  backend side
    }}
}
