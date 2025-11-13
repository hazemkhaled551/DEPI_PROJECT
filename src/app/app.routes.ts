import { Routes } from '@angular/router';
import { LocationComponent } from './Components/location/location.component';
import { TourPlanComponent } from './Components/tour-plan/tour-plan.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductComponent } from './Components/product/product.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { PackageDetailsComponent } from './Components/package-details/package-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'packages', component: ProductComponent },
{
  path: 'packages-details',
  component: PackageDetailsComponent,
  children: [
    { path: '', redirectTo: 'tour-plan', pathMatch: 'full' },
    { path: 'tour-plan', component: TourPlanComponent },
    { path: 'location', component: LocationComponent },
  ],
},
  { path: '**', component: NotfoundComponent },
];
