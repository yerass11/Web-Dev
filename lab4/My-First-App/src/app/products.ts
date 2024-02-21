export interface Product {
  id: number;
  name: string;
  rating: string;
  description: string;
  link: string;
  img: string;

}

export const products = [
  {
    id: 1,
    name: `IPhone11`,
    rating: '4.5 / 5.0',
    description: 'A large phone with one of the best screens',
    link: `https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAxbefBhDfARIsAL4XLRqJQ2ypisjDix88pAAY3uqDCOhK633XOEVDbIroqqdhBMpVDxpsd6EaAp31EALw_wcB#!/item`,
    img: `Iphone11.jpg`,
  },
  {
    id: 2,
    name: 'IPhone 13 Mini',
    rating: '4.7 / 5.0',
    description: 'A great phone with one of the best cameras',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-mini-256gb-chernyi-102298504/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAxbefBhDfARIsAL4XLRqJQ2ypisjDix88pAAY3uqDCOhK633XOEVDbIroqqdhBMpVDxpsd6EaAp31EALw_wcB#!/item',
    img: 'Iphone13-mini.jpg'
  },
  {
    id: 3,
    name: 'Ipad',
    rating: '4.8 / 5.0',
    description: 'Big tablet',
    link: 'https://kaspi.kz/shop/p/apple-ipad-2021-10-2-64gb-wi-fi-seryi-102301598/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAxbefBhDfARIsAL4XLRqJQ2ypisjDix88pAAY3uqDCOhK633XOEVDbIroqqdhBMpVDxpsd6EaAp31EALw_wcB#!/item',
    img: 'Ipad.jpg',
  },
  {
    id: 4,
    name: 'Asus ',
    rating: '3.9 / 5.0',
    description: 'Good Laptop',
    link: 'https://kaspi.kz/shop/p/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAxbefBhDfARIsAL4XLRqJQ2ypisjDix88pAAY3uqDCOhK633XOEVDbIroqqdhBMpVDxpsd6EaAp31EALw_wcB#!/item ',
    img: 'Asus.jpg',
  },
  {
    id: 5,
    name: 'Iphone13',
    rating: '4.7 / 5.0',
    description: 'Good Iphone version',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAxbefBhDfARIsAL4XLRqJQ2ypisjDix88pAAY3uqDCOhK633XOEVDbIroqqdhBMpVDxpsd6EaAp31EALw_wcB#!/item',
    img: 'Iphone13.jpg',
  },
  {
    id: 6,
    name: 'Iphone14',
    rating: '3.7 / 5.0',
    description: 'Useless phone for the price',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAxbefBhDfARIsAL4XLRqJQ2ypisjDix88pAAY3uqDCOhK633XOEVDbIroqqdhBMpVDxpsd6EaAp31EALw_wcB#!/item',
    img: 'Iphone14.jpg',
  },
  {
    id: 7,
    name: 'Lenovo IdeaPad 3',
    rating: '4.1 / 5.0',
    description: 'Good Laptop for the price',
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAxbefBhDfARIsAL4XLRqJQ2ypisjDix88pAAY3uqDCOhK633XOEVDbIroqqdhBMpVDxpsd6EaAp31EALw_wcB#!/item',
    img: 'LenovoIdeapad3.jpg',
  },
  {
    id: 8,
    name: 'SamsungA13',
    rating: '4.9 / 5.0',
    description: 'Good phone for the price',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAxbefBhDfARIsAL4XLRqJQ2ypisjDix88pAAY3uqDCOhK633XOEVDbIroqqdhBMpVDxpsd6EaAp31EALw_wcB#!/item',
    img: 'SamsungA13.jpg',
  },
  {
    id: 9,
    name: `Samsung Galaxy Tab4`,
    rating: '4.0 / 5.0',
    description: 'Good tablet for the price',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a8-sm-x205n-10-5-djuimov-4-gb-64-gb-seryi-103450735/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAxbefBhDfARIsAL4XLRqJQ2ypisjDix88pAAY3uqDCOhK633XOEVDbIroqqdhBMpVDxpsd6EaAp31EALw_wcB#!/item',
    img: 'SamsungGalaxyTab4.jpg',
  },
  {
    id: 10,
    name: 'Xiaomi Redmi11',
    rating: '4.9 / 5.0',
    description: 'Good phone for the quality && price',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiAxbefBhDfARIsAL4XLRqJQ2ypisjDix88pAAY3uqDCOhK633XOEVDbIroqqdhBMpVDxpsd6EaAp31EALw_wcB#!/item',
    img: 'XiamoRedmi11.jpg',
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
