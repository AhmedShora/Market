import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [AllProductsComponent, ProductDetailsComponent, ProductComponent],
  imports: [CommonModule,BrowserModule,SharedModule ],
})
export class ProductsModule {}
