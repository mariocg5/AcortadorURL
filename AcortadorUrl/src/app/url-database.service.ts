import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlDatabaseService {

  private apiUrl = 'http://localhost/unai/AcortadorUrl/src/php/recuperar-url.php';

  constructor(private http: HttpClient) { }

  getUrls(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}