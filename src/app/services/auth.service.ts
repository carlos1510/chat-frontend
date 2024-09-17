import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { AuthModel } from '@mean/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  saveToSession(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }

  readFromSession(key: string): AuthModel.UserTokenData {
    return this.getTokenData(sessionStorage.getItem(key) || '');
  }

  private getTokenData(token: string): AuthModel.UserTokenData {
    return token ? jwtDecode(token) : AuthModel.userTokenData;
  }
}
