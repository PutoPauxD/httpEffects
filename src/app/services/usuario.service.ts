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
    return this.http.get(`${this.URL}/users?delay=1`)
    .pipe(
      map( resp => resp['data'])
    );
  }

  getUseById(id: string) {
    return this.http.get(`${this.URL}/users/${id}`)
    .pipe(
      map( resp => resp['data'])
    );
  }

}
