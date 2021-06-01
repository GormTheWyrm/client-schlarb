import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Band } from './band';
import { Venue } from './venue';
import { User } from './user'

import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class NewsearchService {
  //artist api
  private artistUrl: string = "https://rest.bandsintown.com/artists/"; //url for artist search
  private ak: string = "/?app_id=de960fdbd41b94a4ccd7234c7da4f8ae";  //put on end of api requests

  //backend api
  private backendUrl: string = "http://localhost:7000";
  private loginUrl: string = "http://localhost:7000/login";


  private urlCrud: string;
  private urlAdd: string;
  constructor(private http: HttpClient) {
    this.urlCrud = "https://rest.bandsintown.com/artists/BillieEllish/events/?app_id=de960fdbd41b94a4ccd7234c7da4f8ae";
    this.urlAdd = "http://localhost:7000/user/"
  }
  // ${artist_name}

  public testVar: string;



  public getAllBands(): Observable<Band[]> {
    console.log(this.urlCrud) //trying something
    return this.http.get<Band[]>(this.urlCrud);

  }

  getBandFromApi(query): Observable<Band> {
    // console.log("api: " + );
    return this.http.get<Band>(this.artistUrl + query + this.ak);
    //replace this with the real api 
  }

  //used to add new user to database
  public addNewUser(user: User): void {
    this.http.post<User>(this.urlAdd, user)
      .subscribe(res => {
        console.log(res);

        console.log(res.username);
        console.log(res.password);
        sessionStorage.setItem('username', res.username);
        sessionStorage.setItem('password', res.password);
        
      });


  }//need to sata this data... and responce data






  public loginUser(user: User): void { //this user really only has a name and pw...
    //return...
    console.log(this.loginUrl);
    console.log(user);
    this.http.post<User>(this.loginUrl, user)
      .subscribe(res => {
        console.log(res.username);
        console.log(res.password);
        console.log(res.numArtists); //should be artistList length
        sessionStorage.setItem('username', res.username);
        sessionStorage.setItem('password', res.password);
        sessionStorage.setItem('numArtists', res.numArtists.toString());

      });


    // return this.http.post<User>(this.loginUrl, user); //temp
    //return the response!
    // return user;
  }
  public getUserInfo(){
    let pw:string = sessionStorage.getItem('password');
    let un:string = sessionStorage.getItem('username');
    let user:User = new User();
    user.password = pw;
    user.username = un;
    //missing lots of details... not needed for now

    return user;
  }

}
