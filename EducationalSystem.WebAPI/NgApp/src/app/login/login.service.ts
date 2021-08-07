import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { IResponse } from '../models/login-response';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({ providedIn: 'root' })
export class LoginService {
    public isLoggedIn: boolean;
    private getLoginResponseUrl = 'Account/Token/';
    private getTestUrl = "courses";

    public constructor(private http: HttpClient, @Inject(LOCAL_STORAGE) private storage: StorageService) { }

    public logIn(login: string, password: string): Observable<IResponse> {
        return this.http.post<IResponse>(`${environment.apiUrl}${this.getLoginResponseUrl}${login}/${password}`, null);
    }

    public logOut(): void {
        this.storage.clear();
    }

    public test(): Observable<string>{
        return this.http.get(`${environment.apiUrl}${this.getTestUrl}`, {responseType: 'text'});
    }
}
