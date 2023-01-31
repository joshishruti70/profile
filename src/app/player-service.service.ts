import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PlayerServiceService {

  constructor(private http:HttpClient) { }
  url1="http://localhost:9091/save";
  url2="http://localhost:9091/players";
  url3="http://localhost:9091/update";
  url4="http://localhost:9091/delete";

  insertService(data:any){
    return this.http.post(this.url1,data);
  }
  showPlayers(){
    return this.http.get(this.url2)
  }
  updateService(data:any){
    return this.http.post(this.url3,data);
  }
  droprecord(del:any){
    return this.http.post(this.url4,del);
  }
}
