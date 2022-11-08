import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/model/product';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  public product:Product;
  constructor(private ps: ProductsService, private router: Router, private route: ActivatedRoute) { }
  public action:String;
  ngOnInit(): void {
    if (    this.ps.getById(this.route.snapshot.params["id"])    ){
      this.product= this.ps.getById(this.route.snapshot.params["id"]) ;
      this.action="Update";
    }
    else{
    this.product=new Product();
    this.product.nbrLike=0;
    this.product.id=this.ps.list[this.ps.list.length-1].id+1;
    this.action="Create";
    }
  }
  save(){
    if (    this.ps.getById(this.route.snapshot.params["id"])    )
    this.ps.update(this.product);

    else
      this.ps.list.push(this.product);
    this.router.navigate(['/product/list'])

  }


}
