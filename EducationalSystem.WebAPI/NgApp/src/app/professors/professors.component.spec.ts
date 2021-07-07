import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ProfessorsComponent } from './professors.component';
import { By } from '@angular/platform-browser';
import { ProfessorsService } from './professors.service';
import { CoursesService } from '../courses/courses.service';
import { of } from 'rxjs';
import { AppModule } from '../app.module';
import { mockProfessors } from '../mocks/professors.mock';
import { mockCourses } from '../mocks/courses.mock';

describe('ProfessorsComponent', () => {
    let component: ProfessorsComponent;
    let fixture: ComponentFixture<ProfessorsComponent>;
    let template: DebugElement;
    let templateHtmlElement: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProfessorsComponent);
        component = fixture.componentInstance;
        template = fixture.debugElement;
        templateHtmlElement = template.nativeElement;
    });

    it('should have a Component', () => {
        expect(component).toBeTruthy();
    });

    it('should have a select to display all active professors', () => {
        expect(templateHtmlElement.innerHTML).toContain('mat-select');
    });

    it('should have a table to display a selected professor active courses', () => {
        expect(templateHtmlElement.innerHTML).toContain('table');
        expect(templateHtmlElement.innerHTML).toContain('th');
        expect(templateHtmlElement.innerHTML).toContain('tr');
        expect(templateHtmlElement.innerHTML).toContain('td');
    });

    describe('Professors', () => {
        let professorsService: ProfessorsService;
        beforeEach(() => {
            professorsService = fixture.debugElement.injector.get(ProfessorsService);

            spyOn(professorsService, 'getActiveProfessors')
                .and.returnValue(of(mockProfessors));
        });

        it('should not be loaded before OnInit', () => {
            expect(component.professors).toBeUndefined('Professors should not be loaded before component initializaton');
        });

        it('should be loaded after OnInit', () => {
            fixture.detectChanges();
            expect(component.professors).toBeDefined('Professors should be loaded after component initialization');
        });
    });

    describe('Courses', () => {
        let coursesService: CoursesService;

        beforeEach(() => {
            coursesService = fixture.debugElement.injector.get(CoursesService);
            spyOn(coursesService, 'getProfessorCourses')
                .and.returnValue(of(mockCourses));
        });

        it('should not be loaded courses unless professor is selected', () => {
            expect(component.courses).toBeUndefined('Courses should be null');
        });

        it('should be loaded after professor is selected', () => {
            spyOn(component, 'onOptionsSelected').and.callThrough();
            component.onOptionsSelected(9);
            expect(component.onOptionsSelected).toHaveBeenCalled();
            fixture.detectChanges();
            expect(component.courses).toBeDefined('Courses should be loaded after professor is selected');
        });
    });
});
