import { Component, OnInit } from '@angular/core';
import {Usuario} from '../usuarios-page/usuario.model';
import {UsuariosService} from '../usuarios-page/usuarios.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Transacao} from './transacao.model';
import {TransacaoService} from './transacao.service';
import {Transaction} from './transaction.model';

const transacoes: Transacao[] = [
  {id: '1', origem: 'sss', destino: 'sss', montante: 222, data: '23/95'}
];

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})

export class TransactionComponent implements OnInit {

  displayedColumns: string[] = ['origin', 'destination', 'amount', 'createdAt'];
  dataSource: Transaction[];

  constructor(private transacaoService: TransacaoService) {
  }



  ngOnInit() {
    this.transacaoService.listarTransacoes().subscribe(res => {
      console.log(res['data']['transactions']);
      this.dataSource = res['data']['transactions'];
    });
  }
}
