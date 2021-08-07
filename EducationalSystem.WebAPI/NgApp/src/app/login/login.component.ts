import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { MessageService } from '../services/message.servie';
import { IResponse } from '../models/login-response';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
    selector: 'login-app',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [
        LoginService
    ]
})

export class LoginComponent {
    public form: FormGroup;
    public testString = "Test123";

    public constructor(private loginService: LoginService, @Inject(LOCAL_STORAGE) private storage: StorageService,
                       private router: Router, private notification: MessageService) {
        this.form = new FormGroup({
            'login': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.required)
        });
    }

    public onLogin() {
        const login = this.form.controls['login'].value;
        const password = this.form.controls['password'].value;
        this.loginService.logIn(login, password).pipe(take(1)).
            subscribe(
                (response: IResponse) => {
                    this.storage.set('access_token', response.access_token);
                    this.storage.set('role', response.role);
                    this.notification.connect(response.access_token).then(
                        () => this.notification.send());
                    this.router.navigate(['/professors']);
                }
            );
    }

    public onTest(){
        this.loginService.test().pipe(take(1)).subscribe(
            (data:string) => {
                this.testString = data;
            }
        )
    }
}
