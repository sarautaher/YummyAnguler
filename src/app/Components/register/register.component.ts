import { Component } from '@angular/core';
import { AuthService } from '../../Service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  isLoad:boolean=false;
  apiError:string='';
constructor( private _AuthService:AuthService ,private _Router:Router){}
user:FormGroup=new FormGroup({
  name: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z-a-z]/)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]/)]),
    rePassword: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]/)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
},{
  validators:this.Repassword
})
Repassword(formGroup: any) {
const pass=formGroup.get('password');
const Rapss=formGroup.get('rePassword');
if(pass?.value==Rapss?.value){
return null;
}else{
  Rapss?.setErrors({Passwordmatch:' Repassword dont matches Password' })
  return{
    Passwordmatch: 'Re-entered password does not match the password'
  }
}
}
register(user:FormGroup){
if(user.value){
  this._AuthService.Register(user.value).subscribe({
    next:(res)=>{ console.log(res)
    this.isLoad=true;
  if(res.message==='success'){
    this.isLoad=false;
    this._Router.navigate(['/login']);
  }},
    error:(err)=>{
      this.apiError=err.error.message;
      this.isLoad=false;
    }
  })
}
}
}
