import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Router} from '@angular/router';
import {LoginService} from './login.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {NotificationComponent} from '../../commons/notification/notification.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formdata;

  constructor(private router: Router, private loginService: LoginService, private notification: MatSnackBar) {}

  openNotification() {
    this.notification.openFromComponent(NotificationComponent, {duration: 5000});
  }

  ngOnInit() {
    this.formdata = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required])
   });
  }

  login() {
    this.loginService.login(this.formdata.value.email,
                            this.formdata.value.senha)
                            .subscribe(data => {
                                if (this.loginService.isLogged()) {
                                  this.router.navigate(['./usuarios']);
                                  console.log(data.data.login.token);
                                } else {
                                  this.openNotification();
                                }
                              });

  }

}
