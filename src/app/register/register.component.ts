import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  @ViewChild('confirm') confirm !: ElementRef;

  constructor(private fb : FormBuilder,private http : HttpClient ) { }

  registerForm = this.fb.group( {
    name : ['', [Validators.required, Validators.minLength(5)]],
    email : ['', [Validators.required]],
    password : ['', [Validators.required, Validators.minLength(8)]],
    age: ['', Validators.required],
    terms: ['', Validators.required],
  })

  ngOnInit() {

  }

  register() {
    if(this.registerForm.valid && this.confirm.nativeElement.value == this.registerForm.value.password) {
      this.http.post('http://localhost:5000/',this.registerForm.value).subscribe( (data) => {
        console.log(data);
      })
    }else {
      console.log('failed');
    }
    
  }
}
