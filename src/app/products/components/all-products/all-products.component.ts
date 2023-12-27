import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { product } from '../../product';
import { error } from 'console';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  categories: any[] = [];
  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.service.getAllProducts().subscribe(
      (items: any) => {
        console.log(items);
        this.products = items;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getCategories() {
    this.service.getAllCategories().subscribe(
      (items: any) => {
        console.log(items);
        this.categories = items;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  filterCategory(event: any) {
    let category = event.target.value;
    if (category == 'All') {
      this.getProducts();
    } else this.getProductsWithFilter(category);
  }

  getProductsWithFilter(filter: string) {
    this.service.getFilteredProducts(filter).subscribe((res: any) => {
      this.products = res;
    });
  }
}
