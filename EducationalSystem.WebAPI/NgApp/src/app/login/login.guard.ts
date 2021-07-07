import { Injectable, Inject } from '@angular/core';
import {
    ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot
} from '@angular/router';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { LoginService } from './login.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { PROFESSOR_ROLE_ID } from '../app.constants';

@Injectable()
export class LoginGuard implements CanActivate, CanActivateChild {
    private jwtHelper = new JwtHelperService();

    constructor(private loginService: LoginService, private router: Router, @Inject(LOCAL_STORAGE) private storage: StorageService) { }

    public canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const role = this.storage.get('role');
        return role === PROFESSOR_ROLE_ID;
    }

    public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const token = this.storage.get('access_token');
        return !this.jwtHelper.isTokenExpired(token);
    }
}
