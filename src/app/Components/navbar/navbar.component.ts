import { Component } from '@angular/core';
import { AuthService } from '../../Service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  image:string="../../../assets/logo.png";
  isload:boolean=false
constructor(private _Auth:AuthService){
_Auth.userDate.subscribe({
  next:()=>{
if(_Auth.userDate.getValue()!==null){
  this.isload=true
}
else{
  this.isload=false
}
  }
})
}
   
logout(){
  this._Auth.logout();
}

}
