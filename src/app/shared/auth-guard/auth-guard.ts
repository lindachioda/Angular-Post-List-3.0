import { CanActivateFn, Routes } from '@angular/router';
import { AuthService } from '../auth-service/auth-service';
import { inject, Component } from '@angular/core';
import { routes } from '../../app.routes';
import { NewUser } from '../../new-user/new-user';

export const authGuard: CanActivateFn = () => { 
  //canactivate è per avere il permesso di entrare in una rotta

  let authService = inject (AuthService) //come un costruttore

  return authService.isAuthenticated()
}
