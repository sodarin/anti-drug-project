import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {
  
  constructor(private http: HttpClient) { }

  postLogin(username: string, password: string) {
    var res = this.http.post(`/login/doLogin?username=${username}&password=${password}`, {});
    res.subscribe((res: any) => {
      window.localStorage["id"] = res.id;
      window.localStorage["password"] = res.password;
      window.localStorage["salt"] = res.salt;
      window.localStorage["nickname"] = res.nickname;
      window.localStorage["title"] = res.title;
      window.localStorage["smallavatar"] = res.smallavatar;
      window.localStorage["mediumavatar"] = res.mediumavatar;
      window.localStorage["largeavatar"] = res.largeavatar;
      window.localStorage["roles"] = res.roles;
    })
    return res;
  }

  checkUsername(username: string) {
    return this.http.get(`/login/checkNickname?userName=${username}`, {});
  }

  postRegister(
    username: string,
    email: string,
    phoneNumber: number,
    password: string
  ) {
    return this.http.post(
      `/login/doRegister?` +
      `email=${email}&` +
      `password=${password}&` +
      `phoneNumber=${phoneNumber}&` +
      `userName=${username}`
      , {});
  }
}
