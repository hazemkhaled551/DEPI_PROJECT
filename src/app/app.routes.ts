import { Routes } from '@angular/router';
import { ProductComponent } from './Components/product/product.component';
import { HomeComponent } from './Components/home/home.component'; 

export const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' }, 
  { path: 'product', component: ProductComponent },

];

