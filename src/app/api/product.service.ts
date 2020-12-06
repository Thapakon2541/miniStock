          import {
            Injectable
          } from '@angular/core';
          import {
            HttpClient,
            HttpHeaders
          } from '@angular/common/http';
          import {
            Observable
          } from 'rxjs'
          import {
            Product
          } from './product.model'
          @Injectable({
            providedIn: 'root'
          })
          export class ProductService {
            apiURL = "http://localhost/api"
            constructor(private http: HttpClient) {}
            httpOptions = {
              headers: new HttpHeaders({
                'content-type': 'application/json'
              })
            }

            

            getProduct(): Observable < Product > {
              return this.http.get < Product > (this.apiURL + '/product.php')
            }
            
            save(product: any): Observable < Product > {
              return this.http.post < Product > (this.apiURL + '/save.php', product, {
                headers: {
                  'content-type': 'application/x-www-form-urlencoded'
                }
              })
            }
          }
