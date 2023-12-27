import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AllProductsComponent, ProductDetailsComponent],
  imports: [CommonModule,BrowserModule ],
})
export class ProductsModule {}
