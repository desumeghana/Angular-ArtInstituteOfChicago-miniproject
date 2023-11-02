import { Component } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';
import { ArtsDataService } from '../services/arts-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  artworksid: any[] = [];
  artworks:any[]=[];
  total=0;
  s="";
  constructor(public wishlistobj:WishlistService,public artsData:ArtsDataService,public router:Router){
    this.artworksid=this.wishlistobj.wishlist;
    this.getWishlistData();
  }
  getWishlistData(){
    if(this.artworksid.length!=0){
      for(let i=0;i<this.artworksid.length;i++){
        this.s+=this.artworksid[i].toString()+",";
      }
      this.s=this.s.slice(0,this.s.length-1);
      this.wishlistobj.getArtworksBySearch(this.s).subscribe(
        response => {
          this.artworks = response.data;
        },
      );
    }
    else{
      this.artworks=[];
    }
  }

  view(idx:number){
    this.router.navigate([`/view/${idx}`])
  }

  isFavorite(artwork: any):boolean{
    return this.wishlistobj.wishlist.includes(artwork.id);
  }

  toggleFavorite(card: any) {
    if (this.isFavorite(card)) {
      this.wishlistobj.wishlist.splice(this.wishlistobj.wishlist.indexOf(card.id), 1);
      this.artworksid=this.wishlistobj.wishlist;
      this.getWishlistData();
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
