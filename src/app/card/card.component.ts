import { Component,ViewChild } from '@angular/core';
import { ArtsDataService } from '../services/arts-data.service';
import { WishlistService } from '../services/wishlist.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  artworks: any[] = [];
  total=0;
  loaded=false;
  searchvalue=new FormControl("");
  @ViewChild (MatPaginator)paginator!:MatPaginator;
  constructor(public artsData: ArtsDataService, 
    public wishlist: WishlistService,public router:Router) { }
  ngOnInit(): void {
   this.artsData.getArtworksBySearch(0,8,"").subscribe(
    response=>{
      this.artworks=response.data;
      this.total=response.pagination.total;
      this.loaded=true;
    }
   );
  }

  public getServerData(pageIndex:number,pageSize:number) {
      this.artsData.getArtworksBySearch(pageIndex,pageSize,this.searchvalue.value).subscribe(
        response => {
          this.artworks = response.data;
          this.total=response.pagination.total;
          this.loaded=true;
        },
      );
  }

  search(){
    this.paginator.pageIndex=0;
    // this.paginator.pageSize=4;
    this.getServerData(this.paginator.pageIndex,this.paginator.pageSize);
  }
 
  change(event:any){
    this.paginator.pageIndex=event.pageIndex;
    this.paginator.pageSize=event.pageSize;
    this.getServerData( this.paginator.pageIndex, this.paginator.pageSize)
  }

  view(idx:number){
    this.router.navigate([`/view/${idx}`])
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
