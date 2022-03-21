import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { AppState } from 'src/app/store/app.reducers';
import { Store } from '@ngrx/store';
import { cargarUsuarios } from '../../store/actions/usuarios.actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  public users: Usuario[];
  loading: boolean;
  error: any;

  constructor(private store: Store<AppState>) {

    
    this.store.dispatch(cargarUsuarios());
    
    this.store.select('usuarios').subscribe( ({users, loading, error}) => {
      this.loading = loading, 
      this.error = error, 
      this.users = users;
    })


  }



}
