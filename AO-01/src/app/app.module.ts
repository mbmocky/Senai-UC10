import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './views/contato/contato.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { CarrinhoComponent } from './views/carrinho/carrinho.component';
import { ConfirmcontatoComponent } from './views/confirmcontato/confirmcontato.component';
import { ConfirmrecupsenhaComponent } from './views/confirmrecupsenha/confirmrecupsenha.component';
import { LoginComponent } from './views/login/login.component';
import { ProdutoComponent } from './views/produto/produto.component';
import { RecuperarsenhaComponent } from './views/recuperarsenha/recuperarsenha.component';
import { HomeComponent } from './views/home/home.component';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './views/index/index.component';
import { FooterComponent } from './views/footer/footer.component';
import { HeaderComponent } from './views/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    CadastroComponent,
    CarrinhoComponent,
    ConfirmcontatoComponent,
    ConfirmrecupsenhaComponent,
    LoginComponent,
    ProdutoComponent,
    RecuperarsenhaComponent,
    HomeComponent,
    IndexComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
