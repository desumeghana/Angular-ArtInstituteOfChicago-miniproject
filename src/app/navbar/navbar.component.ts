import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ArtsDataService } from '../services/arts-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  artworks:any=[]
  searchvalue=new FormControl('');
  constructor(public artsData:ArtsDataService){}
 
}
