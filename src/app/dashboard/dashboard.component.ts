import { Component, OnInit } from '@angular/core';
import { User } from '../models';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: User;

  constructor() { }

  ngOnInit() {
  }

}
