import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './Components/location/location.component';
import { TourPlanComponent } from './Components/tour-plan/tour-plan.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ProductComponent } from './Components/product/product.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { PackageDetailsComponent } from './Components/package-details/package-details.component';
import { GalleryComponent } from './Components/gallery/gallery.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'packages', component: ProductComponent },
  {
    path: 'packages-details',
    component: PackageDetailsComponent,
    children: [
      { path: '', redirectTo: 'tour-plan', pathMatch: 'full' },
      { path: 'tour-plan', component: TourPlanComponent },
      { path: 'location', component: LocationComponent },
      {path: 'gallery', component: GalleryComponent},
    ],
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
