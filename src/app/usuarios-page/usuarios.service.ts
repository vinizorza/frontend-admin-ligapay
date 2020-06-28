import { Usuario } from './usuario.model';
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
export class UsuariosService {

    constructor(private http: HttpClient, private loginService: LoginService) { }

    listarUsuarios(emailFiltro: string, nomeFiltro: string, nomeTimeFiltro: string): Observable<Usuario[]> {

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
                        `query($emailFiltro: String!, $nomeFiltro: String!, $nomeTimeFiltro: String!){
                            users( where: { email_contains: $emailFiltro
                                            team: {
                                                cartolaName_contains: $nomeFiltro
                                                name_contains: $nomeTimeFiltro }}){
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
                          variables: {
                              emailFiltro,
                              nomeFiltro,
                              nomeTimeFiltro
                          }
                },
                httpOptions
            );
        }
    }
}
