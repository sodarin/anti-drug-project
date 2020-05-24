import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  dataLogin: any = {}

  constructor(private http: HttpClient) { }

  postLogin(username: string, password: string) {
    let res = this.http.post('login/doLogin', { username, password }).toPromise();
    res.then(data => {
      if (typeof data === "object") {
        this.dataLogin = data;
        window.localStorage["id"] = this.dataLogin.id;
        window.localStorage["password"] = this.dataLogin.password;
        window.localStorage["salt"] = this.dataLogin.salt;
        window.localStorage["nickname"] = this.dataLogin.nickname;
        window.localStorage["title"] = this.dataLogin.title;
        window.localStorage["smallavatar"] = this.dataLogin.smallavatar;
        window.localStorage["mediumavatar"] = this.dataLogin.mediumavatar;
        window.localStorage["largeavatar"] = this.dataLogin.largeavatar;
        window.localStorage["roles"] = this.dataLogin.roles;
      }
    })

    return res;
  }
}
