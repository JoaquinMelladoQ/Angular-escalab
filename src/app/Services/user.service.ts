import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL_API: string = environment.URL_API;

  constructor(private _httpClient: HttpClient) { }

  public getAllUser(): Observable<Array<any>>{
    let url = this.URL_API + "users";
    return this._httpClient.get<Array<any>>(url);
  }

  public getUser(userId: string): Observable<Array<any>>{
    let url = this.URL_API + "users/" + userId;
    return this._httpClient.get<any>(url);
  }
}
