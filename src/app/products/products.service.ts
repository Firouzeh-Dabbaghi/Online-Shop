import { Product } from './product.model';
export class ProductsService {
  private products: Product[] = [
    new Product(
      'T-shirt',
      'Wholesale New arrival 3d OEM mens polo shirt,custom printing logo design polo tshirt,100% cotton mens sports golf polo t shirts',
      'https://sc04.alicdn.com/kf/H34893a07cca94126b58c452f0ba27f1fc.jpg',
      '2021-01-01',
      '€0.8532',
      5
    ),
    new Product(
      'Socks',
      'All Cotton Slouch Cotton Socks for women socks',
      'https://sc04.alicdn.com/kf/H1b931fd3880b419b86f9f3cdc8e2e825w.jpg',
      '2021-01-02',
      '€0.0854',
      10
    ),
    new Product(
      'Baby Girls Clothing',
      '2Pcs Baby Girls Clothing Sets Autumn Winter Toddler Girls Clothes Kids Tracksuit For Girl Suit Children Clothing 1 to 6 Year',
      'https://sc04.alicdn.com/kf/H8f2818e7e2d2403ca15e1edc91154602z.jpg',
      '2021-01-03',
      '€3.43',
      1
    ),
    new Product(
      ' hand wash-free flat ',
      'Large size lazy hand wash-free flat mop with inner box',
      'https://sc04.alicdn.com/kf/H29cc7f2f1ed04c9983157d64a5386d9eM.jpg',
      '2021-01-04',
      '€4.70',
      2
    ), new Product(
      'T-shirt',
      'Wholesale New arrival 3d OEM mens polo shirt,custom printing logo design polo tshirt,100% cotton mens sports golf polo t shirts',
      'https://www.marketing91.com/wp-content/uploads/2018/05/Luxury-Brands.jpg',
      '2021-01-05',
      '€0.8532',
      3
    ),
    new Product(
      'Socks',
      'All Cotton Slouch Cotton Socks for women socks',
      'https://cdn.trendhunterstatic.com/thumbs/october-2016-luxury-product.jpeg',
      '2021-01-06',
      '€0.0854',
      6
    ),
    new Product(
      'Baby Girls Clothing',
      '2Pcs Baby Girls Clothing Sets Autumn Winter Toddler Girls Clothes Kids Tracksuit For Girl Suit Children Clothing 1 to 6 Year',
      'https://cdn.shopify.com/s/files/1/0458/2260/7524/products/Gesamtbundle2-min_1500x1500.jpg?v=1616866453',
      '2021-01-07',
      '€3.43',
      10
    ),
    new Product(
      ' hand wash-free flat ',
      'Large size lazy hand wash-free flat mop with inner box',
      'https://asset.feelgood-shop.com/public/media/34/b8/d1/1622182044/a699-entwaesserung-vorderseite.jpg',
      '2021-01-08',
      '€4.70',
      1
    )
  ]

  getProductImagesUrl() {
    return this.products.map(x => x.imagePath);
  }

  getProducts() {
    return this.products;
  }

  /**top 5 most visited product */
  getMostVisitedProducts() {
    const sortList = this.products.sort((a, b) => (a.view < b.view ? 1 : -1));
    const mostVisited = sortList.slice(0, 5);
    return mostVisited.map(x => x.imagePath);
  }

  /**last 5 product */
  getlastProduct(){
    const sortList = this.products.sort((a, b) => (a.date < b.date ? 1 : -1));
    const latestProduct = sortList.slice(0, 5);
    return latestProduct;
  }
}
