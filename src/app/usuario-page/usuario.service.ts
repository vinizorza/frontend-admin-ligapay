import { Usuario } from '../usuarios-page/usuario.model';
import { LIGAPAY_API } from '../app.api';
import { LoginService } from '../security/login/login.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getUsuario(usuarioId: string): Observable<Usuario[]> {

    if (this.loginService.isLogged()) {

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.loginService.getTokenUsuarioLogado()
        })
      };

      return this.http.post<Usuario[]>(LIGAPAY_API.ligapay_prisma,
        {
          query:
            `query($usuarioId: UUID){
                            users( where: { id: $usuarioId}){
                              id
                              email
                              time: team{
                                nome: cartolaName
                                nomeTime: name
                                scores (where: { season: { current: true } }) {
                                  score
                                }
                              }
                              carteira: wallet {
                                montanteCarteira: amount
                              }
                            }
                          }`,
          variables: {usuarioId}
        },
        httpOptions
      );
    }
  }
}
