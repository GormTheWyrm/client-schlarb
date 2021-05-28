import { Injectable } from '@angular/core';
import { Observable, of, throwError  } from 'rxjs';
import { Band } from './band';
import { Venue } from './venue';

import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
// import { Configuration }                                     from './configuration';


@Injectable({
  providedIn: 'root'
})
export class NewsearchService {

  private urlCrud: string;
  // private urlSearch: string;
  constructor(private http: HttpClient) {
    this.urlCrud = "https://rest.bandsintown.com/artists/BillieEllish/events/?app_id=de960fdbd41b94a4ccd7234c7da4f8ae";
    
  }
  // ${artist_name}
  public getAllBands(): Observable<Band[]> {
    return this.http.get<Band[]>(this.urlCrud);
  }

  getBandsFromApi(): Observable<Band[]> {
    // console.log("api: " + );
    return this.http.get<Band[]>(this.urlCrud); 
    //replace this with the real api 
  }


  // getBandsFromApi(query): Observable<Band[]> {
  //   console.log("api: " + query);
  //   return this.http.get<Band[]>("https://rest.bandsintown.com/artists/${query}/events/?app_id=de960fdbd41b94a4ccd7234c7da4f8a"); 
  //   //replace this with the real api 
  // }
  //We want this to work and implement the string literal of the the query

}

// (method) HttpClient.get(url: string, options: {
//   headers?: HttpHeaders | {
//       [header: string]: string | string[];
//   };
//   observe?: "body";
//   params?: HttpParams | {
//       [param: string]: string | string[];
//   };
//   reportProgress?: boolean;
//   responseType: "arraybuffer";
//   withCredentials?: boolean;
// }): Observable<...> (+14 overloads)











// @Injectable({
//   providedIn: 'root'
// })
// export class NewsearchService {
//   //newsearch should get bands or venues from external api

//   getBands(): Observable<Band[]> {
//     const bands = of(
//       [
//         {
//         id: 5,
//         name: "test",
//         url: "string",
//         image_url: "string",
//         facebook_page_url: "string",
//         mbid: "string", 
//         tracker_count: 2, 
//         upcoming_event_count: 1,
//       },
//       {
//         id: 4,
//         name: "test",
//         url: "string",
//         image_url: "string",
//         facebook_page_url: "string",
//         mbid: "string", 
//         tracker_count: 3, 
//         upcoming_event_count: 1
//       }
//       ]
//     );
//     return bands;
//     //this will need to be replaces with real api data
//   }
  // getBandsFromApi(query) {
  //   console.log("api: " + query);
  //   return this.httpClient.get<Band>("https://pokeapi.co/api/v2/pokemon/123"); //replace this with the real api 


  // }
//   getVenues(): Observable<Venue[]> {
//     const venues = of(
//       [{
//         name: "string",
//         latitude: "string",
//         longitude: "string",
//         city: "string",
//         region: "string",
//         country: "string"
//       }
//       ]
//     );
//     return venues;
//   }

//   constructor(protected httpClient: HttpClient) { }
//   // constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
// }

    