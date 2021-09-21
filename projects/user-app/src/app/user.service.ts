import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user';
import { authorize } from './authorize/authorize';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private backendURL: string = "http://localhost:8080/api/v1/users";
  constructor(private httpClient: HttpClient) { }
  
  createUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.backendURL}`, user);
  }
  @authorize()
  findAllUser(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.backendURL}`)
  }
}
