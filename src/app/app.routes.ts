import { Routes } from '@angular/router';
import { LocationComponent } from './Components/location/location.component';
import { TourPlanComponent } from './Components/tour-plan/tour-plan.component';
import { HomeComponent } from './Components/home/home.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'location', component: LocationComponent},
  {path: 'tour-plan', component: TourPlanComponent},
];
