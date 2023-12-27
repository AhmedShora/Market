import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  categories: any[] = [];
  loading:boolean=false;
  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loading=true;
    this.service.getAllProducts().subscribe(
      (items: any) => {
        this.loading=false;
        console.log(items);
        this.products = items;
      },
      (error) => {
        this.loading=false;
        console.log(error);
      }
    );
  }

  getCategories() {
    this.loading=true;
    this.service.getAllCategories().subscribe(
      (items: any) => {
        this.loading=false;
        console.log(items);
        this.categories = items;
      },
      (error) => {
        this.loading=false;
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
    this.loading=true;
    this.service.getFilteredProducts(filter).subscribe((res: any) => {
      this.loading=false;
      this.products = res;
    });
  }
}
