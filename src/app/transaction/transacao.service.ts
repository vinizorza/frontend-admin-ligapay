import { LIGAPAY_API } from '../app.api';
import { LoginService } from '../security/login/login.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Transaction} from './transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  listarTransacoes(): Observable<Transaction[]> {

    if (this.loginService.isLogged()) {

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.loginService.getTokenUsuarioLogado()
        })
      };

      return this.http.post<Transaction[]>(LIGAPAY_API.ligapay_prisma,
        {
          query:
            `query{
              transactions{
                createdAt
                amount
                destination{
                  user{
                    team{
                      cartolaName
                    }
                  }
                }
                origin{
                  user{
                    team{
                      cartolaName
                    }
                  }
                }
              }
            }`
        },
        httpOptions
      );
    }
  }

  getTransacoesByOrigin(origem: string): Observable<Transaction[]> {

    if (this.loginService.isLogged()) {

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.loginService.getTokenUsuarioLogado()
        })
      };

      return this.http.post<Transaction[]>(LIGAPAY_API.ligapay_prisma,
        {
          query:
            `query{
              transactions( where: {origin: {user: {id: "` + origem + `"}}} ){
                createdAt
                amount
                destination{
                  user{
                    team{
                      cartolaName
                    }
                  }
                }
                origin{
                  user{
                    team{
                      cartolaName
                    }
                  }
                }
              }
            }`
        },
        httpOptions
      );
    }
  }

  getTransacoesByDestination(destino: string): Observable<Transaction[]> {

    if (this.loginService.isLogged()) {

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.loginService.getTokenUsuarioLogado()
        })
      };

      return this.http.post<Transaction[]>(LIGAPAY_API.ligapay_prisma,
        {
          query:
            `query{
              transactions( where: {destination: {user: {id: "` + destino + `"}}} ){
                createdAt
                amount
                destination{
                  user{
                    team{
                      cartolaName
                    }
                  }
                }
                origin{
                  user{
                    team{
                      cartolaName
                    }
                  }
                }
              }
            }`
        },
        httpOptions
      );
    }
  }
}
