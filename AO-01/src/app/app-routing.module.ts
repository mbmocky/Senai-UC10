import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { CarrinhoComponent } from './views/carrinho/carrinho.component';
import { ConfirmcontatoComponent } from './views/confirmcontato/confirmcontato.component';
import { ConfirmrecupsenhaComponent } from './views/confirmrecupsenha/confirmrecupsenha.component';
import { ContatoComponent } from './views/contato/contato.component';
import { HomeComponent } from './views/home/home.component';
import { IndexComponent } from './views/index/index.component';
import { LoginComponent } from './views/login/login.component';
import { ProdutoComponent } from './views/produto/produto.component';
import { RecuperarsenhaComponent } from './views/recuperarsenha/recuperarsenha.component';

const routes: Routes = [
  { path: "home", component:HomeComponent},
  { path: 'carrinho', component: CarrinhoComponent},
  { path: 'contato', component: ContatoComponent},
  { path: "login", component: LoginComponent},
  { path: "produto", component: ProdutoComponent},
  { path: "cadastro", component: CadastroComponent},
  { path: "confirmacao", component: ConfirmcontatoComponent},
  { path: "confirmasenha", component: ConfirmrecupsenhaComponent},
  { path: "recuperarsenha", component: RecuperarsenhaComponent},
  { path: "", component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
