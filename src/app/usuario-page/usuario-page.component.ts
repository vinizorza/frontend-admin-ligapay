import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UsuarioService} from './usuario.service';
import {Usuario} from '../usuarios-page/usuario.model';
import {TransacaoService} from '../transaction/transacao.service';
import {Transacao} from '../transaction/transacao.model';
import {Transaction} from '../transaction/transaction.model';

@Component({
  selector: 'lpa-usuario-page',
  templateUrl: './usuario-page.component.html',
  styleUrls: ['./usuario-page.component.css']
})
export class UsuarioPageComponent implements OnInit {

  usuarioId: string;
  usuario: Usuario;
  transacoesOrigem: Transaction[];
  transacoesDestino: Transaction[];

  constructor(private route: ActivatedRoute, private usuarioService: UsuarioService, private transacaoService: TransacaoService) { }

  calcularPontuacao(usuario: Usuario) {
    usuario.time.somaScores = usuario.time.scores.reduce((a, b) => a + b.score, 0);
    usuario.time.somaScores = +usuario.time.somaScores.toFixed(2);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.usuarioId = params.get('id');
    });
    this.usuarioService.getUsuario(this.usuarioId).subscribe(res => {
      res['data']['users'].forEach(this.calcularPontuacao);
      this.usuario = res['data']['users'][0];
    });
    this.transacaoService.getTransacoesByOrigin(this.usuarioId).subscribe(res => {
      this.transacoesOrigem = res['data']['transactions'];
    });
    this.transacaoService.getTransacoesByDestination(this.usuarioId).subscribe(res => {
      this.transacoesDestino = res['data']['transactions'];
    });
  }
}
