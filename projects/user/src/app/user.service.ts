import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user';
import { authorize } from './authorize/authorize';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = environment.server;
  private API_Version = environment.v1;
  private backendURL: string = String.prototype.concat(this.API_URL,this.API_Version,"/users");
  constructor(private httpClient: HttpClient) { }
  
  createUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.backendURL}`, user);
  }
  @authorize()
  findAllUser(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.backendURL}`)
  }
  getUserById(id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.backendURL}/${id}`);
  }

  updateUser(id: number, user: User): Observable<Object>{
    return this.httpClient.put(`${this.backendURL}/${id}`, user);
  }
  deleteUser(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.backendURL}/${id}`);
  }
}
