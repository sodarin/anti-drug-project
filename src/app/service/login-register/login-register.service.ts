import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  dataLogin: any = {}

  constructor(private http: HttpClient) { }

  postLogin(username: string, password: string) {
    return this.http.post('login/doLogin', {
      username: username,
      password: password
    });
  }

  postRegister(
    username: string,
    email: string,
    phoneNumber: number,
    password: string
  ) {
    console.log(username, email, phoneNumber, password);
    

    return this.http.post('login/doRegister', {
      username: username,
      email: email,
      phoneNumber: phoneNumber + "",
      password: password
    });
  }

}
