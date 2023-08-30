import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  constructor(private fb : FormBuilder,private http : HttpClient, private router: Router) { }

  forgotForm = this.fb.group( {
    email : ['', [Validators.required]],
    // password : ['', [Validators.required, Validators.minLength(8)]],
  });

  ngOnInit() {

  }

  forgot() {
    this.router.navigateByUrl('/login');
  }

}
