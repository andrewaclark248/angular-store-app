import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component'
import { ProductDetailComponent } from './components/product-detail/product-detail.component'
import { CartComponent } from './components/cart/cart.component'
import { CheckoutSuccessComponent } from './components/checkout-success/checkout-success.component'

const routes: Routes = [
  { path: '', component: ProductListComponent},
  {path: 'product-detail/:id', component: ProductDetailComponent},
  {path: 'cart', component: CartComponent},
  {path: "checkout-success/:name/:price", component: CheckoutSuccessComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
