import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "../app/views/home/home.component";
import { ProductCrudComponent } from "../app/views/product-crud/product-crud.component";
import { ProductCreateComponent } from "./components/product/product-create/product-create.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "carros", component: ProductCrudComponent },
  { path: "carros/novo", component: ProductCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
