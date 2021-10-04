import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { UserInterface } from '../user';
import { environment } from 'src/environments/environment';
import { Authorize } from 'projects/core-library/src/lib/components/autorize/authorize';
import { UserDTO } from 'projects/core-library/src/lib/dto/userDTO';
import { UserLogin } from '../userlogin';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = environment.server;
  private API_Version = environment.v1;
  private backendURL: string = String.prototype.concat(this.API_URL,this.API_Version,"/users");
  constructor(private httpClient: HttpClient) { }
  
  createUser(user: UserInterface): Observable<UserInterface>{
    return this.httpClient.post<UserInterface>(`${this.backendURL}`, user);
  }
  login(user:UserLogin):Observable<UserDTO> {
    return this.httpClient.post<UserDTO>(`${this.backendURL + "/login"}`, user)
  }
}
