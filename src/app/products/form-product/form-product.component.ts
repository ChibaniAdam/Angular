import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/model/product';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  public product:Product;
  constructor(private ps: ProductsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.product=this.ps.getById(this.route.snapshot.params["id"]);
 
  }
  save(){
    this.ps.update(this.product);
    this.router.navigate(['/product/list'])
  }

}
