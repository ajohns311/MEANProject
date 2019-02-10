import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Listing } from '../models';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListingService {

  private readonly base = '/api/listings';

  constructor(private readonly http: HttpClient) { }

  createListing(listing: Listing): Observable<Listing> {
    return this.http.post<Listing>(`${this.base}`, listing);
  }
  findListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>(this.base);
  }
  userListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>(`${this.base}/user`);
  }
  deleteListing(listing: Listing) {
    return this.http.delete(`${this.base}/${listing._id}`);
  }
  editOne(listing: Listing, listingID: string) {
    return this.http.put(`${this.base}/${listingID}`, listing);
  }
  findOne(listingID: string): Observable<Listing> {
    return this.http.get<Listing>(`${this.base}/edit/${listingID}`);
  }
}
