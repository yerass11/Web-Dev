import {Component} from '@angular/core';

import {products} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;


  share(link: string) {
    window.alert('The product has been shared!');
    let text = link;
    let apiToken = "5821223495:AAHiYvVHiVLcVHiERy66feInE49nv4y-o2Q";
    let chatId = 488914123;
    let urlString = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${text}`;
    let request = new XMLHttpRequest();
    request.open("POST", urlString);
    request.send();

    let response = request.response;
    if (response == 200){

    }

  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
