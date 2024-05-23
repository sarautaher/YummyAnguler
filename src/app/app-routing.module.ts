import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { authGuard } from './Gurd/auth.guard';
import { CategoriesComponent } from './Components/categories/categories.component';
import { AreaComponent } from './Components/area/area.component';
import { IngredientsComponent } from './Components/ingredients/ingredients.component';
import { MealDetailsComponent } from './Components/meal-details/meal-details.component';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:'full'},
  {path:'home',component:HomeComponent, canActivate:[authGuard],title:"home"},
  {path:'categories/:id',component:CategoriesComponent, canActivate:[authGuard],title:"categories"},
  {path:'Area',component:AreaComponent, canActivate:[authGuard],title:"Area"},
  {path:'Ingredients',component:IngredientsComponent, canActivate:[authGuard],title:"Ingredients"},
  {path:'MealDetails/:id',component:MealDetailsComponent, canActivate:[authGuard],title:"MealDetails"},
  {path:'login',component:LoginComponent,title:"login"},
  {path:'register',component:RegisterComponent,title:"Register"},
  {path:'**',component:NotFoundComponent,canActivate:[authGuard],title:"NotFound"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
