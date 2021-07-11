import { Product } from './product.model';
export class ProductsService {
private product :Product[]=[
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
  )
]
}
