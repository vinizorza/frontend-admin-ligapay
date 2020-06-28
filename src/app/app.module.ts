import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ROUTES} from './app.routes';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UsuariosPageComponent } from './usuarios-page/usuarios-page.component';
import { UsuariosService } from './usuarios-page/usuarios.service';
import { MenuComponent } from './menu/menu.component';
import {HttpClientModule} from '@angular/common/http';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule, MatSnackBar,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UsuarioPageComponent } from './usuario-page/usuario-page.component';
import { LoginComponent } from './security/login/login.component';
import { LoginService } from './security/login/login.service';
import { NotificationComponent } from './commons/notification/notification.component';
import { TransactionComponent } from './transaction/transaction.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosPageComponent,
    MenuComponent,
    UsuarioPageComponent,
    LoginComponent,
    NotificationComponent,
    TransactionComponent
  ],
  entryComponents: [NotificationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatSortModule,
    MatCardModule,
    MatSnackBarModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    UsuariosService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
