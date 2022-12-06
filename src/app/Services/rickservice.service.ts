import { Injectable, Input } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickserviceService {

  url = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }



  obtenerPersonajes() {
    return this.http.get(`${this.url}/character`).toPromise();
    }
}

