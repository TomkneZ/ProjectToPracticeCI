import { LoginService } from './login.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
import { mockLoginResponse } from '../mocks/login-response.mock';

describe('LoginService', () => {
    let httpTestingController: HttpTestingController;
    let loginService: LoginService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [LoginService]
        });

        loginService = TestBed.get(LoginService);
        httpTestingController = TestBed.get(HttpTestingController);
    });

    it('logIn method should return response with user account information', () => {
        const getLoginResponseUrl = 'Account/Token/';

        const username = 'Allisa';
        const password = 'Allisa';

        loginService.logIn(username, password).subscribe(response => expect(response).toBe(mockLoginResponse));
        const req = httpTestingController.expectOne(`${environment.apiUrl}${getLoginResponseUrl}${username}/${password}`);
        expect(req.request.method).toBe('POST');

        req.flush(mockLoginResponse);
    });

    afterEach(() => httpTestingController.verify());
});
