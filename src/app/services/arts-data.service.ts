import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtsDataService {
  constructor(private http:HttpClient) { }
  getArtworksById(id:number){
    return this.http.get<any>(`https://api.artic.edu/api/v1/artworks/${id}`)
  }
  getArtworksBySearch(pageIndex:number,pageSize:number,query:any){
    return this.http.get<any>(`https://api.artic.edu/api/v1/artworks/search?fields=image_id,id,title,artist_display,artwork_type_title&page=${pageIndex+1}&limit=${pageSize}&q=${query}`)
  }
  
}
