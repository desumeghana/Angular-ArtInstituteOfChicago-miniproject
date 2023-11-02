import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishlist:any=[];
  constructor(private http:HttpClient) { }
  add(id:number){
    this.wishlist.push(id);
  }
  getArtworksBySearch(s:string){
    return this.http.get<any>(`https://api.artic.edu/api/v1/artworks/?ids=${s}&search?fields=image_id,id,title,artist_display,artwork_type_title`)
  }
}
