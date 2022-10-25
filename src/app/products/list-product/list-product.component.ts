import { Product } from '../../core/model/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatsService } from 'src/app/core/services/stats.service';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public title: String;
  public list:Product[];
  public listf:Product[];
  public all:Product[];
  public priceMax: number;
  public category: String;
  public stock: number;
  constructor(private route: ActivatedRoute,private c: StatsService,private lp: ProductsService) {
  }
  ngOnInit(): void {
    this.title = 'MyStore App';
 
    this.all=this.lp.list;
    this.listf=this.all;
    this.stock=this.c.getCount(this.listf,"quantity",0);
    this.route.params.subscribe(
      (params)=>{
        this.category = params['category'] ;

        if (this.category!=null){
          this.list=this.all.filter((product)=>product.category==this.category)
          this.filterList();
          this.stock=this.c.getCount(this.listf,"quantity",0);

          
        }
        else 
        {
          this.list=this.all;
        }
      }
    )
  
   

  }
  counter():void{
    this.stock=this.c.getCount(this.listf,"quantity",0);
  }
  filterList():void{
    if (this.priceMax!=null){
      this.listf=this.list.filter((product)=>product.price<=this.priceMax)
    }
    else {
      this.listf=this.list;
    }
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
