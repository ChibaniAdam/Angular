import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public l: boolean=true;
  constructor(private us: UsersService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
   /* this.form= new FormGroup(
      {
        email: new FormControl('',[Validators.required,Validators.email]),
        password: new FormControl('',[Validators.required,Validators.minLength(5)])
      }
    )*/
      this.form = this.fb.group(
        {
          email: ["",[Validators.required,Validators.email]],
          password: ["",[Validators.required,Validators.minLength(5)]]
        }
      )
  
  }

  login(){
    console.log(this.us.getLogin(this.form.value.email,this.form.value.password));
    if (this.us.getLogin(this.form.value.email,this.form.value.password)) this.router.navigate(['/product/list'])
    else 
    this.l=false

  }

}
