import { Component, OnInit} from '@angular/core';
import { Products, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  allproducts: Products[] = products;
  filtered_products = [...products];
  selectedCategory : string = "None";
  p = [...products];

  share() {
    window.alert('The product has been shared!');
  }

  ngOnInit(): void {
    this.moreThanTen();
  }

  filterByCategory() {
    if(this.selectedCategory == 'None') {
      this.filtered_products = this.allproducts
    } else {
      this.filtered_products = this.allproducts.filter(product => product.category === this.selectedCategory);
    }
  }

  updateFilteredProducts(value: string){
    this.selectedCategory = value;
    console.log(this.selectedCategory)
    this.filterByCategory();
  }

  incrementLikes(id : number) {
    products.filter(product => product.id === id).map(product => product.like += 1) 
    this.moreThanTen();
  }

  moreThanTen(){
    this.allproducts = this.allproducts.filter(p => p.like <= 10)
    this.filterByCategory();
  }


  deleteProduct(id : number) {
    this.allproducts = this.allproducts.filter(product => product.id !== id);
    this.filterByCategory();
  }
}



