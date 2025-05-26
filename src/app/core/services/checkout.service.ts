import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private apiUrl = `${environment.apiUrl}/checkout`;

  constructor(private http: HttpClient) {}

  // postCheckout(body: ???): Observable<any> {
  //   return this.http.post(this.apiUrl, body, { responseType: 'text' });
  // }
}
