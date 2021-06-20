import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  form: any = {
    
    username: null,
    password: null
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];


  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,
    private router: Router) { }
    
    
  ruc1(){
    let r : any = document.getElementById("ruc")
    r.value = 20505506481 
    this.form.username = r.value;
  }

  ruc2(){
    var r :any = document.getElementById("ruc")
    r.value = 20607121118 
    this.form.ruc = r.value;
   }

   ruc3(){
    var r :any = document.getElementById("ruc")
    r.value = 20425954114 
    this.form.ruc = r.value;
   }

   ruc4(){
    var r :any = document.getElementById("ruc")
    r.value = 20267405680 
    this.form.ruc = r.value;
   }

   ruc5(){
    var r :any = document.getElementById("ruc")
    r.value= 20513536845 
    this.form.ruc = r.value;
   }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigate(['/usuario'])
      },
      err => {
        this.errorMessage = err.error.mensaje;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

  navigate() {
    
 }
}
