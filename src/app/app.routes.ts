import { Routes } from '@angular/router';
import { LocationComponent } from './Components/location/location.component';
import { HomeComponent } from './Components/home/home.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import {ProductComponent} from "./Components/product/product.component";
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: LocationComponent },

  { path: 'packages', component: ProductComponent },
   {path: 'location', component: LocationComponent},
  { path: '**', component: NotfoundComponent },
];
