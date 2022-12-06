import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  /** */
  getClients(): Promise<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .toPromise()
  }

  /** */
  getBranchOffices(): Promise<any> {
    return this.http.get('https://restcountries.com/v2/region/americas')
      .toPromise()
  }

  /** */
  getProducts(): Promise<any> {
    return this.http.get('https://fakerestapi.azurewebsites.net/api/v1/Books')
      .toPromise()
  }
}
