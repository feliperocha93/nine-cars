import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { Router } from "@angular/router";
import { Product } from "../product.model";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: "Carro teste",
    price: 120.0,
  };

  constructor(private productservice: ProductService, private router: Router) {}

  ngOnInit(): void {}

  createProduct(): void {
    this.productservice.create(this.product).subscribe(() => {
      this.productservice.showMessage("Produto criado");
      this.router.navigate(["/carros"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/carros"]);
  }
}
