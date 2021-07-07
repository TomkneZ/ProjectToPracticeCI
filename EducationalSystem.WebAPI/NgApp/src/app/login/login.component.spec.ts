import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { AppModule } from '../app.module';
import { mockLoginResponse } from '../mocks/login-response.mock';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let template: DebugElement;
    let templateHtmlElement: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        template = fixture.debugElement;
        templateHtmlElement = template.nativeElement;
    });

    it('should have a Component', () => {
        expect(component).toBeTruthy();
    });

    it('should have a form to fill in login and password', () => {
        expect(templateHtmlElement.innerHTML).toContain('form');
    });

    it('should have a login input', () => {
        const loginInput = fixture.debugElement.query(By.css('.login')).nativeElement;
        expect(templateHtmlElement.contains(loginInput)).toBeTruthy();
    });

    it('should have a password input', () => {
        const passwordInput = fixture.debugElement.query(By.css('.password')).nativeElement;
        expect(templateHtmlElement.contains(passwordInput)).toBeTruthy();
    });

    it('should display a button to call login function', () => {
        expect(templateHtmlElement.innerText).toContain('Login');
    });

    describe('Login', () => {
        let loginService: LoginService;
        beforeEach(() => {
            loginService = fixture.debugElement.injector.get(LoginService);
            spyOn(loginService, 'logIn').and.returnValues(of(mockLoginResponse));
        });

        it('component function should be called after click on login button', () => {
            spyOn(component, 'onLogin').and.callThrough();
            component.onLogin();
            expect(component.onLogin).toHaveBeenCalled();
        });
    });
});
