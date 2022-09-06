import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VolleyappsService {
  url = 'https://www.thesportsdb.com/api/v1/json/2/all_leagues.php';
  key = '20220708230428';
  idLeague = '4328';
  constructor(private http: HttpClient) { }

  getData(){
     return this.http.get(`${this.url}thesportsdb?q=${this.idLeague}&appid=${this.key}&units=metric`);
}}
