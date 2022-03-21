import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import * as usuarioActions from "../actions";
import { UsuarioService } from '../../services/usuario.service';

@Injectable()

export class UsuarioEffects{
    constructor(
        private actions$: Actions,
        private usuarioervice: UsuarioService
    ){}

    cargarUsuario$ = createEffect(
    () => this.actions$.pipe(
        ofType(usuarioActions.cargarUsuario),
        mergeMap(
            (action) => this.usuarioervice.getUseById(action.id)
            .pipe(
                map(user => usuarioActions.cargarUsuarioSuccess({usuario: user})),
                catchError( err => of(usuarioActions.cargarUsuarioError({payload: err})))
            )
        )
    )
    );
}