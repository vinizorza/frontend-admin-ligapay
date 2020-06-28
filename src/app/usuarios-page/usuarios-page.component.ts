import {Component, OnInit} from '@angular/core';
import {Usuario} from './usuario.model';
import {UsuariosService} from './usuarios.service';
import {FormGroup, FormControl} from '@angular/forms';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'lpa-usuarios-page',
  templateUrl: './usuarios-page.component.html',
  styleUrls: ['./usuarios-page.component.css']
})
export class UsuariosPageComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'email', 'nomeTime', 'montanteCarteira', 'somaScores', 'acoes'];
  dataSource: Usuario[];
  formFiltro;

  constructor(private usuariosService: UsuariosService) {
  }

  calcularPontuacao(usuario: Usuario) {
    usuario.time.somaScores = usuario.time.scores.reduce((a, b) => a + b.score, 0);
    usuario.time.somaScores = +usuario.time.somaScores.toFixed(2);
  }

  buscarUsuarios() {
    this.usuariosService.listarUsuarios(this.formFiltro.value.email,
      this.formFiltro.value.nome,
      this.formFiltro.value.nomeTime).subscribe(res => {
        res['data']['users'].forEach(this.calcularPontuacao);
        this.dataSource = res['data']['users'];
    });
  }

  ngOnInit() {
    this.formFiltro = new FormGroup({
      nome: new FormControl(''),
      email: new FormControl(''),
      nomeTime: new FormControl('')
    });

    this.buscarUsuarios();
  }
}
