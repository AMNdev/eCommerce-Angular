import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  private lastProductsSeen: Product[] = [];
  public lastProductsEmitter = new EventEmitter<Product[]>();

  private url: string = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}`).pipe(
      // tap(p=>console.log('petición http AllProducts')),
      catchError((error) => {
        console.warn(error.message);

        return of([]);
      })
    );
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/category/${category}`).pipe(
      catchError((err) => {
        console.log(err);
        return of([]);
      })
    );
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`).pipe(
      catchError((err) => {
        console.log(err);
        return of();
      }),
      tap((product) => this.refreshLastSeen(product))
    );
  }

  refreshLastSeen(product: Product) {
    if (!product) return;
    if (
      JSON.stringify(this.lastProductsSeen).includes(JSON.stringify(product))
    ) {
      const deleteIndex = this.lastProductsSeen.findIndex(
        (prod) => prod.id == product.id
      );
      this.lastProductsSeen.splice(deleteIndex, 1);
    }

    this.lastProductsSeen.unshift(product);
    if (this.lastProductsSeen.length >= 5) this.lastProductsSeen.splice(5);
    this.lastProductsEmitter.emit(this.lastProductsSeen);
  }

  searchProduct(term: string): Observable<Product[]> {
    return this.getAllProducts().pipe(
      map((products) =>
        products.filter((product) =>
          JSON.stringify(product).toLowerCase().includes(term.toLowerCase())
        )
      )
    );
  }
}
