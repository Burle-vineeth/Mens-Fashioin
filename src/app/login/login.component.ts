import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb : FormBuilder,private http : HttpClient, private router: Router) { }

  loginForm = this.fb.group( {
    email : ['', [Validators.required]],
    password : ['', [Validators.required, Validators.minLength(8)]],
  });

  ngOnInit() {

  }

  login() {
    this.router.navigateByUrl('/home');
  }
}
