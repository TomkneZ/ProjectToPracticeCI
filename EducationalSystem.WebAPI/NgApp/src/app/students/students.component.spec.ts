import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { StudentsComponent } from './students.component';
import { By } from '@angular/platform-browser';
import { AppModule } from '../app.module';

describe('StudentsComponent', () => {
    let component: StudentsComponent;
    let fixture: ComponentFixture<StudentsComponent>;
    let template: DebugElement;
    let templateHtmlElement: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StudentsComponent);
        component = fixture.componentInstance;
        template = fixture.debugElement;
        templateHtmlElement = template.nativeElement;
    });

    it('should have a Component', () => {
        expect(component).toBeTruthy();
    });

    it('should have a table to display students', () => {
        expect(templateHtmlElement.innerHTML).toContain('table');
    });

    it('should have a form to fill in new students information', () => {
        expect(templateHtmlElement.innerHTML).toContain('form');
    });

    it('should display a button to call addStudent function', () => {
        expect(templateHtmlElement.innerHTML).toContain('button');
        expect(templateHtmlElement.innerText).toContain('Add student');
    });

    it('should have a firstName input', () => {
        const firstNameInput = fixture.debugElement.query(By.css('.firstName')).nativeElement;
        expect(templateHtmlElement.contains(firstNameInput)).toBeTruthy();
    });

    it('should have a lastName input', () => {
        const lastNameInput = fixture.debugElement.query(By.css('.lastName')).nativeElement;
        expect(templateHtmlElement.contains(lastNameInput)).toBeTruthy();
    });

    it('should have a phone input', () => {
        const phoneInput = fixture.debugElement.query(By.css('.phone')).nativeElement;
        expect(templateHtmlElement.contains(phoneInput)).toBeTruthy();
    });

    it('should have an email input', () => {
        const emailInput = fixture.debugElement.query(By.css('.email')).nativeElement;
        expect(templateHtmlElement.contains(emailInput)).toBeTruthy();
    });

    describe('Students', () => {
        it('should be loaded after OnInit', () => {
            fixture.detectChanges();
            expect(component.students).not.toBeNull();
        });
    });
});
