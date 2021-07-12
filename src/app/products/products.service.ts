import { Product } from './product.model';
export class ProductsService {
  private products: Product[] = [
    new Product(
      'T-shirt',
      'Wholesale New arrival 3d OEM mens polo shirt,custom printing logo design polo tshirt,100% cotton mens sports golf polo t shirts',
      'https://sc04.alicdn.com/kf/H34893a07cca94126b58c452f0ba27f1fc.jpg',
      '2021-01-01',
      '€0.8532'
    ),
    new Product(
      'Socks',
      'All Cotton Slouch Cotton Socks for women socks',
      'https://sc04.alicdn.com/kf/H1b931fd3880b419b86f9f3cdc8e2e825w.jpg',
      '2021-01-02',
      '€0.0854'
    ),
    new Product(
      'Baby Girls Clothing',
      '2Pcs Baby Girls Clothing Sets Autumn Winter Toddler Girls Clothes Kids Tracksuit For Girl Suit Children Clothing 1 to 6 Year',
      'https://sc04.alicdn.com/kf/H8f2818e7e2d2403ca15e1edc91154602z.jpg',
      '2021-01-03',
      '€3.43'
    ),
    new Product(
      ' wash-free flat ',
      'Large size lazy hand wash-free flat mop with inner box',
      'https://sc04.alicdn.com/kf/H29cc7f2f1ed04c9983157d64a5386d9eM.jpg',
      '2021-01-04',
      '€4.70'
    ), new Product(
      'T-shirt',
      'Wholesale New arrival 3d OEM mens polo shirt,custom printing logo design polo tshirt,100% cotton mens sports golf polo t shirts',
      'https://sc04.alicdn.com/kf/H34893a07cca94126b58c452f0ba27f1fc.jpg',
      '2021-01-01',
      '€0.8532'
    ),
    new Product(
      'Socks',
      'All Cotton Slouch Cotton Socks for women socks',
      'https://sc04.alicdn.com/kf/H1b931fd3880b419b86f9f3cdc8e2e825w.jpg',
      '2021-01-02',
      '€0.0854'
    ),
    new Product(
      'Baby Girls Clothing',
      '2Pcs Baby Girls Clothing Sets Autumn Winter Toddler Girls Clothes Kids Tracksuit For Girl Suit Children Clothing 1 to 6 Year',
      'https://sc04.alicdn.com/kf/H8f2818e7e2d2403ca15e1edc91154602z.jpg',
      '2021-01-03',
      '€3.43'
    ),
    new Product(
      ' wash-free flat ',
      'Large size lazy hand wash-free flat mop with inner box',
      'https://sc04.alicdn.com/kf/H29cc7f2f1ed04c9983157d64a5386d9eM.jpg',
      '2021-01-04',
      '€4.70'
    )
  ]

  getProductImagesUrl() {
    return this.products.map(x => x.imagePath);
  }

  getProducts(){
    return this.products;
  }
}
