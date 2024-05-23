import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../../Service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLoad:boolean=false;
  apiError:string='';
constructor(private _AuthService:AuthService ,private _Router:Router){

}
user:FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.email,Validators.required]),
  password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z-0-9]/)])
})
Login(user:FormGroup){
  this.isLoad=true;
  if(user.value){
    this.isLoad=true;
  this._AuthService.login(user.value).subscribe({
    next:(res)=>{
      if(res.message==='success'){
        this.isLoad=false;
        localStorage.setItem('userToken',res.token)
        this._AuthService.decodeuser();
        this._Router.navigate(['/home']);
      }
    },
    error:(err)=>{
      this.isLoad=false;
      this.apiError=err.error.message
    }
  })
}
}
}
