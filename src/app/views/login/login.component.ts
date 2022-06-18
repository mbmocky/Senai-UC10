import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  loginModel = new Login();

  mensagem = " ";

  onSubmit() {
    this.loginService.login(this.loginModel).subscribe( (response) => {
      this.mensagem= "Login Bem Sucedido!";
      this.router.navigateByUrl("/");
    }, (erro) => {
      if(erro.status == 400) {
        this.mensagem = "E-mail ou senha não encontrado"
      }
      // console.log(erro)
      // this.mensagem = erro.error;
    })
  }

}