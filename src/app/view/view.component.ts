import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtsDataService } from '../services/arts-data.service';
import { WishlistComponent } from '../wishlist/wishlist.component';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  artworks:any;
  id:number=0;
  constructor(private activatedRoute:ActivatedRoute,public artsData:ArtsDataService
    ,public wishlist:WishlistService){
    //getting the id from the route
    this.activatedRoute.params.subscribe(params=>{
      this.id=params['id']
    })
  }

  ngOnInit(): void {
    //getting the artwork details by id 
    this.artsData.getArtworksById(this.id).subscribe(response =>{
      this.artworks=response.data;
      console.log(this.artworks);
    });
    
  }
  
  isFavorite(artwork: any):boolean{
    return this.wishlist.wishlist.includes(artwork.id);
  }

  toggleFavorite(card: any) {
    if (this.isFavorite(card)) {
      this.wishlist.wishlist.splice(this.wishlist.wishlist.indexOf(card.id), 1);
    } else {
      this.wishlist.wishlist.push(card.id);
    }
  }
  share(id:number){
    if(navigator.share){
      navigator.share({
        title:"Copylink",
        text:"Check this art out",
        url:`${window.location.origin}/view/${id}`
      })
    }
  }
}
