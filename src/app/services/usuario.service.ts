import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private URL: string;

  constructor(private http: HttpClient) {
    this.URL = 'https://reqres.in/api';
  }  

  getUser() {
    return this.http.get(`${this.URL}/users/`)
           .pipe(map( resp => resp['data']));
  }

}
