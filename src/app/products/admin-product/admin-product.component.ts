import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/model/product';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
  constructor(private ps :ProductsService) { }
  public products: Product[]
 
  ngOnInit(): void {
    this.products=this.ps.list.filter(product=>product.quantity==0);
  }
  delete(p:Product){
    let i= this.products.indexOf(p);
    this.products.splice(i,1)
  }

}
