import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'


import { Products, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Products | undefined;
  

  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productNameFromRoute = String(routeParams.get('productName'));
  
    this.product = products.find(product => product.name === productNameFromRoute);
  }

  tgRedirect(url: string): void{ 
    let shareLink1 = "https://t.me/share/url?url=".concat(url);
    let shareLink = shareLink1.concat("&text={IT WORKS}");
    console.log(shareLink);
    window.open(shareLink)
    
  }

  wpRedirect(url: string): void{ 
    let shareLink = "https://api.whatsapp.com/send?text=".concat(url);
    // let shareLink = shareLink1.concat("&text={IT WORKS}");
    console.log(shareLink);
    window.open(shareLink)
    
  }
}
