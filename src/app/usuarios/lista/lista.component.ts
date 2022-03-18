import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public users: Usuario[];

  constructor(public usuarioService:UsuarioService) {
    this.users = [];
  }

  ngOnInit(): void {
  
    this.usuarioService.getUser().subscribe(data=>{
      this.users = data;
      console.log(this.users);
    });
    
  }



}
