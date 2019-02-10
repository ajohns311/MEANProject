import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../services';
import { Listing } from '../../models';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-listing-edit',
  templateUrl: './listing-edit.component.html',
  styleUrls: ['./listing-edit.component.css']
})
export class ListingEditComponent implements OnInit {

  listingID: string;
  listing: Listing;

  constructor(
    private readonly listingService: ListingService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log('params:', params.listing_id);
      this.listingID = params['listing_id'];
    });
    this.getListing();
  }

  getListing() {
    console.log('finding listing', this.listingID);
    this.listingService.findOne(this.listingID)
      .subscribe(listingFound => {
        this.listing = listingFound;
      });
  }

  editListing(listing: Listing) {
    this.listingService.editOne(listing, this.listingID)
      .subscribe(listingChange => {
        console.log('editing listing', listingChange);
        this.router.navigate(['/listings']);
      });
  }
 }
