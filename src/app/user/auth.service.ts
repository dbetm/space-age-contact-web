import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

interface User {
    id : Number;
    profile_pic : string;
    name : string;
    birthdate : string;
    email : string;
    password : string;
    country : string;
    motto : string;
    description : string;
    points : Number;
    education : Number[];
    work : Number[];
    following : Number[];
    followers : Number[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  BASE_API = 'https://space-age-contact.herokuapp.com/api'
  headers = {headers: new HttpHeaders(
      {'Content-Type':  'application/json'}
  )};

  register(name: string, birthdate: string, email: string, password: string,
    country: string) {
    return this.http.post(
      this.BASE_API + '/users/',
      // body content
      {
        'name': name,
        'birthdate': birthdate,
        'email': email,
        'password': password,
        'country': country
      },
      this.headers
    );
  }

}
