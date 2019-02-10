import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../services';
import { Listing } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-all',
  templateUrl: './listing-all.component.html',
  styleUrls: ['./listing-all.component.css']
})
export class ListingAllComponent implements OnInit {

  listings: Listing[] = [];

  constructor(
    private readonly listingService: ListingService,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.allListings();
  }

  allListings() {
    this.listingService.findListings()
      .subscribe(listings => {
        this.listings = listings;
      });
  }

}
