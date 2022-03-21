import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { AppState } from 'src/app/store/app.reducers';
import { cargarUsuario } from '../../store/actions/usuario.action';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  public usuario: Usuario;

  constructor( private router: ActivatedRoute, private store:Store<AppState>) {
    this.router.params.subscribe(({id}) => {
      this.store.dispatch(cargarUsuario({id: id}))
    });

    this.store.select('usuario').subscribe(({user}) => this.usuario = user);

  }

}
