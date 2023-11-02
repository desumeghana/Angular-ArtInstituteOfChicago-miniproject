import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ArtsDataService } from './services/arts-data.service';
import { WishlistService } from './services/wishlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MiniProject';
  @ViewChild(MatPaginator) paginator!: MatPaginator;

 
  constructor(public artsData:ArtsDataService,public wishlist:WishlistService){}
 
  
}
