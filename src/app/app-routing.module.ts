import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ListingsComponent } from './listings/listings.component';
import { ListingNewComponent } from './listings/listing-new/listing-new.component';
import { ListingAllComponent } from './listings/listing-all/listing-all.component';
import { ListingEditComponent } from './listings/listing-edit/listing-edit.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'listings',
    component: ListingsComponent,
    children: [
      {
        path: 'new',
        component: ListingNewComponent
      }
    ]
  },
  {
    path: 'browse',
    component: ListingAllComponent
  },
  {
    path: 'edit/:listing_id',
    component: ListingEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
