import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@mean/services';
import { SessionStorageConstants } from '@mean/utils';

@Injectable({
  providedIn: 'root'
})

export class HomeGuard {
  constructor(
    private readonly router: Router,
    private readonly auth: AuthService
  ){ }

  canActivate(): boolean {
    const checkSession = this.auth.readFromSession(SessionStorageConstants.USER_TOKEN);
    if ( checkSession.user.id === 0 ) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
};
